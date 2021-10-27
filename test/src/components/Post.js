import React, { Component } from 'react'

const postComponent = (props) => {
    console.log(props.post)
    return (
        <tr>
            <td>{props.post.id}</td>
            <td>{props.post.date_created}</td>
            <td>{props.post.user.first_name} {props.post.user.last_name}</td>
            <td>{props.post.user.id}</td>
            <td>{props.post.title}</td>
            <td>{props.post.body}</td>
        </tr>
    )
}

export default postComponent;