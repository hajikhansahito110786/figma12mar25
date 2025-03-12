"use client"
//<Link href={`/Products/${item.id}`}>
  // <h1> link image </h1>
 // import {useAtom} from "jotai"
 //import { myArraynew } from "./data123";
import { redirect } from 'next/navigation'
import { count } from "@/app/data123";
import { totalprice, todo, todoobject, myArrayAtom  } from "../data123";
import {useAtom} from "jotai"
import Link from "next/link";
import React from 'react'
import { useState } from "react"; 
import { atomWithStorage } from 'jotai/utils'
//import { useState } from "react";  return <Provider>{children}</Provider>;
//import {RenderingArrayOfObjects} from "../loop1"
import SanityData2 from '../sanitydata2';

//const darkModeAtom = atomWithStorage('darkMode', false)
//const darkModeAtom1 = atomWithStorage('darkMode1', 0)
const NewCart = () => {

       
/*
<button onClick={()=>setCount(myCount+1)}>counter: {myCount}</button>
  //setDarkMode1(myCount)
  <Link href={`/Products/user123`}>
   <h1> link image Pages</h1>
  
  </Link>
  <h1>home page</h1>
  <input 
  name="name"
  type="text" value={todonewvalue} placeholder="ghfghf" onChange={inputhandle}/>
  
  <button onClick={addfunction} className="ml-5">
    addition
  
  </button>


*/
let total1:number=0
const [myCount, setCount]=useAtom(count);
const [totalPriceg, setTotalpriceg]=useAtom(totalprice);
const [myTodo, setTodo]=useAtom(todo);
const [mytodoobject, setTodoobject]=useAtom(todoobject);
//const [myMyArraynew,setMyArraynew]=useAtom(myArraynew)
const [todonewvalue, setTodonewvalue]=useState("");

 //const [darkMode, setDarkMode] = useAtom(darkModeAtom)  {mytodoobject[0].name}
<h2>here 19feb25-1</h2>

 const inputhandle=(e:any)=>setTodonewvalue(e.target.value)

  const addfunction=()=>{
   //ok  setTodo([...myTodo,todonewvalue])
	
   //ok  setTodonewvalue("")
 //redirect('/')
  }

  const deletefunction=(v:any)=>{
    const newArray=myTodo.filter(item=>item!==v);
    setTodo(newArray)
   
    //setTodonewvalue("")
  }

const safemytodoobject = Array.isArray(mytodoobject) ? mytodoobject : [];
 

  //console.log('mynameyesno:', mynameyesno);
  //console.log('safemynameyesno:', safemynameyesno);

  return (
  <div className="sm:w-full md:w-[80px] lg:w-[80%] h-full bg-blue-500 flex justify-center items-center ">
    <div className="w-[80%] sm:h-full md:h-[300px] ">
<h1>Calculation for Payment</h1>

{

myTodo.map((v,i)=>{

 total1=total1+v  
 {v}
  {total1}


return (
<li className='bg-lime-300' key={i} onClick={()=>deletefunction(v)}>

 {v}
 
 <h2 className="bg-red-300">.....Click to del item </h2>  
 
  <h2 className="bg-blue-300">total so far </h2>  

 
 {/*ok total1  {v}*/}
<h2>here 19feb25-2</h2>


 </li> 

);

})}


{

/*
<div>
        {myArraynew.map((user, index) => (
          <div key={index}>
            Name: {user.name}, Age: {user.id}
          </div>
        ))}
      </div>

todoobject.map((v,i):any =>{
  total1=v.name
return (
<li className='bg-lime-300' key={i} onClick={()=>deletefunction(v)}>

 {v}
 
 <h2 className="bg-red-300">.....Click to del item </h2>  
 
  <h2 className="bg-blue-300">total so far </h2>  
 
 
 {total2}



 </li> 

);

})
*/
}





  
  </div>

  
  </div>
 
   
  );
}
export default NewCart;