import React, {Component} from 'react';


class NewTask extends Component {
    constructor(props){
        super(props)

        this.state = {
            userInput:""
        }
    }

    handleInput=(val)=>{
        this.setState({userInput: val})
    }

    handleOutput=()=>{
        this.props.output(this.state.userInput);
        this.setState({userInput:''})
    }

    render(){
        return(
            <div className='NewTask'>
                <input
                    value={this.state.input}
                    placeholder='Enter Task'
                    onChange={(e)=>this.handleInput(e.target.value)}
                ></input>
                <button
                    onClick={this.handleOutput}
                >Add</button>
            </div>
        )
    }

}

export default NewTask

//take input and adds it to a string 
//on click add string to array on App component