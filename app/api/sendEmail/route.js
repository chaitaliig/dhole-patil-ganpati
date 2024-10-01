import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

const email1 = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;


export async function POST(request) {
    try {
        const { name, email, phonenumber, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            // host: 'smtpro.zoho.in',
            // port: 465,
            secure: true,
            auth: {
                user: email1,
                pass: pass,
            }
        })

        const mailOption = {
            from: email1,
            to: 'santgh16@gmail.com',
            subject: "Contact Form Enquiry",
            html: `
            <h3>Contact Form Enquiry</h3>
            <h4><p> Name: ${name}</p></h4>
            <h4><p> Email: ${email}</p></h4>
            <h4><p> Phone Number: ${phonenumber}</p></h4>
            <h4><p> Message: ${message}</p></h4>
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}