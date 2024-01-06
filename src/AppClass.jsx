import { Component } from "react";
import "./App.css"


export default class AppClass extends Component{
  // code here
  constructor(props){
    super();
    this.data = props;
  }
  render(){

    let styleMyDiv = {
      display:"grid",
      gridTemplateColumns:"38vw 38vw",
      marginLeft:"13vw",
      rowGap:"2vw"
    }
    return(
      <>
        <h1 style={{textAlign:"center"}}>Kalvium Gallery</h1>
        <div style={styleMyDiv}>
          <img src={this.data.props[0].img} alt="" width={"550px"}/>
          <img src={this.data.props[1].img} alt="" width={"550px"}/>
          <img src={this.data.props[2].img} alt="" width={"550px"}/>
          <img src={this.data.props[3].img} alt="" width={"550px"}/>
        </div>
      </>
    )
  }
}
