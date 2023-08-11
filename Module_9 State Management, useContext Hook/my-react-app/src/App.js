import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {Contact} from "./pages/Contact"
import {Profile} from "./pages/Profile"
import {Navbar} from "./pages/Navbar"
import React, {useState, createContext} from "react"

export const Appcontext = createContext()


// 1) //////////////////////////////////////////////////////// 
// export default function App()  {     
//     const [username, setUsername] = useState("Elyor");

//     return (
//         <div>
//             <Router>
//                <Navbar />
//                 <Routes>
//                     <Route path="/" element={<Home username={username} />} />
//                     <Route path="/profile" element={<Profile username={username} setUsername={setUsername}/>} />
//                     <Route path="/contact" element={<Contact/>} />
//                     <Route path="*" element={<h3>PAGE NOT FOUND</h3>} />
//                 </Routes>
//             </Router> 
//         </div>  
//     )
// };


// 2) ////////////////////////////////////////////////////////
 
export default function App()  {     
    const [username, setUsername] = useState("Elyor");

    return (
        <div>
            <Appcontext.Provider value={{ username, setUsername}}>
                <Router>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="*" element={<h3>PAGE NOT FOUND</h3>} />
                    </Routes>
                </Router>
            </Appcontext.Provider> 
        </div>  
    )
};

