require('dotenv').config()

module.exports = {
  env: {
    SENDGRID_API_KEY: process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
    SNIPCART_API_KEY: process.env.NEXT_PUBLIC_SNIPCART_API_KEY
  }
}