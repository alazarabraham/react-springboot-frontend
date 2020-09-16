import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import { TableCell } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';

import { TableRow } from '@material-ui/core';

class Program extends Component {
   constructor(props){
       super(props);
       this.state = {
          programs: [],
       }
   };

componentDidMount() {
    const url = "http://localhost:8080/api/programs"
    fetch(url)
    .then((response)=>{
       return response.json();

    })
    .then((data)=>{
        this.setState({
            programs: data
        })
    })
    .catch((error)=>console.log(error));
}



render(){
    return(
        <div>
        <Typography>Program List</Typography>
        <TableContainer>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {
                    this.state.programs.map(
                        program=>
                        <TableRow key={program.programId}>  
                        <TableCell>{program.programId}</TableCell>
                        <TableCell>{program.programName}</TableCell>
                                       <Button color="primary" variant="contained">Edit</Button>
                                       <Button color="primary" variant="contained">Delete</Button>

                        </TableRow>
                    )
                    
                } 

            </TableBody>
        </Table>
        </TableContainer>

    </div>
    )
}



}

export default Program;