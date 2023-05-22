import React from "react";

export default function Footerpage({footheading}){
    return(
        <footer className="py-5 bg-dark">
        <div className="container">
            <p className="m-0 text-center text-white">{footheading}</p>
        </div>
        </footer>
    )
}