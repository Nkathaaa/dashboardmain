import React from 'react'
import { BootstrapTable } from 'react-bootstrap-table';


// function Datatable({data}) {
//     const columns = data[0] && Object.keys(data[0])
//     return (
//         <BootstrapTable 
//             keyField='id'
//             columns={columns}
        
//         />
//     )


            
  
// }

// export default Datatable

function Datatable({data}) {
    const columns = data[0] && Object.keys(data[0])
    return <table cellPadding={0} cellSpacing={0}>
        <thead>
            <tr>{data[0] && columns.map(heading => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
            {data.map(row => <tr>
                {
                    columns.map(column => <td>{row[column]}</td>)
                }
            </tr>)}
        </tbody>
    </table>
  
}

export default Datatable