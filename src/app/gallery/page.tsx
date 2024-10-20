import Nav from '../components/page'
import './page.css'
import Link from 'next/link'
export default function Gallery(){
    return(
      <div>
      <Nav/>
      <div>
        <h2 className="text">Gallery</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus beatae maxime eos quia, explicabo aliquid. <br />
        ipsum dolor sit amet consectetur adipisicing elit. Accusamus beatae maxime eos quia, explicabo.
        </p>
      </div>
      <div className='container'>
        <div className='box' id='one'></div>
        <div className='box' id='two'></div>
        <div className='box' id='three'></div>
        <div className='box' id='four'></div>
        <div className='box' id='five'></div>
      </div>
      </div>

    )
  }