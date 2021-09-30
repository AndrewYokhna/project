import React from 'react';
import '../CSS/Profile.module.css'


const Profile = () => {
    return <div className='prof'>
        <div className='header_1'>
            <img
                src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
        </div>
        <div className='prof_1'>
            <img
                src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'/>
        </div>
        <div className='item'>
            <div>
                My posts
            </div>
            <div>
                New posts
            </div>
            <div>
                <div> Post 1
                </div>
                <div> Post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;