// import UserCard from "./Dugsiye/Exercise1/UserCard";
// import Blog from "./Dugsiye/Exercise2/Blog";
// import UserCardDaynamic from "./Dugsiye/Exercise3/UserCardDaynamic";

// import Countdown from "./Dugsiye/Exercise8/Countdown";
import { useState } from "react";
import UserList from "./Dugsiye/Exercise10/UserList";
import GithubUsers from "./Dugsiye/Exercise9/GithubUsers";
import HandlingEmpty from "./Dugsiye/Learning/HandlingEmpty";
import Revision from "./Dugsiye/Learning/Revision";
import RevisionEx5 from "./Dugsiye/Learning/RevisionEx5";
import RevisionStopWatch from "./Dugsiye/Learning/RevisionStopWatch";
import ConditonRendering from "./Dugsiye/Learning/ConditionRendering";
import Notification from "./Dugsiye/Learning/Notification";
import Toggole from "./Dugsiye/Learning/Toggole";
import UserLogin from "./Dugsiye/Exercise11/UserLogin";
// import DataFetching from "./Dugsiye/Learning/DataFetching";

// import Timing from "./Dugsiye/Learning/Timing";

// import WindowResize from "./Dugsiye/Learning/WindowResize";

// import TitlChange from "./Dugsiye/Exercise6/TitleChange";
// import MouseTracker from "./Dugsiye/Exercise7/MouseTracker";
// import HookEx1 from "./Dugsiye/Learning/HookEx1";

// import CardShop from "./Dugsiye/Learning/CardShop";

// import Shopping from "./Dugsiye/Exercise5/Shopping";

// import StateEx4 from "./Dugsiye/Learning/StateEx4";
// import StateEx5 from "./Dugsiye/Learning/StateEx5";
// import TodoList from "./Dugsiye/Learning/TodoList";

// import StateEx2 from "./Dugsiye/Learning/StateEx2";
// import ToggoleButton from "./Dugsiye/Exercise4/ToggleButton";
// import StateEx3 from "./Dugsiye/Learning/StateEx3";

//  import StateEx1 from "./Dugsiye/Learning/StateEx1.jsx";



function App(){
  
  const users= [{name:"abdimalik" , id:1 , email:'cmaalik@gmail.com'} , {name: "Ali faarax" , id:2 , email: "aligeesey@gmail.com"}]


  const [Login , setIslogin]=useState(false)

  const [notification , setNotification]=useState([])
  return <>
  {/* <UserCard/> */}
  {/* <Blog/> */}
  
  {/* <UserCardDaynamic name="Abdimalik" email="cmaalik97@gmail.com"/>
  <UserCardDaynamic name="Faadumo " email="faay65@gmial.com"/>
  <UserCardDaynamic name="Maryama " email="marymoxaaji5@gmial.com"/>
  <UserCardDaynamic name="Faysal geedi " email="faysald09@gmial.com"/>
  <UserCardDaynamic/> */}


    {/* <StateEx1/> */}
    {/* <StateEx2/> */}
   {/* <StateEx3/> */}
   {/* <ToggoleButton/> */}
   {/* <StateEx4/> */}
   {/* <StateEx5/> */}
   {/* <TodoList/> */}
    {/* <Shopping/> */}
    {/* <CardShop/> */}
    {/* <HookEx1/> */}
    {/* <TitlChange/> */}

    {/* <WindowResize/> */}

    {/* <MouseTracker/> */}
    {/* <Timing/> */}
    {/* <Countdown/> */}
    {/* <DataFetching/> */}
    {/* <GithubUsers/> */}
    {/* <Revision/> */}
    {/* <RevisionEx5/> */}
    {/* <RevisionStopWatch/> */}
    {/* <HandlingEmpty/> */}

    {/* <UserList users={users} /> */}
    {/* <ConditonRendering cmalik={Login}/> */}
   {/* <Notification message={notification}/> */}

   {/* <Toggole/> */}
   <UserLogin/>
  </>
}
export default App;