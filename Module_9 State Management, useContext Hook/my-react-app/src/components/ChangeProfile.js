
// 1) /////////////////////////////////////////
// import {useState} from "react"

// export const ChangeProfile = (props) => {
//     const [newUsername, setNewUsername] = useState("");

//     return (
//         <div>
//             <input onChange={(event) => setNewUsername(event.target.value)} />
//             <button
//                 onClick={() => {
//                     props.setUsername(newUsername)
//                 }}
//             >
//                 Change Username
//             </button>
//         </div>
//     )
// }

// 2) /////////////////////////////////////////
import {useState, useContext} from "react"
import { Appcontext } from "../App";


export const ChangeProfile = () => {
    const {setUsername} = useContext(Appcontext);

    const [newUsername, setNewUsername] = useState("")

    return (
        <div>
            <input onChange={(event) => setNewUsername(event.target.value)} />
            <button
                onClick={() => {
                    setUsername(newUsername)
                }}
            >
                Change Username
            </button>
        </div>
    )
}