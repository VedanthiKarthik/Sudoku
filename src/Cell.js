import React from 'react'

class Cell extends React.Component{
    constructor(props){
        super()
        this.state={
            value:'', 
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange=(e)=>{
        this.setState({value:e.target.value})                       //update state
        {this.props.updateData(e.target.value,[this.props.row,this.props.col])}//in Row.js
    }

    
    render(){
        
    const r=this.props.row
    const c=this.props.col
    return(       
        <td >  
            <input 
            className="grid-box"
            type="number"
            min="1"
            max="9"
            maxLength='1'
            id="inp"
            placeholder={[r,c]}
            value={this.state.value}
            onChange={this.handleChange}
            ></input>
          </td>
    )
}
}
export default Cell


    // this.props.updateData(e.target.value,[this.props.row,this.props.col])
    // updatstate(e){
    //     this.setState({value:e.target.value})
    //     console.log(this.state.value)
    //     // this.props.updateData(this.state.value,[this.props.row,this.props.col])
    // }