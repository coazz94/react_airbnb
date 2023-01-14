import React from "react";
import star from "./images/Star 1.png"
import "./index.css"
import { people } from "./cardobjects";


const Card = ({info}) => {
    let badgeText = info.openSpots === 0 ?  "Sold Out" : "Online";

    return(
        <div className="card">
        {/* {info.openSpots === 0 && <div className="card--badge">Sold Out</div>} */}
        {<div className="card--badge">{badgeText}</div>}
            <img src={require(`./images/${info.coverImg}`)}  alt="not found" className="card--image"/>
            <div className="card--stats">
                <img src={star} alt="missing" className="card--star"/>
                <span>{info.stats.rating}</span>
                <span className="gray">({info.stats.reviewCount}) • </span>
                <span className="gray">{info.location}</span>
            </div>
            <p>{info.title}</p>
            <p><span className="bold">From ${info.price}</span> / person</p>
        </div>
    )
}

const Mapping = () => {
    const data = people.map(person => {
        return <Card
            info={person}
        />
    })

    return(
        <section className='cards'>
            {data}
        </section>
    )
}


export {Card, Mapping}


// without props
// const Card = () => {
//     return(
//         <div className="card">
//             <img src= {img1} alt="not found" className="card--image"/>
//             <div className="card--stats">
//                 <img src={star} alt="missing" className="card--star"/>
//                 <span>5.0</span>
//                 <span className="gray">(6) .</span>
//                 <span className="gray">USA</span>
//             </div>
//             <p>Life Lessons with Katie Zaferes</p>
//             <p><span className="bold">From $136</span> / person</p>

//         </div>
//     )
// }