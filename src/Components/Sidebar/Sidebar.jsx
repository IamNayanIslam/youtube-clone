import "./Sidebar.css" 

const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar? " " : "small-sidebar"}`}>
        <div className="sortcut-links">
            <div className="side-link">
                <img src="./assets/home.png" alt="" /> <p>Home</p>
            </div>
            <div className="side-link">
                <img src="./assets/game_icon.png" alt="" /> <p>Gaming</p>
            </div>
            <div className="side-link">
                <img src="./assets/automobiles.png" alt="" /> <p>Automobiles</p>
            </div>
            <div className="side-link">
                <img src="./assets/sports.png" alt="" /> <p>Sports</p>
            </div>
            <div className="side-link">
                <img src="./assets/entertainment.png" alt="" /> <p>Entertainment</p>
            </div>
            <div className="side-link">
                <img src="./assets/tech.png" alt="" /> <p>Technology</p>
            </div>
            <div className="side-link">
                <img src="./assets/music.png" alt="" /> <p>Music</p>
            </div>
            <div className="side-link">
                <img src="./assets/blogs.png" alt="" /> <p>Blogs</p>
            </div>
            <div className="side-link">
                <img src="./assets/news.png" alt="" /> <p>News</p>
            </div>
            <hr />
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src="./assets/jack.png" alt="" /> <p>PewDiePie</p>
            </div>
            <div className="side-link">
                <img src="./assets/simon.png" alt="" /> <p>MrBeast</p>
            </div>
            <div className="side-link">
                <img src="./assets/tom.png" alt="" /> <p>Justin Bieber</p>
            </div>
            <div className="side-link">
                <img src="./assets/megan.png" alt="" /> <p>5-Minute Crafts</p>
            </div>
            <div className="side-link">
                <img src="./assets/cameron.png" alt="" /> <p>Nas Daily</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar