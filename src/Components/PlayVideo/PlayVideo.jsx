import "./PlayVideo.css";
import video1 from "../../../public/assets/video.mp4"

const PlayVideo = () => {
  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <video src="/assets/video.mp4" controls autoPlay muted></video>
      <h3>Best YouTube Channel to Learn Web Development</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src="/assets/like.png" alt="" />
            125
          </span>
          <span>
            <img src="/assets/dislike.png" alt="" />
            2
          </span>
          <span>
            <img src="/assets/share.png" alt="" />
            Share
          </span>
          <span>
            <img src="/assets/save.png" alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src="/assets/jack.png" alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          Channel that makes learning easy
        </p>
        <p>
          Subscribe GreateStack to WAtch More Tutorials on web development
        </p>
        <hr />
        <h4>
          130 Comments
        </h4>
        <div className="comment">
          <img src="/assets/user_profile.jpg" alt="" />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam omnis cumque sed voluptates, dolorem ex sapiente aperiam dolor inventore possimus.</p>
            <div className="comment-action">
            <img src="/assets/like.png" alt="" /> <span>244</span>
            <img src="/assets/dislike.png" alt="" /> <span>4</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src="/assets/user_profile.jpg" alt="" />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam omnis cumque sed voluptates, dolorem ex sapiente aperiam dolor inventore possimus.</p>
            <div className="comment-action">
            <img src="/assets/like.png" alt="" /> <span>244</span>
            <img src="/assets/dislike.png" alt="" /> <span>4</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src="/assets/user_profile.jpg" alt="" />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam omnis cumque sed voluptates, dolorem ex sapiente aperiam dolor inventore possimus.</p>
            <div className="comment-action">
            <img src="/assets/like.png" alt="" /> <span>244</span>
            <img src="/assets/dislike.png" alt="" /> <span>4</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src="/assets/user_profile.jpg" alt="" />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam omnis cumque sed voluptates, dolorem ex sapiente aperiam dolor inventore possimus.</p>
            <div className="comment-action">
            <img src="/assets/like.png" alt="" /> <span>244</span>
            <img src="/assets/dislike.png" alt="" /> <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo