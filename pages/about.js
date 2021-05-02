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
          <h1 className='title'>About The Flower Moments</h1>
          <img src='../images/monica-pic.jpeg' alt='Monica Browne' />
          <p>The Flower Moments is an independent flower shop designing  and providing beautiful flowers for all occasions. It is owned and operated by Monica Browne, a professional florist in Bowie Maryland, who has a wealth of knowledge and experience when it comes to designing floral arrangements. You can contact us <Link href="/contact">
            <a>here</a>
          </Link>.</p>
          <h2 className='center'>Testimonials</h2>
            <div className='testimonials'>
            <p>The flower arrangements are amazing. My daughter absolutely loves them. Thank you so much.</p>
            <p className='center'>Troy H.</p>
            <p>Thank you, Monica, for your professionalism. The floral arrangement was absolutely gorgeous! We’re beyond grateful and pleased to have found you! May your business and all connected to you continue</p>
            <p className='center'>Johnnerlyn J.</p>
          </div>
          <div className='center'>
            <Link href='/'>
              <a>
                <button>
                  &larr; Shop for flowers
                </button>
              </a>
            </Link>
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  )
}

export default About