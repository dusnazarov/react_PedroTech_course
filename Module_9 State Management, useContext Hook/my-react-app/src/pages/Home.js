// 1) /////////////////////////////////////////
// export const Home = (props) => {
//     return (
//         <h1> HOME PAGE and user is : {props.username}</h1>
//     ) 
// }


// 2) /////////////////////////////////////////
import {useContext} from "react"
import { Appcontext } from "../App"


export const Home = () => {
    const {username} = useContext(Appcontext)

    return (
        <h1> HOME PAGE and user is : {username}</h1>
    ) 
}