import Link from 'next/link'
import './page.css'
export default function Nav(){
    return(
      <div className='nav-bar'>
        <div className='logo'>Infinite Loops</div>
        <ul className='links'>
          <Link href="/" className='sci'>Home</Link>
          <Link href="/testimonials" className='sci'>Testimonials</Link>
          <Link href="/gallery" className='sci'>Gallery</Link>
          <Link href="/Contact">Contact</Link>
        </ul>
      </div>
    )
  }
