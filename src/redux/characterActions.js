import axios from "axios";
import { getAllcharacters, getCharById } from "./characterSlice";

export const getChars = () =>(dispatch)=>{
    axios("https://rickandmortyapi.com/api/character")
    .then(res=>dispatch(getAllcharacters(res.data.results)))
    .catch(e=>console.log(e))
}