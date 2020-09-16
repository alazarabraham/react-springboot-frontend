import React, { Component } from 'react';
import axios from 'axios';
class ProgramPostForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            programName: ""
        }
    }
    changeHandler = e =>{
        this.setState({ [e.target.name]: e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault();
        axios.post("http://localhost:8080/api/programs", this.state)
        .then(data =>{
            console.log(data)
        })
        .catch(error =>{
            console.log(error)
        })

    }
    render(){
        const { programName } = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>Program Name</label>
                    <input type="text" name="programName" value={programName} onChange={this.changeHandler}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default ProgramPostForm;