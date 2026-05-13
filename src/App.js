import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  const ref = useRef();
  // const [password,setPassword] = useState();
  // function handleChange(e){
  //   setPassword(e.target.value);
  // }
  function handleClick(){
    alert(ref.current.value);
  }
  console.log('刷新');
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
