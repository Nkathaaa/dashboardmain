import React,{useMemo,useEffect,useState} from "react";
import axios from "axios"
import TableContainer  from "./TableContainer"
import { Container} from 'reactstrap';


 function TableTest() {
   
  const [data, setData] = useState([]);

    useEffect(() => {
      const doFetch = async () => {
        const response = await fetch("https://randomuser.me/api/?results=10g0")
        const body = await response.json()
        const contacts = body.results
        //console.log(contacts)
        setData(contacts)
      }
      doFetch()
    }, [])
    const columns = useMemo(
      () => [
        {
          Header: "Title",
          accessor: "name.title",
        },
        {
          Header: "First Name",
          accessor: "name.first",
        },
        {
          Header: "Last Name",
          accessor: "name.last",
        },
        {
          Header: "Email",
          accessor: "email",
        },
        {
          Header: "City",
          accessor: "location.city",
        },
      ],
      []
    )
    return (
    <Container style={{ marginTop: 100 }}>
       <TableContainer columns={columns} data={data} />
    </Container>
    )
  }
export default TableTest

//const memoizedValue=useMemo(()=> compueExpensive(a,b),[a,b])
//pass a create function and an array of dependencies,functions paswed runs while renderings