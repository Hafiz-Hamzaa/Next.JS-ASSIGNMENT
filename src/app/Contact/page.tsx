import './page.css'
import Nav from "../components/page"
export default function Contact(){
    return(
      <div className='bg-image'>
        <Nav/>
        <h1 className="hg">Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed provident laborum aspernatur, nesciunt deserunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Necessitatibus, et! Lorem ipsum dolor sit amet consectetur adipisi
        </p>
        <form action="">
          <input type="text" id='t1'/><br /> 
          <input type="text" />
          <div className='feed'>
            <textarea id='txt'></textarea>
          </div>
          <input id='btn' type="submit" />
          </form>
      </div>
    )
  }