import React from "react";

const Card= ({img, title, description, buttonLabel, buttonUrl})=>{
    return (
        <div className="card" style={{"width": "20rem"}}>
            <img src={img} className="card-img-top" alt="microgreens" height={"230"}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={buttonUrl} className="btn btn-primary">{buttonLabel}</a>
            </div>
        </div>
    );
};

export default Card;