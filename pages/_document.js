import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='site'>
          <Main />
          <NextScript />
          <script async src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"></script>
          <div 
            hidden id="snipcart" 
            data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
            data-currency="usd">
          </div>
        </body>
      </Html>
    )
  }å
}

export default MyDocument
