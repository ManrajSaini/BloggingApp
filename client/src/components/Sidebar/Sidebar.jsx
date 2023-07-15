
import AboutMe from './about-me.png'
import "./Sidebar.css"

export default function Sidebar() {

  return (
    <div className="sidebar">
      <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={AboutMe}
          alt=""
        />
        <p>
          This is Manraj Singh, student at UIET PU pursuing BTech in CSE.
          Passionate about Web Development, Bhangra, Gym Workouts
          Committed to continuous learning and growth in the field of technology.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="siderbarSocial">
        <a href="https://www.linkedin.com/in/manraj-singh-006032250/" target='_blank'><i class="topIcon fa-brands fa-linkedin"></i></a>
        <a href="mailto:manraj.saini123@gmail.com" target='_blank'><i class="topIcon fa-brands fa-google"></i></a>
        <a href="https://wa.me/7986266675" target='_blank'><i class="topIcon fa-brands fa-whatsapp"></i></a>
        <a href="https://github.com/ManrajSaini" target='_blank'><i class="topIcon fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  )
}
