const sgMail = require('@sendgrid/mail')

export default async function( req, res ) {
  sgMail.setApiKey(process.env.env.NEXT_PUBLIC_SENDGRID_API_KEY)

  const { name, email, message } = req.body

  const content = {
    to: 'monica@monicabrowneflowers.com',
    from: 'monica@monicabrowneflowers.com',
    subject: `New message from ${email}`,
    text: message,
    html: `<div>
            <p>From ${name}</p>
            <p>${message}</p>
          </div>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }

}