import React,{useState,useEffect} from 'react'
import "./User.css";
import{useParams} from "react-router-dom"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {AiOutlineMail} from "react-icons/ai"
import axios from 'axios';
const UserScreen = () => {
    const[user,setUser] = useState();
    const {id} = useParams();
    console.log("id",id);

    useEffect(() => {
        getUser()
    }, [])
const getUser=()=>{
    axios.get(`https://reqres.in/api/users/${id}`).
    then((response)=>{
        console.log("response",response.data.data.avatar)
        setUser(response.data.data)
    }).catch((error)=>{
        console.log("error",error)
    })
}


    return (
        <div class="card">
           
         <div class="banner" 
      
        >
           
        </div>
        <div class="image-container pb-5">
        
        <div class="avatar"
        style={{
      
               backgroundImage: `url(${user?user.avatar:""})`,
             }} ></div>
         <h3>{user?user.first_name:""} {user?user.last_name:""}</h3>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p> 
           <div className="d-flex align-items-center justify-content-around">
              <h5><HiOutlineLocationMarker className="mx-3"/>location</h5>
            <a href = "mailto: abc@example.com" > <h5><AiOutlineMail className="mx-3"/> Send Mail</h5> </a> 
           </div>
            </div>
            <div className="row border bg-light">
                <div className="col-6 py-1 border"> 
                   <p>1500</p>
                   <h6>Followers</h6>
                </div>
                <div className="col-6 py-1">
                <p>3,500</p>
                   <h6>Following</h6>
                </div>
            </div>
         <div className="user">
           <h2>Follow</h2>
         </div> 
     </div>
    )
}

export default UserScreen;
