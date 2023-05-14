
// 1) /////////////// ////////////////////////
// import React from "react"
// import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
// import {Home} from "./pages/Home"
// import {Contact} from "./pages/Contact"
// import {Menu} from "./pages/Menu"
 
// export default function App()  {
    
//     return (
//         <div>
//             <Router>
//                 <div>
//                     <Link to="/">Home</Link>
//                     <Link to="/menu">Menu</Link>
//                     <Link to="/contact">Contact</Link>
//                 </div>
//                 <Routes>
//                     <Route path="/" element={<Home/>} />
//                     <Route path="/menu" element={<Menu/>} />
//                     <Route path="/contact" element={<Contact/>} />
//                     <Route path="*" element={<h3>PAGE NOT FOUND</h3>} />
//                 </Routes>
//             </Router> 
//         </div>       
//     )
// };

// 2) ////////////////////////////////////////////////////////
import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {Contact} from "./pages/Contact"
import {Menu} from "./pages/Menu"
import {Navbar} from "./pages/Navbar"

 
export default function App()  {    
    return (
        <div>
            <Router>
               <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="*" element={<h3>PAGE NOT FOUND</h3>} />
                </Routes>
            </Router> 
        </div>  
    )
};

