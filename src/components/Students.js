import React, { Component } from 'react';
import StudentService from "../service/StudentService"
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import { TableCell } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';

import { TableRow } from '@material-ui/core';

class Students extends Component {
   constructor(props){
       super(props);
       this.state = {
          students: [],
       }
   };


   componentDidMount(){
    StudentService.getPrograms().then((data)=>{
        this.setState({students: data})
    });
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
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Program Id</TableCell>
                    <TableCell>Date of birth</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {
                    this.state.students.map(
                        student=>
                        <TableRow key={student.studentId}>  
                       <TableCell>{student.studentId}</TableCell>

                        <TableCell>{student.firstname}</TableCell>
                        <TableCell>{student.lastname}</TableCell>
                        <TableCell>{student.programId}</TableCell>
                        <TableCell>{student.dob}</TableCell>
                        </TableRow>
                    )
                    
                } 
                <Button color="primary" variant="contained">Delete</Button>
            </TableBody>
        </Table>
        </TableContainer>

    </div>
    )
}



}

export default Students;