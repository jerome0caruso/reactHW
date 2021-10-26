import React, { Component, useState, useEffect } from 'react'
import Post from '../components/Post';

const KekambasPost = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://kekambas-bs.herokuapp.com/posts`)
            .then(repsonse => repsonse.json())
            .then (data => setPost(data))
    })
    return (
        <div className="container">
            {post.length ? ( 
            <table className="table table-light table-striped">
                <thead>
                    <tr>
                        <td>Post Id</td>
                        <td>Date</td>
                        <td>Name</td>
                        <td>User Id</td>
                        <td>Title</td>
                        <td>Post</td>
                    </tr>
                </thead>
                <tbody>
                    {post.map((p, i) => <Post key={i} post={p}/> )}
                </tbody>
            </table>) : null}

        </div>
    );
}
export default KekambasPost;