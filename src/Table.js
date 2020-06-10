import React from 'react'
import Row from './Row'
class Table extends React.Component{
  
    render(){

       const newRows=()=>{
            const list=[]
            for(var j=1;j<10;j++){          //iterating for 9  rows
                list.push(<Row key1={j}/>)  //sending row number
            }
            return list
        }
        return(
            <table>
                {newRows()}
            </table>
        )
    }
}

export default Table 