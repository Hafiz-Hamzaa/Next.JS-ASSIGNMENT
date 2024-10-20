import './page.css'
import Nav from "./components/page"
export default function Home(){
  return(
    <div className='bg-img'>
    <div>
      <Nav/>
      <div className='main'>
          <h1 className='content'>Infinite Loops</h1>
      </div>
      <div className='textual'>    
          <p className='text'>Bootstrap 4  Parallax Theme <br />
            Free HTML Template by TOOPLATE</p>
      </div>
    </div>
    </div>
  )
}