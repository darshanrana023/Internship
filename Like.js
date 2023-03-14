import{Component} from "react"
class Like extends Component{
     
  constructor()
  {
    super()
    this.state={
        message:"For Like Press this BUtton"
    }
  }
  changeMessage()
  {
    this.setState({
        message:"You Liked it"
     })
  }
  render()
  {
    return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Like</button>
           
        </div>
    )
  }
}
export default Like