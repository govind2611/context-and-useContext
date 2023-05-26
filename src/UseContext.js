import React, {useContext} from 'react';
import myContext from './Context';


const UseContext = () => {
    // let context2 = useContext(myContext);

    let{data, updateLikes} = useContext(myContext);

  return (
    <div className='container'>
      <h1>Using useContext</h1>
      <h2>Name : {data.name}</h2>
      <h2>Age : {data.age}</h2>
      <h2>Country : {data.country}</h2>
      <h2>IPL Team : {data.team}</h2>
      <h2>Likes : {data.likes}</h2>
      <button
      onClick={updateLikes}
      >Give Likes</button>
    </div>
  )
}

export default UseContext
