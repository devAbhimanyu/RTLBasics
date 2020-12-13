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

export default CustomInput;