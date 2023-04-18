import React, { useEffect, useState } from 'react';
import axios from "axios";
function Poko(){
    const[nums,setNums]=useState();
    const[names,setNames]=useState();
    const[moves,setMoves]=useState();
    useEffect(()=>{
        async function getdata(){
             const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${nums}`);
             console.log(res.data);
             setNames(res.data.name);
             setMoves(res.data.moves.length);
        }
        getdata();
    });
    return(
        <>
        <h1>you have choosen<span style={{color:'red'}}>{nums} value</span> </h1>
        <h1>My name is <span style={{color:'red'}}> {names}  </span> </h1>
        <h1>I have<span style={{color:'red'}}>{moves} moves </span>  </h1>
        < select value={nums} onChange={(event)=>{
            setNums(event.target.value);

        }}>
            <option value-='1'>1</option>
            <option value-='3'>3</option>
            <option value-='5'>5</option>
            <option value-='25'>25</option>
            <option value-='4'>4</option>
        </select>
        </>
    );

}
export default Poko;