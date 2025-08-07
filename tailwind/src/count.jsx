// import { useState, useEffect, useRef } from 'react'
// import './App.css'
// function New() {


// const [count, setCount] = useState(0);
// let val = 1; //like this val does not persist its value everytime
// //page will be rendered a new value 

//  function handleIncrement() {
//     val = val+1;
//     console.log("value of val is : " ,val);
//     setCount(count+1);
//  }
// // useEffect is a React Hook that lets you run some side effects in your functional component.

// //  What is a "side effect"?
// // In React, a side effect is anything that:

// // fetches data (API calls),

// // updates the DOM directly,

// // sets a timer (like setInterval),

// // or listens to events (like scroll or resize),
// // and is not directly related to rendering JSX.

//                     // useEffect(() => {
//                     //   // your code here (side effect)
//                     // }, [dependencies]);

//                     // useEffect(() => {
//                     //   console.log("Component mounted!");
//                     // }, []);

//                     // useEffect(() => {
//                     //   console.log("The count has changed!");
//                     // }, [count]);

//                     // useEffect(() => {
//                     //   console.log("every time the page is rendered");
//                     // });


// useEffect(() =>{
//     console.log("This is useEffect that is rendered mounted on page");
// })


// return(
//     <div>
//         <button onClick={handleIncrement}>
//             Increment
//         </button>
//         <br></br>
//         <div>
//             Count: {count}
//         </div>
//     </div>
// )

// }
// export default New


// useRef returns an object . this object have specific field name current from where we take the value
// let x= useRef(0)
//x ke andr current hai and oske and rvalue zero jayege 
//update krna hai toh x.current=>>>>>



// import { useState, useEffect, useRef } from 'react'
// import './App.css'
// function New() {


// const [count, setCount] = useState(0);
// let val = useRef(0) 

//  function handleIncrement() {
//     // val = val+1;
//     val.current = val.current + 1;
//     console.log("value of val is : " ,val.current);
//     setCount(count+1);
//  }
// // when state variable change it re renders the UI
// //when useRef changes no ui is rendered
// //useRef was mainly made so that we can directly change value in teh DOM

// useEffect(() =>{
//     console.log("This is useEffect that is rendered mounted on page");
// })


// return(
//     <div>
//         <button onClick={handleIncrement}>
//             Increment
//         </button>
//         <br></br>
//         <div>
//             Count: {count}
//         </div>
//     </div>
// )

// }
// export default New


import { useState, useEffect, useRef } from 'react';
import './App.css';

function New() {
  const [count, setCount] = useState(0);
  let val = useRef(0);

  function handleIncrement() {
    val.current = val.current + 1;
    console.log('Value of val is:', val.current);
    setCount(count + 1);
  }

  useEffect(() => {
    console.log('This is useEffect that is rendered mounted on page');
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="bg-white/30 backdrop-blur-md rounded-xl p-10 shadow-2xl text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">🔁 useRef + useState Example</h1>
        <div className="text-5xl font-mono font-bold text-purple-700 mb-6">Count: {count}</div>
        <button
          onClick={handleIncrement}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Increment
        </button>
        <p className="mt-6 text-gray-700 text-sm">Console will log useRef value and re-render count</p>
      </div>
    </div>
  );
}

export default New;
