import React from "react";

const CardMenu = (props) => {

    return (

        <div>

            <div className="card m-2" style={{width: "18rem"}}>
                <img src={props.image} className="card-img-top" alt={props.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="#" className="btn btn-primary">Book tour</a>
                    </div>
            </div>
        </div>
    )
}

export default CardMenu;