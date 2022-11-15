import React from "react";

const Post = (props) => {
    return (
        <div className="post">
            <div className="content">
                <p className="name">Name :  {props.data.name}</p>
                <p className="city">City :  {props.data.city}</p>
                <button className="delete" onClick={props.remove(props.data.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Post;