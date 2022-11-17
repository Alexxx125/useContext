import { useState } from "react";
const Example = () => {
   return <Parent/>
};

const Parent=()=>{
    const [username, setUsername] = useState("liuyi");

    return (
      <div>
        <h1>father</h1>
        hello {username}
        <Child setUsername={setUsername} />
      </div>
    );
}

const Child = ({ setUsername }) => {
  return (
    <div>
      <h2>Child</h2>
      <GrandChild setUsername={setUsername} />
    </div>
  );
};

const GrandChild = ({ setUsername }) => {
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

export default Example;
