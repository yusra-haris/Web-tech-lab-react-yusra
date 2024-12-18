import React from 'react';
import './UserInfostyling.css';

function UserInfo ({user}){
    return(
        <div className='userinfodetails'>
        <div className='profileimg'> 
            <img className='profileimg' src={user.img} alt = 'Loading...' />
        </div>
        <div className='profiledetails'>
            <p> Full Name :  {user.name} </p>
            <p className='profemail'> Email Address :  {user.email} </p>
        </div>
        <p className='profilerole'> Role:  {user.role} </p>
        </div>
    );


}
export default UserInfo;