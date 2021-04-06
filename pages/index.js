import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

import products from '../products.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>Monica's Floral Pop Up</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css" />
      </Head>
      <div className='container'>
        <Header />
        <main className='content'>
          <h1 className='title'>The Flower Moments</h1>
          <h2 className='center title'>Mother's Day Virtual Pop-up</h2>
          <h2 className='center title'>Orders Delivered on Mother's Day</h2>
          <div className='products'>
            <ul className='products'>
            {products.map(({ id, title, image, description, price, url }) => (
              <li key={id} className='product-card'>
                <h2 className='title'>{title}</h2>
                <img src={image} className='product-img'/>
                <p>{description}</p>
                <p className='price'>${price}</p>
                <div className='center'>
                  <button 
                    className='buy-button snipcart-add-item'
                    data-item-name={title}
                    data-item-id={id}
                    data-item-price={price}
                    data-item-url={url}
                    data-item-image={image}
                    data-item-description={description}
                    data-item-custom1-name="Note for mom">
                    Add to cart
                  </button>
                </div>
              </li>
            ))}
            </ul>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
