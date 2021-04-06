import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  if (router.pathname === '/about') {
    console.log("Red",'red')
  }
  return (
    <>
      <header>
        <Link href='/'>
          <a className='logo'>The Flower Moments</a>
        </Link>
        <div className='snipcart-checkout'>
          <img src='images/shopping-cart.svg' />
          <span className="snipcart-total-price"></span>
        </div>
      </header>
    </>
  )
}

export default Header