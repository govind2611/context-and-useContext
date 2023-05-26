import { useState } from "react";
import myContext from "./Context";

const Provider = ({children}) => {
  let [cricketer, setCricketer] = useState({
    name: "Virat Kohli",
    age: 25,
    country: "India",
    team: "Royal Challengers Banglore",
    likes : 1
  });
  return (
  
  <myContext.Provider
  value={{
    data:cricketer,
    updateLikes: () => setCricketer({...cricketer, likes: cricketer.likes+1})
  }}
  >
     {children}
  </myContext.Provider>
  )
 
};

export default Provider;
