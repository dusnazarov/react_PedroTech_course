// 1) /////////////////////////////////////////
// import React, {useState} from "react";

// export default function App() {
//     const [count, setCount] = useState(0)

//     const increase = () => {
//         setCount(count + 1)
//     };

//     const decrease = () => {
//         setCount(count - 1)
//     };

//     const setToZero = () => {
//         setCount(0)
//     };

//     return (
//         <div>
//             <h3>{count}</h3>
//             <button onClick={increase}>Increase</button>
//             <button onClick={decrease}>Decrease</button>
//             <button onClick={setToZero}>Set to Zero</button>
//         </div>
//     )
// }


// 2) ///////////////  Show and Hide text  //////////////////////////
// import React, {useState} from "react";

// export default function App() {
//     const [showText, setShowText] = useState(true)

   
//     const showAndHide = () => {
//         return (
//             setShowText(!showText)
//         ) 
//     }     

//     return (
//         <div> 
//             <button onClick={showAndHide}>Show/Hide</button>
//             {showText && <h1>HI, MY NAME IS ELYOR</h1>}         
           
//         </div>
//     )
// }


// 3) ///////////////  Change Color   //////////////////////////
import React, {useState} from "react";

export default function App() {
    const [textColor, setTextColor] = useState("black")

    const showAndHide = () => {
        return (
            setTextColor(textColor === "black"? "red" :"black")
        )
    } 
    return (
        <div> 
            <button onClick={showAndHide}>Change Color</button>
            <h1 style={{ color: textColor }}>HI, MY NAME IS ELYOR</h1>        
           
        </div>
    )
}




