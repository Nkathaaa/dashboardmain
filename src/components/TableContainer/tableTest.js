import React,{useMemo,useEffect,useState} from "react";
import Table  from "./table"
import axios from "axios"

 function TableTest() {
   
  const [data, setData] = useState([]);

    useEffect(() => {
      const doFetch = async () => {
        const response = await fetch("https://randomuser.me/api/?results=100")
        const body = await response.json()
        const contacts = body.results
        console.log(contacts)
        setData(contacts)
      }
      doFetch()
    }, [])
  
    return <div>Hello</div>
  }
export default TableTest

//const memoizedValue=useMemo(()=> compueExpensive(a,b),[a,b])
//pass a create function and an array of dependencies,functions paswed runs while renderings