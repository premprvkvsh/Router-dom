// import { lazy , Suspense } from "react";
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import './App.css'
// const Dashboard = lazy(() => import('./components/Dashboard'))
// const Landing = lazy(() => import('./components/Landing'))


// function App() {
//   // const [count, setCount] = useState(0)
// return (
//     <div>
//     <BrowserRouter>
//     <Appbar />
//     <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/" element={<Landing />} />
//           </Routes>
//         </Suspense>
//     </BrowserRouter>   
//     </div>
//   )

// }

// function Appbar(){
//   const navigate = useNavigate();

//   return <div>
//     <div>
//         <button onClick={() => {
//           navigate("/")
//         }}>Landing page</button>

//         <button onClick={() => {
//           navigate("/dashboard");
//         }}>Dashboard</button>  
//       </div>   
//   </div>
// }

// export default App
 
import { useState } from "react";

function App(){

  const [count, setCount] = useState(0);

  return (
    <div>
       <Count count={count} />

       <Buttons count={count} setCount={setCount}/>
    </div>
  )
}

function Count({count}){
  return <div>
    {count}
  </div>
}

function Buttons({count , setCount}){
 return <div>
  <button onClick={() => {
    setCount(count + 1)
  }}>Increase</button>


  <button onClick={() => {
    setCount(count - 1)
  }}>decrease</button>
 </div>

}

export default App