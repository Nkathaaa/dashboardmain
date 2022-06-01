import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import isUserAuth from "./../store/actions/users_actions";
const GuardAccess = (ComposedComponent, roleCheck = false) => {
  const AuthenticationCheck = (props) => {
    const [auth, Setauth] = useState(false);
    const users = useSelector((state) => state.users);

    useEffect(() => {
      if (!users.auth) {
        //navigate('/')
      } else {
        Setauth(true);
      }
    }, [props, users]);

    if (auth) {
      return <ComposedComponent {...props} />;
    } else {
      //  <h1>Unauthorsied</h1>
    }
  };
  return AuthenticationCheck;
};
export default GuardAccess;
