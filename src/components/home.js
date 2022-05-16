import React, { Component } from 'react'
import { connect} from "react-redux"
import { userslist} from "../store/actions" 
class Home extends Component {

  render() {
      console.log(this.props)
    return (
      <>
      Home
      </>
    )
  }
}
export default connect()(Home);
//injects props on home component