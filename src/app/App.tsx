import { useState,useEffect } from 'react';
import { User,getUser } from 'utility';
import './App.css';



function App() {
  const [text, setText] = useState("");
  const [user, setUser] = useState<null|User>(null)
  
  useEffect(()=>{
    const fetchUserData = async ()=>{
      const userData= await getUser();
      setUser(userData);
    }
    fetchUserData();
  },[])

  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value);
  }

  return (
    <div className="App">
      {user && <p>The user is {user?.name}</p>}
      <CustomInput value={text} onChange={handleChange}>
        Input:
      </CustomInput>
      <p>Entered text is: {text ?? '...'}</p>
    </div>
  );
}

interface CustomInputProps{
  value:string;
  children:React.ReactNode;
  onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

function CustomInput({children,value,onChange}:CustomInputProps){
return(<div>
  <label htmlFor="search">
    {children}
  </label>
  <input placeholder="input search text" id="search" type="text" value={value} onChange={onChange}/>
</div>)
}

export default App;
