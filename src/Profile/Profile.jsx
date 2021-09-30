import React from 'react';
import Avatar from "./Profile_data/jsx/Avatar";
import Posts from "./Profile_data/jsx/Posts";
import Head from "./Profile_data/jsx/Header";
import Posting from "./Profile_data/jsx/Posting";



const Profile = () => {
    return <div>
        <Head />
        <Avatar />
        <Posts />
        <Posting />
            </div>
}
export default Profile;