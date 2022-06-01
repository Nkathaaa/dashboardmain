
import React, { useState, useEffect } from 'react'; 
import axios from 'axios'
import { getDatasetAtEvent } from 'react-chartjs-2';
import { BootstrapTable } from 'react-bootstrap-table';
import Datatable from './Index';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const Blank = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState('')



  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then((response) => response.json())
  //   .then((json) => setData(json))
  //   // .catch(error => console.log(error))
  // }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios('https://jsonplaceholder.typicode.com/posts').then((res) => 
      {console.log(res.data)
      setData(res.data)}
    )
  }

  function search(rows) {
    return rows.filter(row => row.title.toLowerCase().indexOf(q) > -1)
  }

  const columns = [{
    dataField: 'title',
    text: 'Title'
  },
  {
    dataField: 'body',
    text:'Body'
  }

]

  return (
   <div>
     <div>
       <input type='text' value={q} onChange={(e) => setQ(e.target.value)} />
     </div>
     <div>
     <Datatable data={search(data)} />
     </div> 

     {/* <BootstrapTable keyField='id' data={data} columns={columns} />  */}
         
   </div>
   
  )
}

export default Blank
 