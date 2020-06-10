import React from 'react'
import Cell from './Cell'
class Row extends React.Component{

    constructor(){
        super()
        this.state={
            dataItems_new:[],
            dataSet:""
        }
        this.updateData=this.updateData.bind(this)
    }

    updateData(data,id){             //method to append new data 
        // {console.log(data,id)}
        const dataSet={              //binding data and position
            id:id,
            data:data
        }
        const dataItems_old=[...this.state.dataItems_new]   //coping previous state
        dataItems_old.push(dataSet)                         //push the new dataset to the copied list
        this.setState({dataItems_new:dataItems_old, dataSet:""})//update the state
    }

    
    render(){
        
        const list=[]
        const newCells= ()=>{
            for(var i=1;i<10;i++){          //iterating for 9 columns
              list.push(<Cell updateData={this.updateData} row={this.props.key1} col={i}/>)//sending props
            }                                                                          //sending row and col
            return list
        }
        return(
            <tr>{newCells()}</tr>
            
        )
}}
export default Row