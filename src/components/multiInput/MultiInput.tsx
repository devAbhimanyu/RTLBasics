import CustomInput from 'components/customInput/CustomInput';
import { useState,useEffect } from 'react';
import { User,getUser } from 'utility';



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
      {user && <p>Username: {user?.name}</p>}
      <CustomInput value={text} onChange={handleChange}>
        Input:
      </CustomInput>
      <CustomInput value={text} onChange={handleChange}>
        Input:
      </CustomInput>
      <p>Entered text is: {text ?? '...'}</p>
    </div>
  );
}



export default App;
