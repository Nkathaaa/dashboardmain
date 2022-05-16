import React, { Component } from 'react'
import { connect} from "react-redux"
import { userslist} from "../store/actions" 
class Home extends Component {
    getUsers(){
      this.props.dispatch(userslist())
    }
  render() {
 
      
    return (
    
      <>
       <button  onClick={()=>this.getUsers()}>get users </button>
      </>
    )
  }
}
export default connect()(Home);
//injects props on home component