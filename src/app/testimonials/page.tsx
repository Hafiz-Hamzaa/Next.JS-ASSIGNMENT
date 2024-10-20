import { time } from 'console'
import Nav from '../components/page'
import './page.css'
export default async function Testimonials(){
  await new Promise((res)=>{
    setTimeout(res,9000)
  })
    return(
      <div className='back-img'>
        <Nav/>
        <h2>Testimonials</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architecto sint adipisci veniam officiis eum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eligendi aliquam asperiores ads ipsum dolor sit amet consectetur adipisicing el
        </p>
        <div className='container'>
          <div className='cir' id='one'></div>
          <div className='cir' id='two'></div>
          <div className='cir' id='three'></div>
        </div>

        <div className='type'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing. <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur. <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    )
  }