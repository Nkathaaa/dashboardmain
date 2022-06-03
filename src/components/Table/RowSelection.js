import React,{useMemo} from "react"
import {
    useTable,useRowSelect
  
  } from 'react-table';
  import MOCK_DATA from "../MOCK_DATA.json"
  import { COLUMNS,GROUPED_COLUMNS } from "./columns.js"
  import "./table.css"
  import Checkbox from "./Checkbox.js"



 const  RowSelection =() => { 
    //memoize data to avoid react treating fetches as re-renders 
    const columns=useMemo(()=>COLUMNS,[])
    const data=useMemo( ()=>MOCK_DATA,[])

  
     const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        selectedFlatRows
      } =useTable({
        columns,
        data,
    },useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <Checkbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );
      
   
    return (
       <> 
        <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>     
    
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
          {
              footerGroups.map(footerGroup=>(
                  <tr {...footerGroup.getFooterGroupProps()}>
                      {footerGroup.headers.map((column)=>(
                          <td {...column.getFooterProps}>{column.render("Footer")}</td>
                      ))}
                      </tr>
              ) )
          }
       </tfoot>   
    
            
        </table>

    <p>Selected Rows</p>
      <pre>
        <code>
          {JSON.stringify(
            {
                selectedFlatRows:selectedFlatRows.map((row)=>row.original),
            },
            null,
            2
          )}
        </code>
      </pre>
    </>

   
    )
}

export default RowSelection

