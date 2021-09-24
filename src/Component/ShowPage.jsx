import React from 'react'
import { useTable}from 'react-table';
const ShowPage = (props) => {
  const{data,columns}=props;
  console.log("miii", data);
  console.log("columngot",columns)

const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows
    } = useTable(
        {
            columns,
            data,
        },)

    return (
      <div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headergroup) => (
              <tr {...headergroup.getFooterGroupProps()}>
                {headergroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Headers")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps}>
               {rows.map((row,i)=>{
                 prepareRow(row);
                 return (
                   <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr> 
                 ) ;      
               })}   
          </tbody>
        </table>
      </div>
    );
}

export default ShowPage;
