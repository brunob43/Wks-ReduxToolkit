import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChars } from "../redux/characterActions";

export const Characters = () => {
    const dispatch= useDispatch()
    const {characters}=useSelector(state=>state.characters)

    useEffect(()=>{
        dispatch(getChars())
    },[])
    return (
        <div>
            {characters&&characters.map((elem,i)=>{
                return (
                    <div key={i}>
                        <p>{elem.name}</p>
                        <img src={elem.image} alt={elem.name}/>
                    </div>
                )
            })}
        </div>
    )
};