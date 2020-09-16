import React from 'react';
import logo from './logo.svg';
import Program from './components/Program'
import Students from './components/Students'
import ProgramPostForm from './components/ProgramPostForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Registration</h1>
        <Program/>
        <Students/>
        <ProgramPostForm/>

      </header>
    </div>
  );
}

export default App;
