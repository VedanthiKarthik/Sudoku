import React from 'react';
import './App.css';
import Table from './Table'
class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //     valItem:"",
  //     valueList:[]

  //   };
  // }

  // addValue=(val,pos1,pos2)=>{
  //   const valItem={
  //     pos:[pos1,pos2],
  //     val:val
  //   }; 
  //   const lista=[...this.state.valueList];
  //   lista.push(valItem);
  //   this.setState({
  //     valueList:lista
  //   });
  // }


  // updateInput(value){
  //   this.setState({valItem : value});
  // }


  // createGrid =()=>{
  //   let grid=[];
  //   for(let i=0;i<9;i++){
  //     let square=[];
  //     for(let j=0;j<9;j++){
  //       square.push(
  //         <td key={[i,j]}>
  //           <input 
  //           className="grid-box"
  //           type="number"
  //           min="1"
  //           max="9"
  //           maxLength='1'
  //           id="inp"
  //           placeholder={[i,j]}
  //           value={this.state.valItem}
  //           onChange={e=>this.updateInput(e.target.value)}
  //           ></input>
  //         </td>
  //       );
  //       {this.addValue(this.state.valItem,i,j);}  
  //     }
  //   grid.push(<tr key={i}>{square}</tr>);
  //   }
  //   return grid;

 render(){
   return(
     <div>
       <Table/>
     </div>
   )
 }
  }


export default App;
