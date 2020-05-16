import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgxf6F-MQvh3km7o_R70rQy-8GAmFrAjQt8wQrGG9dayvNvNN3&usqp=CAU" alt="" />
      </div>
      <div className={c.descriptionBlock}>
        ava + deiscription
      </div>
    </div>
  )
}

export default ProfileInfo;