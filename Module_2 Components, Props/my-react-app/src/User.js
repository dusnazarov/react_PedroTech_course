////////////////////////////////////
export const User = ({ id, name, email, age }) => {
    return (
        <div>
            <h5>{id} ) My name is {name}, my email is {email} and  I am  {age } years old</h5> 
        </div>
    )
};

//////////////////////////////////
// export const User = (props) => {
//     return (
//         <div>
//             <h5>{props.id} ) My name is {props.name}, my email is {props.email} and  I am  {props.age } years old</h5> 
//         </div>
//     )
// };