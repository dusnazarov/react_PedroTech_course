import { useQuery } from "@tanstack/react-query"
import Axios from "axios"


export const Home = () => {
    const { data } = useQuery(["cat"], () => {
        return (
            Axios.get("https://catfact.ninja/fact")
            .then((res) => res.data)
        )
    })
    return (
        <h1> HOME PAGE :<p>{data?.fact}</p></h1>
    ) 
}


