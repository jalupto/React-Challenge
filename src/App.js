import { useState } from 'react';
import './App.css';
import Input from './components/Inputs';
import View from './components/View';

function App() {

  const [name, setName] = useState('enter name');
  const [age, setAge] = useState('enter age');
  const [hobbies, setHobby] = useState('enter hobby');

  return (
    <div className="App">
      <Input 
        age={age} 
        name={name} 
        hobbies={hobbies} 
        setName={setName}
        setAge={setAge}
        setHobby={setHobby}
      />
      <View 
        age={age} 
        name={name} 
        hobbies={hobbies} 
      />
    </div>
  );
}

export default App;