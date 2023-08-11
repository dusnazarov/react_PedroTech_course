import Axios from "axios"
import React, {useState, useEffect} from "react"


// 1) /////////////// fetch()  ////////////////////////
// export default function App()  {

//     fetch("https://catfact.ninja/fact")
//         .then((res) => res.json())
//         .then((data) => console.log(data))

//     return (
//         <div>
//             <button>Generate Cat Fat</button>
//             <p></p>
//         </div>
//     )
// };

// 2) //////////////// Axios   ///////////////////////
// export default function App()  {

//    Axios.get("https://catfact.ninja/fact")
//     .then((res) => {
//         console.log(res.data)
//     })

//     return (
//         <div>
//             <button>Generate Cat Fat</button>
//             <p></p>
//         </div>
       
//     )
// }


// 4) ///////////////////////////////////////
// export default function App()  {
//     const [catFact, setCatFact] = useState("")

//     const fetchCatFact = () => {
//         Axios.get("https://catfact.ninja/fact")
//         .then((res) => {
//             setCatFact(res.data.fact)
//         });
//     }

//     useEffect(() => {
//         fetchCatFact()        
//     }, []);   

//     return (
//         <div>
//             <button onClick={fetchCatFact}>Generate Cat Fat</button>
//             <p>{catFact}</p>
//         </div>       
//     );
// };

// // 5) ///////////////////////////////////////
// export default function App()  {
//     const [name, setName] = useState("")  

//     const fetchData = () => {
//         Axios.get(`https://api.agify.io/?name=${name}`)
//         .then((res) => {
//             console.log(res.data)
//         });
        
//     };

//     const writeName = (event) => {
//         return (
//             setName(event.target.value)

//         );
//     };
    
//     return (
//         <div>
//             <input placeholder="Ex. Elyor..." onChange={writeName}/>
//             <button onClick={fetchData}>Predict Age</button>
//             <h3>Predicted Age: {name} </h3>
//         </div>       
//     );
// };


//  6) ///////////////////////////////////////
// export default function App()  {
//     const [name, setName] = useState("")
//     const [PredictedAge, setPredictedAge] = useState(0)  

//     const fetchData = () => {
//         Axios.get(`https://api.agify.io/?name=${name}`)
//         .then((res) => {
//             setPredictedAge(res.data.age)
//         });
        
//     };

//     const writeName = (event) => {
//         return (
//             setName(event.target.value)

//         );
//     };
    
//     return (
//         <div>
//             <input placeholder="Ex. Elyor..." onChange={writeName}/>
//             <button onClick={fetchData}>Predict Age</button>
//             <h3>Predicted Age: {PredictedAge} </h3>
//         </div>       
//     );
// };


// // 7) ///////////////////////////////////////

// export default function App()  {
//     const [name, setName] = useState("")
//     const [PredictedData, setPredicteData] = useState(null)  

//     const fetchData = () => {
//         Axios.get(`https://api.agify.io/?name=${name}`)
//         .then((res) => {
//             setPredicteData(res.data)
//         });
        
//     };

//     const writeName = (event) => {
//         return (
//             setName(event.target.value)
//         );
//     };
    
//     return (
//         <div>
//             <input placeholder="Predicted Name..." onChange={writeName}/>
//             <button onClick={fetchData}>Predict Age</button>
//             <h3> Name: {PredictedData?.name} </h3>
//             <h3>Predicted Age: {PredictedData?.age} </h3>
//             <h3>Count: {PredictedData?.count} </h3>
//         </div>       
//     );
// };


// 8) ///////////////////////////////////////
// export default function App()  {
//     const [generatedExcuse, setGenratedExcuse] = useState("")
   

//     const fetchExcuse = (excuse) => {
//         Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`)
//         .then((res) => {
//             setGenratedExcuse(res.data[0].excuse)
//         });        
//     };    
    
//     return (
//         <div>
//             <h3> Generate An Excuse </h3>
//             <button onClick={() => fetchExcuse("party")}>Party</button>
//             <button onClick={() => fetchExcuse("family")}>Family</button>
//             <button onClick={() => fetchExcuse("office")}>office</button>
//             <h3>{generatedExcuse}</h3>
//         </div>       
//     );
// };

