import {useState,createContext,useContext} from 'react'

const UserContext=createContext(null)

const Example2=()=>{
  return <div>
      <Parent/>
  </div>
}

const Parent=()=>{
    const [username, setUsername] = useState("liuyi");

    return (
      <UserContext.Provider value={{username,setUsername}}>
        <h1>father</h1>
        hello {username}
        <Child />
      </UserContext.Provider>
    );
}

const Child = () => {
 const {username,setUsername}=useContext(UserContext)
  return (
    <div>
      <h2>Child {username}</h2>
      <GrandChild />
    </div>
  );
};

const GrandChild = () => {
  const {setUsername}=useContext(UserContext)
  return (
    <div>
      <h3>GrandChild</h3>
      <button
        onClick={() => {
          setUsername("xiaobai");
        }}
      >
       Edit username
      </button>
    </div>
  );
};

export default Example2;