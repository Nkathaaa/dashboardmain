import React,{useMemo,useEffect,useState} from "react";
import Table  from "./table"
import axios from "axios"

 function TableContainer() {
   
  const [data, setData] = useState([]);
 
useEffect(() => {
  axios("http://api.tvmaze.com/search/shows?q=girls")
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => console.log(err))
}, []);

  const columns=useMemo(
    () => [
      {
        Header: "TV Show",
        columns: [
          {
            Header: "Name",
            accessor: "show.name"
          },
          {
            Header: "Type",
            accessor: "show.type"
          },
          {
            Header: "Language",
            accessor: "show.language"
          },
          {
            Header: "Official Site",
            accessor: "show.officialSite",
            Cell: ({ cell: { value } }) => value ? {value} : "-"
          },
          {
            Header: "Rating",
            accessor: "show.rating.average",
            Cell: ({ cell: { value } }) => value || "-"
          },
          {
            Header: "Status",
            accessor: "show.status",
          },
          {
            Header: "Premiered",
            accessor: "show.premiered",
            Cell: ({ cell: { value } }) => value || "-"
          },
          {
            Header: "Time",
            accessor: "show.schedule.time",
            Cell: ({ cell: { value } }) => value || "-"
          },
        ]
      }
    ]
    )
 console.log(data)
  return (
    <div className="att">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default TableContainer

//const memoizedValue=useMemo(()=> compueExpensive(a,b),[a,b])
//pass a create function and an array of dependencies,functions paswed runs while renderings