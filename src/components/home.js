import React, { Component } from 'react'
import { connect} from "react-redux"
import { userslist} from "../store/actions" 
class Home extends Component {
    getUsers(){
      this.props.dispatch(userslist())
    }
  render() {
   console.log(this.props)
     const { users }=this.props ;
    return (
    
      <>
      { users && users.userslist ?
      users.userslist.map(item=>(
        <div key={item.name}>
          name:{item.name}
          </div>
      ))
      :
      null
      
      }
       <button  onClick={()=>this.getUsers()}>get users </button>
      </>
    )
  }
}
const mapStateToProps=(state)=>{
  return{wholestate:state.users}

}
export default connect(mapStateToProps)(Home);
//injects props on home component