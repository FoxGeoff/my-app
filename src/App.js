// import logo from './logo.svg';
import Person from './Person/Person';

import './App.css';

function App() {
  return (
    <div className="App">
       <h1>Hi , I'm a React App!</h1>
       <p>This is really working!</p>
       <button>Switch Name</button>
       <Person name="Jack" age="30"/>
       <Person name="Jane" age="20"> - I like to run</Person>
       <Person name="Fred" age="24"/>
    </div>
  );
}

export default App;
