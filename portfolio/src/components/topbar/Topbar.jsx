import "./topbar.scss"
import {ContactMail, ContactPhone} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
          <div className="left">
              <a href="#intro" className="logo">genius.</a>
              <div className="itemContainer">
                <ContactMail/>
                <span>(480)-532-9775</span>
                <ContactPhone/>
                <span>dlgunnell@outlook.com</span>
              </div>
          </div>
          <div className="right">              
          </div>
      </div>
    </div>
  )
}
