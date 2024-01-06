import './App.css';
function App(props) {
  // code here
  let styleMyDiv = {
    display:"grid",
    gridTemplateColumns:"38vw 38vw",
    marginLeft:"13vw",
    rowGap:"2vw"
  }
  let data = props.props
  return(
    <>
      <h1 style={{textAlign:"center"}}>Kalvium Gallery</h1>
      <div style={styleMyDiv}>
        <img src={data[0].img} alt="" width={"550px"}/>
        <img src={data[1].img} alt="" width={"550px"}/>
        <img src={data[2].img} alt="" width={"550px"}/>
        <img src={data[3].img} alt="" width={"550px"}/>
      </div>
    </>
  )
}

export default App;
