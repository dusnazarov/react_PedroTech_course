// 1) /////////////////////////////////////////
// import { ChangeProfile } from "../components/ChangeProfile"


// export const Profile = (props) => {
//     return (
//         <div>
//             <h1> PROFILE, user is: {props.username} </h1>
//             < ChangeProfile setUsername={props.setUsername} />
//         </div>
//     )
// }


// 2) /////////////////////////////////////////
import { ChangeProfile } from "../components/ChangeProfile"
import {useContext} from "react"
import { Appcontext } from "../App"


export const Profile = () => {
    const { username } = useContext(Appcontext)

    return (
        <div>
            <h1> PROFILE, user is: {username} </h1>
            < ChangeProfile />
        </div>
    )
}