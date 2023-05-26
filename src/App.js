import React from "react";
import myContext from "./Context";
import UseContext from "./UseContext";

const App2 = () => {
  return (
    <div>
      <myContext.Consumer>
        {(cricketerObj) => (
          <div className="container">
            <h1> Indian Cricketer </h1>
            <h5>Name of the Cricketer : {cricketerObj.data.name}</h5>
            <h5>Age of the Cricketer : {cricketerObj.data.age}</h5>
            <h5>Country of the Cricketer : {cricketerObj.data.country}</h5>
            <h5>Ipl Team : {cricketerObj.data.team}</h5>
            <h3>Hit Enter to like him : {cricketerObj.data.likes}</h3>
            <button onClick={cricketerObj.updateLikes}>Like Him</button>
          </div>
        )}
      </myContext.Consumer>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <App2 />
      <UseContext />
    </div>
  );
};

export default App;

// const Happy = ({hname}) => {
//   return (
//     <div>
//       <h1>Happy</h1>
//       <Angry aname={hname}/>
//     </div>
//   );
// };

// const Angry = ({aname}) => {
//   return (
//     <div>
//       <h1>Angry</h1>
//       <Sad sname={aname}/>
//     </div>
//   );
// };

// const Sad = ({sname}) => {
//   return (
//     <div>
//       <h1>{sname} is Sad</h1>

//       </div>
//       );
// }

// function App() {
//   return <div className="App">
//     <Happy hname = {"Govind"}/>
//   </div>;
// }

// export default App;
