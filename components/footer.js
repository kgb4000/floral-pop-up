import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer>
        <nav>
          <ul>
            <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <Link href='/'>
          <a>The Flower Moments</a>
        </Link>
        <p className='center'>We Deliver!</p>
        <a href="tel:240-665-7890">(240) 665-3350</a>
        <p>All Rights Reserved &copy; {new Date().getFullYear()}</p>
        <a href="https://www.instagram.com/monicabrowneflowers/">
          <img src='images/instagram-icon.png' />
        </a>
      </footer>
    </>
  )
}

export default Footer