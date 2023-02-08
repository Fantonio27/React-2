import React from "react"
import pic from "../assets/pic.jpg"

export default function Info(){
    return(
        <>
            <img src={pic} className="info--pic" />
            <h1>Francis Louie Antonio</h1>
            <h3>Frontend Developer</h3>
            <h4>FrancisAntonio.website</h4>
            <div className="buttons">
                <a href="https://mail.google.com/mail/u/0/" className="info--email">
                    <img src="https://img.icons8.com/material-rounded/16.5/1A1A1A/new-post.png" className="info--email--img"/>
                    <p>Email</p>
                </a>
                <a href="https://www.linkedin.com/login" className="info--linkin">
                    <img src="https://img.icons8.com/ios-filled/16.5/FFFFFF/linkedin.png" className="info--email--img"/>
                    <p>Linkedln</p>
                </a>
            </div>
        </>
    )
}
