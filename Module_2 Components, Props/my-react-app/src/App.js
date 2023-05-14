// 1)  ///////////////////////////////////////////
// import React from "react"

// export default function App() {
//     return(
//         <div>
//             <User />
//         </div>
//     );
        
// }

// const User = () => {
//     return (
//         <div>
//             <h5>1 ) My name is Bahrom, my email is bahrom@gmail.com, I am 21 years old </h5>
//             <h5>2 ) My name is Donyor, my email is donyor@gmail.com, I am 25 years old </h5>
//             <h5>3 ) My name is Bahtiyor, my email is bahtiyor@gmail.com, I am 25 years old </h5>
//             <h5>4 ) My name is Qodir, my email is qodir@gmail.com, I am 28 years old </h5>            
//         </div>
//     );
// }

// 2)  ///////////////////////////////////////////
// import React from "react"

// export default function App() {
//     return (
//         <div>
//             <User
//                 id="1" 
//                 name="Bahrom"
//                 age="21"
//                 email="bahrom@gmail.com"
//             />
//             <User
//                 id="2"
//                 name="Doniyor"
//                 age="25"
//                 email="doniyor@gmail.com"
//             />
//             <User
//                 id="3"
//                 name="Bahtiyor"
//                 age="26"
//                 email="bahtiyo@gmail.com"
//             />
//             <User
//                 id="4"
//                 name="Qodir"
//                 age="28"
//                 email="qodir@gmail.com"
//             />
           
//         </div>
//     );        
// };

// // const User = ({id, name, age, email}) => {
// //     return (
// //         <div>
// //            <h5>{id} ) My name is {name}, my email is {email} and  I am  {age} years old</h5>           
// //         </div>
// //     );
// // };

// const User = (props) => {
//     return (
//         <div>
//            <h5>{props.id} ) My name is {props.name}, my email is {props.email} and  I am  {props.age } years old</h5>           
//         </div>
//     );
// };

// 3) ///////////////////////////////////////////
// import React from "react"

// export default function App() {
//     const user1 = 
//         {
//             id:1,
//             name:"Bahrom",
//             age:21,
//             email:"bahrom@gmail.com"
//         }
//     const user2 = 
//         {
//             id:2,
//             name:"Nodir",
//             age:22,
//             email:"nodir@gmail.com"
//         }
//     const user3 = 
//         {
//             id:3,
//             name:"Zohid",
//             age:20,
//             email:"zohid@gmail.com"
//         }
//     const user4 = 
//         {
//             id:3,
//             name:"Qodir",
//             age:28,
//             email:"qodir@gmail.com"
//         }  
  
//     return (
//         <div>
//             <User user={user1} />
//             <User user={user2} />
//             <User user={user3} />
//             <User user={user4} />            
//         </div> 
//     );        
// };


// const User = ({user}) => {
//     return (
//         <div>
//             <h5>{user.id} ) My name is {user.name}, my email is {user.email} and  I am  {user.age} years old</h5> 
//         </div>
//     )
// };

// // const User = (props) => {
// //     return (
// //         <div>
// //             <h5>{props.user.id} ) My name is {props.user.name}, my email is {props.user.email} and  I am  {props.user.age } years old</h5> 
// //         </div>
// //     );
// // };


// 4)  ///////////////////////////////////////////
// import React from "react"


// export default function App() {
//     const users = [
//         {
//             id:1,
//             name:"Bahrom",
//             age:21,
//             email:"bahrom@gmail.com"
//         },
//         {
//             id:2,
//             name:"Nodir",
//             age:22,
//             email:"nodir@gmail.com"
//         },
//         {
//             id:3,
//             name:"Zohid",
//             age:20,
//             email:"zohid@gmail.com"
//         },
//         {
//             id:3,
//             name:"Qodir",
//             age:28,
//             email:"qodir@gmail.com"
//         }
//     ];
  
//     return (
//         <div>          
//             {
//                 users.map((user) => {
//                     return (                        
//                         <User
//                             id={user.id}
//                             name={user.name}
//                             age={user.age}
//                             email={user.email}
//                         />
//                     )
//                 })
//             }
//         </div>
//     );        
// };

// // const User = ({ id, name, age, email }) => {
// //     return (
// //         <div>
// //             <h5>{id} ) My name is { name }, my email is { email } and  I am  { age } years old</h5> 
// //         </div>
// //     )
// // };

// const User = (props) => {
//     return (
//         <div>
//             <h5>{props.id} ) My name is {props.name}, my email is {props.email} and  I am  {props.age } years old</h5> 
//         </div>
//     )
// };


// 5)  ///////////////////////////////////////////
// import React from "react"
// import {User} from "./User"


// export default function App() {
//     const users = [
//         {
//             id:1,
//             name:"Bahrom",
//             age:21,
//             email:"bahrom@gmail.com"
//         },
//         {
//             id:2,
//             name:"Nodir",
//             age:22,
//             email:"nodir@gmail.com"
//         },
//         {
//             id:3,
//             name:"Zohid",
//             age:20,
//             email:"zohid@gmail.com"
//         },
//         {
//             id:3,
//             name:"Qodir",
//             age:28,
//             email:"qodir@gmail.com"
//         }
//     ];

//     return (
//         <div>          
//             {
//                 users.map((user) => {
//                     return (                        
//                         <User
//                             id={user.id}
//                             name={user.name}
//                             age={user.age}
//                             email={user.email}
//                         />
//                     )
//                 })
//             }
//         </div>
//     );        
// }

// 6) ////////////////////////////////////////////
// import React from "react"

// export default function App() {
//     const users = [
//         {
//             id:1,
//             name:"Bahrom",
//             age:21,
//             email:"bahrom@gmail.com"
//         },
//         {
//             id:2,
//             name:"Nodir",
//             age:22,
//             email:"nodir@gmail.com"
//         },
//         {
//             id:3,
//             name:"Zohid",
//             age:20,
//             email:"zohid@gmail.com"
//         },
//         {
//             id:3,
//             name:"Qodir",
//             age:28,
//             email:"qodir@gmail.com"
//         }
//     ]

//     const credentials = users.map((user) => {
//         return (
//             <div>           
//                 <h5 key={user.id}>{user.id} ) My name is {user.name}, my email is {user.email} and I am is {user.age} years old</h5>              
//             </div>
//         );
//     });

//     return (
//         <div>          
//             {credentials}
//         </div>
//     );        
// };

// 7) ///////////////////////////////////////////
// import React from "react"

// export default function App() {
//     const users = [
//         {
//             id:1,
//             name:"Bahrom",
//             age:21,
//             email:"bahrom@gmail.com"
//         },
//         {
//             id:2,
//             name:"Nodir",
//             age:22,
//             email:"nodir@gmail.com"
//         },
//         {
//             id:3,
//             name:"Zohid",
//             age:20,
//             email:"zohid@gmail.com"
//         },
//         {
//             id:3,
//             name:"Qodir",
//             age:28,
//             email:"qodir@gmail.com"
//         }
//     ];
     
//     return (
//         <div>
//             {
//                 users.map((user) => {
//                     return (
//                         <div>           
//                             <h5 key={user.id}>{user.id} ) My name is {user.name}, my email is {user.email} and I am is {user.age} years old</h5>              
//                         </div>
//                     )
//                 })
//             }            
//         </div>
//     );
// };



