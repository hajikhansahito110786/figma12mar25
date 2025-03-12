"use client"

import {useAtom} from "jotai"
 import { newtotal } from "../data123";
import Image from "next/image";

import { client} from "@/sanity/lib/client"

 import { todoobject } from "../data123";

import { nameyesno  } from "../data123";

import React from 'react';
//import { Table2 } from "../table2";

import { myArrayAtom } from "../data123";
import { Table2 } from "../table2";


interface TodoItem {
  id: number;
  name: string;
}

const Newfolder = () => {
console.clear();
//const [mynewtotal,setmynewtotal]=useAtom(newtotal)
//const [mynameyesno]=useAtom(nameyesno)
//const [myTodoobject]=useAtom(todoobject)
//console.log('mynameyesno', mynameyesno);
//console.warn('myTodoobject', myTodoobject);
  
  //const safemynameyesno = Array.isArray(mynameyesno) ? mynameyesno : [];  
  // const safemyTodoobject = Array.isArray(myTodoobject) ? myTodoobject : [];
 // console.log('mynameyesno:', myTodoobject);
//  console.log('safemynameyesno:', safemyTodoobject);
/*
<div>
     
      <ul>
	 
        {myArray.map((obj) => (
          <li key={obj.id}>
		  </li>
        ))}
      </ul>
      {myArray.length}
    </div>



*/



 const [myArray, setMyArray] = useAtom(myArrayAtom);
  return (
 <div>
    <div>
      <h1>...</h1>
	  
	
	 <Table2/>
	     </div>
		 
		 
	
	
</div>	
	
  );
};

export default Newfolder;