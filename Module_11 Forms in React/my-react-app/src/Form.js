// 1) ////////////////////////////////////////////////////////
// import { useForm } from "react-hook-form"


// export const Form = () => {
//     const { register, handleSubmit } = useForm()

//     const onSubmit = (data) => {
//         console.log(data)
//     }
//     return (
//         <form onSubmit={ handleSubmit(onSubmit) }>
//             <input type="text" placeholder="Full Name ..." {...register("fullName")}/><br/>
//             <input type="text" placeholder="Email..." {...register("email")} /><br/>
//             <input type="text" placeholder="Age..." {...register("age")} /><br/>
//             <input type="password" placeholder="Password..." {...register("password")}/><br/>
//             <input type="password" placeholder="Comfirm Password ..." {...register("confirmPassword")}/><br/>
//             <input type="submit" />
//         </form>
//     )
// }

// npm install react-hook-form yup 

// 2) ////////////////////////////////////////////////////////
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const Form = () => {   

    const schema = yup.object().shape({
        fullName:yup.string().required(),
        email:yup.string().email().required(),
        age:yup.number().positive().integer.required(),
        password:yup.string().min(4).max(20).required(),
        confirmPassword:yup.string().oneOf([yup.ref("password", null)]).required(),
     
    });

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <input type="text" placeholder="Full Name ..." {...register("fullName")}/><br/>
            <input type="text" placeholder="Email..." {...register("email")} /><br/>
            <input type="text" placeholder="Age..." {...register("age")} /><br/>
            <input type="password" placeholder="Password..." {...register("password")}/><br/>
            <input type="password" placeholder="Comfirm Password ..." {...register("confirmPassword")}/><br/>
            <input type="submit" />
        </form>
    )
}

//  npm install @hookform/resolvers



