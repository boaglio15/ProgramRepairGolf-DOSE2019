import React , {Component} from 'react'
import AddChallenge from './AddChallenge'
import ViewChallenge from './ViewChallenge'

class Challenge extends Component {

  state = {
    opc: ""
  }

  show(){
    if (this.state.opc === "add") {
      return (
        <div>
          { <AddChallenge/> }
        </div>
      );
    }
    else if (this.state.opc==="view"){
      return (
        <div>
          { <ViewChallenge/> }
        </div>
      );
    }
    else {
      return (
        <div >
           <div className="block-button"> 
            <h1> Challenge </h1> 
          </div>
           <div className="block-button"> 
            <button className="button-submit" onClick={() => this.setState({opc:"add"})}>add challenge</button>
          </div>
          <div className="block-button"> 
            <button className="button-submit" onClick={() => this.setState({opc:"view"})}>view challenge</button>
          </div>
        </div>
      )
    }
  }
  
  render () {
    return (
      <div>
        {this.show()}
      </div>
    );
  }
}

export default Challenge