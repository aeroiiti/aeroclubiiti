import React from "react";
import moment from "moment";
import defpost from "../../assets/images/post_default.jpg";
const PostItem = ({ post }) => {
  return (
    <div className='card sticky-action '>
      <div className='row' style={{ margin: "0px", padding: "1.5rem 1rem" }}>
        <div className='card-image waves-effect waves-block waves-light col s12 m3 '>
          <img className='activator bg-cover' src={defpost} />
        </div>
        <div className='card-content s12 col m9'>
          <span className='card-title activator grey-text text-darken-4'>
            {post.name}
            <i className='material-icons right'>flight_takeoff</i>
          </span>
          <p>
            <span className='blue-grey-text text-lighten-2'>
              {moment(post.date).format("MMMM Do YYYY")}{" "}
            </span>
            <span className='badge green darken-2 white-text'>Ongoing</span>
          </p>
          <br></br>
          <div>
            {post.team.map((member) => (
              <div className='chip'>{member}</div>
            ))}
          </div>
          <br></br>
          <div className='truncate'>{post.description}</div>
        </div>
      </div>

      <div className='card-reveal row' style={{ margin: "0px" }}>
        <span className='card-title grey-text text-darken-4 '>
          {post.name}
          <i className='material-icons right'>flight_land</i>
        </span>
        <p>{post.description}</p>
      </div>
      {post.link && (
        <div className='card-action center-align'>
          <a href={post.link}>Visit Website</a>
        </div>
      )}
    </div>
  );
};

export default PostItem;
