import React from 'react';
import whatsappIcon from '../../assets/images/icons/purple-heart.svg';


function CardProffy() {
    return (
        <div className="card-container">
            <div className="card-header">
                <img src="" alt="" className="avatar" />
                <div className="short-profile">
                    <h2 className="profile-name">Youre Pena</h2>
                    <span className="profile-interesting"></span>
                </div>
            </div>
            <div className="card-body">
                <p></p>
            </div>
            <div className="card-footer">
                <div className="container-price">
                    <span className="price-label"></span>
                    <span className="price"></span>
                </div>
                <button className="contact">
                    <img src={whatsappIcon} alt="Whatsapp Logo" />
                </button>
            </div>
        </div>
    );
};

export default CardProffy;