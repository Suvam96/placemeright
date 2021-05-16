import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import "./Contact.css"
import {BsSearch} from "react-icons/bs";
import {BiChevronDown} from "react-icons/bi";
import { Link } from 'react-router-dom';
const Contact = () => {

    const [contactlist,setContactList] = useState([]);

    useEffect(() => {
        getcontactlist();
    }, [])
    
       
    const getcontactlist = ()=>{
            axios.get("https://reqres.in/api/users").
            then((response)=>{
                console.log("response",response)
                setContactList(response.data.data);
            }).catch((error)=>{
                console.log("error",error)
            })
    }
    return (
    

 <div className="drop-container">
     <div className="drop-container-child">

     
     
 <div class="drop">
     <div className="d-flex pt-3 px-5 justify-content-between align-items-center"> 
     <h5>All <BiChevronDown/></h5>
     <h5><BsSearch/></h5>
     </div>
     {contactlist.map((x)=>{
         return(
 
      <Link class="drop__container" id="drop-items" to ={`/user/${x.id}`} >
        <div class="drop__card">
          <div class="drop__data">
            <img src={x.avatar}alt="Perfil_01" class="drop__img" />
            <div>
              <h1 class="drop__name">{x.first_name} {x.last_name}</h1>
              <span class="drop__profession">{x.email}</span>
            </div>
          </div>

          <div>
            <p>7.52 am</p>
          </div>
        </div>
      
        </Link>
                    
                    )
                })}
    </div>
    </div>
    </div>
    
        
    )
}

export default Contact
