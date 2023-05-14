
// 1) ////////////////////////////////////////////////////////
import React, {useState} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {Contact} from "./pages/Contact"
import {Profile} from "./pages/Profile"
import {Navbar} from "./pages/Navbar"
import { QueryClient, QueryClientProvider} from "@tanstack/react-query"

 
export default function App()  {     
   const client = new QueryClient();

    return (
        <div>
            <QueryClientProvider client={client} >
                <Router>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home  />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="*" element={<h3>PAGE NOT FOUND</h3>} />
                    </Routes>
                </Router>
            </QueryClientProvider> 
        </div>  
    )
};

// npm install @tanstack/react-query


