import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
    user: 'your-email-username', // your SMTP username
    password: 'your-email-password', // your SMTP password
    host: 'smtp.your-email.com', // your SMTP server
    ssl: true,
});

export default async function handler(req: { method: string; body: { name: any; email: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; message: string; }): any; new(): any; }; end: { (arg0: string): void; new(): any; }; }; setHeader: (arg0: string, arg1: string[]) => void; }) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            const emailMessage = await client.sendAsync({
                text: message,
                from: `${name} <${email}>`,
                to: 'anasnadkar23@gmail.com', // replace with your recipient's email
                subject: `Message from ${name}`,
            });

            console.log(emailMessage);
            return res.status(200).json({ success: true, message: 'Email sent successfully!' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Error sending email.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
