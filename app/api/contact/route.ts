import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with API key from environment variables
const resend = new Resend("re_gSh7XoAa_3sv5pHF2DhvrVZbMQkUGj3Kn")

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    // Check if Resend API key is configured
    // if (!process.env.RESEND_API_KEY) {
    //   console.error("RESEND_API_KEY is not configured")
    //   return NextResponse.json(
    //     { error: "Email service is not configured. Please contact support directly." },
    //     { status: 500 },
    //   )
    // }

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: "AyurVeda Naturals <noreply@ayurvedanaturals.com>",
      to: ["sehgalpushkar26@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-radius: 8px; border-left: 4px solid #0891b2;">
            <p style="margin: 0; color: #0891b2; font-size: 14px;">
              This message was sent from the AyurVeda Naturals contact form.
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        This message was sent from the AyurVeda Naturals contact form.
      `,
    })

    console.log("Email sent successfully:", emailData)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)

    return NextResponse.json(
      { error: "Failed to send email. Please try again or contact us directly." },
      { status: 500 },
    )
  }
}
