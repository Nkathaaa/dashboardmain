import React,{ useEffect} from 'react';
import { showToast } from "../../utils/tools";

import { useSelector } from "react-redux";
const Header=(props)=> {
 const notifications=useSelector(state=>state.notifications)  
 useEffect(()=>{
   if(notifications && notifications.error){
  const msg=notifications.msg ?notifications.msg:"Error";
  showToast('ERROR',msg);
   }
   if(notifications && notifications.success){
    const msg=notifications.msg ?notifications.msg:"Error";
    showToast('SUCCESS',msg);
     }

 },[notifications])

  return (
    <div>


<header>
      <div className="d-flex flex-column flex-md-row align-item-center p-3 px-md-4 mb-3 border-bottom">
        <h5 className="my-0 mr-md-auto font-weight-normal">MyApp</h5>
        <nav className="my-2 my-md-0 mr-md-3">
  <h4>ttl</h4>
        </nav>
        
      </div>
    </header>
    </div>
  )
}
export default Header