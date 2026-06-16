import { NextResponse } from "next/server";
import { ConfidentialClientApplication } from "@azure/msal-node";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject") || "No subject";
    const message = formData.get("message");
    const file = formData.get("file");

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const attachments = [];

    if (file && file.size > 0) {
      const maxSize = 3 * 1024 * 1024;

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      const allowedExtensions = [".pdf", ".doc", ".docx"];
      const fileName = file.name.toLowerCase();

      const hasAllowedExtension = allowedExtensions.some((ext) =>
        fileName.endsWith(ext)
      );

      if (!allowedTypes.includes(file.type) || !hasAllowedExtension) {
        return NextResponse.json(
          { error: "Only PDF, DOC, and DOCX files are allowed" },
          { status: 400 }
        );
      }

      if (file.size > maxSize) {
        return NextResponse.json(
          { error: "File size must be less than 3MB" },
          { status: 400 }
        );
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      attachments.push({
        "@odata.type": "#microsoft.graph.fileAttachment",
        name: file.name,
        contentType: file.type || "application/octet-stream",
        contentBytes: buffer.toString("base64"),
      });
    }

    const msalClient = new ConfidentialClientApplication({
      auth: {
        clientId: process.env.MICROSOFT_CLIENT_ID,
        authority: `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}`,
        clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
      },
    });

    const tokenResponse = await msalClient.acquireTokenByClientCredential({
      scopes: ["https://graph.microsoft.com/.default"],
    });

    const response = await fetch(
      `https://graph.microsoft.com/v1.0/users/${process.env.OUTLOOK_FROM_EMAIL}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenResponse.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject: `Website Contact: ${subject}`,
            body: {
              contentType: "HTML",
              content: `
                <h2>New Contact Form Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
              `,
            },
            toRecipients: [
              {
                emailAddress: {
                  address: process.env.OUTLOOK_TO_EMAIL,
                },
              },
            ],
            replyTo: [
              {
                emailAddress: {
                  address: email,
                },
              },
            ],
            attachments,
          },
          saveToSentItems: true,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();

      return NextResponse.json(
        { error: error || "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        error: "Something went wrong",
        details: error.message,
      },
      { status: 500 }
    );
  }
}