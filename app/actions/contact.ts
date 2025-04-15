"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
})

type FormData = z.infer<typeof formSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // In a real implementation, you would send an email here
    // For example, using a service like SendGrid, Mailgun, or Nodemailer

    // For demonstration, we'll log the data and simulate sending an email
    console.log("Form submission:", validatedData)

    // This is where you would send the email to contactolliewoodford@gmail.com
    // Example with Nodemailer (you would need to set up SMTP credentials as environment variables)
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: '"The Aqua Club Website" <noreply@theaquaclub.co.uk>',
      to: "contactolliewoodford@gmail.com",
      subject: `New contact form submission from ${validatedData.name}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Phone: ${validatedData.phone || 'Not provided'}
        
        Message:
        ${validatedData.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
    })
    */

    // Return success
    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Form submission error:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form inputs and try again.",
        errors: error.errors,
      }
    }
    return { success: false, message: "Failed to send your message. Please try again later." }
  }
}
