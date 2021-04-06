import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

const About = () => {
  return (
    <>
      <Head>
        <title>The Flower Moments</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css" />
      </Head>
      <div className='container'>
        <Header />
        <main className='content about-container'>
          <h1 className='title'>The Flower Moments</h1>
          <img src='../images/monica-pic.jpeg' alt='Monica Browne' />
          <p>Monica Browne Flowers provides a personalized floral experience for customer's in the greater Bowie, Upper Marlboro, and Crofton areas. We look forward to providing exceptional services to all new and repeat customer's. Looking to wow that special someone with an arrangement for a birthday, anniversary, sympathy, retirement or just because. Monica Browne Floral Designs is your reliable source for hand delivered flower arrangements.</p>
          <h2 className='center'>Testimonials</h2>
            <div className='testimonials'>
            <p>The flower arrangements are amazing. My daughter absolutely loves them. Thank you so much.</p>
            <p className='center'>Troy H.</p>
            <p>Thank you, Monica, for your professionalism. The floral arrangement was absolutely gorgeous! We’re beyond grateful and pleased to have found you! May your business and all connected to you continue</p>
            <p className='center'>Johnnerlyn J.</p>
          </div>
          <div className='center'>
            <button>
              <Link href='/'>
                <a>&larr; Shop for flowers</a>
              </Link>
            </button>
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  )
}

export default About