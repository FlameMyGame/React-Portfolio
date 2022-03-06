import "./topbar.scss"
import {ContactMail, ContactPhone} from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <ContactPhone className="icon"/>
            <span>(480)-532-9775</span>
          </div>  
          <div className="itemContainer">
            <ContactMail className="icon"/>
            <span>dlgunnell@outlook.com</span>
          </div>
        </div>
        <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  )
}
