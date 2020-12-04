import React from 'react';
import AvatarCard from '../components/AvatarCard/index';
import MythCreator from '../components/MythCreator/index'
import Myths from "../components/Myths/index"



const Profile = () => {
 

    return (
    <div>
        <AvatarCard></AvatarCard>
        <MythCreator></MythCreator>
        <Myths></Myths>
        
    </div>
  );
}

export default Profile;