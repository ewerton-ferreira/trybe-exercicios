import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className='App'>
//         <h1>Olá mundo!</h1>
//         </div>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  render() {
    const skills = ['react inicial', 'css', 'jsx', 'npm', 'npx'];
    const skills2 = ['comunicação', 'inteligência emocional', 'colaboração', 'criatividade', 'liderança'];
    const softskills = skills2.map((skill2) => <li> { skill2 } </li>)
    


    return (
      <div className='App'>
        <h1>Olá mundo!</h1>
        <p>Olá Ewerton</p>
        <HelloWorld />
        <p>Soft Skills</p>
        {/* duas formas de escrever */}
        { softskills }
        <p>Hard Skills</p>
        <ul>
          { skills.map((skill) => <li> { skill } </li> ) }
        </ul>
      </div>
    );
  }
}


export default App;
