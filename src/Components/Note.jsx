import React, { useEffect } from 'react'

const Note = () => {
    useEffect(() => {
  fetch("http://localhost:3535/notes/", {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));

    })
    return (
        <div>
            <h2>To See the Notes, go to console.....</h2>
        </div>
    )
}

export { Note }