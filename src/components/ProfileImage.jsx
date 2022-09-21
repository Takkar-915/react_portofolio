import React from "react";
import { useState } from "react";
import profileImage_1 from '../Images/profile_1.jpg'
import profileImage_2 from '../Images/profile_2.jpg'
import profileImage_3 from '../Images/profile_3.jpg'

import './MainPage.css'

const ProfileImage = () => {

    const images = [
        profileImage_1,
        profileImage_2,
        profileImage_3
    ];

    let currentIndex = 0;

    const [imageSrc, setImageSrc] = useState(profileImage_1);

    // const UpdateImage = () => {
    //     if (currentIndex === 0){
    //         setImageSrc(images[currentIndex])
    //         currentIndex = currentIndex + 1
    //     }else if(currentIndex === 1){
    //         setImageSrc(images[currentIndex])
    //         currentIndex = currentIndex + 1
    //     }else if(currentIndex === 2){
    //         setImageSrc(images[currentIndex])
    //         currentIndex = 0
    //     }
    // };
    
    return(
        <div>
            <img 
            src={imageSrc} 
            className="profile_img"  />
        </div>
    );
}

export default ProfileImage;