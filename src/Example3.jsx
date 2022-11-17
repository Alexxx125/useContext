import { useContext } from "react"
import { UserContextProvider,UserContext } from "./UserContext"

const Example3=()=>{
    return <>
    <UserContextProvider>
        <Header/>
        <Content/>
        <Footer/>
    </UserContextProvider>
    </>
}

const Header=()=>{
    const {userInfo,isAuth,login,logout}=useContext(UserContext)
    return <header>
        <h1>{isAuth? <>hello {userInfo.username} <button onClick={()=>logout()}>logout</button></>:<><button onClick={()=>login()}> login</button></>}</h1>
    </header>
}

const Content=()=>{
    const {userInfo}=useContext(UserContext)
    return <div>main  {userInfo?.username}</div>
}

const Footer=()=>{
    return <footer>footer</footer>
}

export default Example3