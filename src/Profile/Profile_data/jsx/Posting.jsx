import React from "react";
import p from "../css/Posting.module.css";
import Posts from "./Posts";

const Posting = () => {
    return <div className={p.item + ' ' + p.postsblock}>
        <div>
            <h3>My posts</h3>

        </div>
        <div>
            <div>
                <textarea> </textarea>
                <button>Post</button>
            </div>
            <Posts message='hi'/>
            <Posts message="this is my second programm"/>
            <Posts message='Let is work'/>
            <Posts message="First start for JS"/>

        </div>
    </div>
}
export default Posting;