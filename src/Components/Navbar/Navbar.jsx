import "./Navbar.css"

const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
        <div className="nav-left flex-div">
            <img src="/assets/menu.png" alt="" className="menu-icon" onClick={()=>setSidebar(prev=> !prev)}/>
            <img src="/assets/logo.png" alt="" className="logo"/>
        </div>
        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
                <input type="text" placeholder="Search" />
                <img src="/assets/search.png" alt="" />
            </div>
            
        </div>
        <div className="nav-right flex-div">
            <img src="/assets/upload.png" alt="" />
            <img src="/assets/more.png" alt="" />
            <img src="/assets/notification.png" alt="" />
            <img src="/assets/jack.png" className="user-icon " alt="" />
        </div>
    </nav>
  )
}

export default Navbar