import React from "react";
import p from '../css/Avatar.module.css';
import shapka from "../img/Shapka.png";
import avatar from "../img/Avatar.jpg"


const Avatar = () => {
    return <div className={p.descriptionBlock}>
        <div className={p.face}>
            <img src={avatar} alt='avatar' />
            <a>Andrew Yokhna</a>
        </div>
    </div>
}

export default Avatar;
