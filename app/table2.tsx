import { useAtom } from 'jotai';
import { useState } from "react"; 
 import { myArrayAtom } from "./data123";
 // import { myArrayAtom, todoobject } from "./data123";
 import { newtotal } from "./data123";
 import { nameyesno,totalprice  } from "./data123";
 import Image from "next/image";
// import {useRecoilState} from "react-server-dom-webpack/server.edge"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function Table2() {
const [mytotalprice, settotalprice]=useAtom(totalprice);
//ok const [myTodoobject, setTodoobject]=useAtom(todoobject);
const [mymyArrayAtom, setmymyArrayAtom]=useAtom(myArrayAtom);
//safemyTodoobject.map
//const [mynameyesno,setMynameyesno]=useAtom(nameyesno)
const [mynameyesno,setMynameyesno]=useAtom(nameyesno)
 //ok const safemyTodoobject1 = Array.isArray(myTodoobject) ? myTodoobject : [];
   const safemymyArrayAtom1 = Array.isArray(mymyArrayAtom) ? mymyArrayAtom : [];
let abc:number=0
console.log('Type of safemymyArrayAtom:', typeof(safemymyArrayAtom1));
console.log('Type of setmymyArrayAtom:', typeof(setmymyArrayAtom));
// mynameyesno.map((item:any,i:number) => 	{
//safemyTodoobject1.map((item:any,i:number) => 	{
  safemymyArrayAtom1.map((item:any,i:number) => 	{
abc=abc+item.Quantityselected
 console.log("Quantityselected", item.Quantityselected)
  console.log("itemabc below ",abc)
 
  // settotalprice(abc)
  }

  
  
  
  );
 console.log("itemabc2",abc)
  settotalprice(abc)
//const newArray = safemymyArrayAtom.filter(item => item.id !== (v as number));
//console.log(typeof id, typeof v);
const [mynewtotal,setmynewtotal]=useAtom(newtotal)
//const [myTodoobject]=useAtom(todoobject)
//ok const [myTodoobject, setTodoobject]=useAtom(todoobject);
//const [mytotal, setmytotal]=useAtom(0);
 //ok  const safemyTodoobject = Array.isArray(myTodoobject) ? myTodoobject : [];
     const safemymyArrayAtom = Array.isArray(mymyArrayAtom) ? mymyArrayAtom : [];
    const deletefunction=(v:number)=>{
    const newArray=safemymyArrayAtom.filter(item=>item.id!==v);
    //ok setTodoobject(newArray)
    setmymyArrayAtom(newArray)
    //setTodo([...myTodo,todonewvalue])
    //setTodonewvalue("")
	
  }
  return (
         <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow >
          <TableHead className="w-[100px]">Invoice</TableHead>
         <TableHead className="text-right">itempriceName</TableHead>
          <TableHead className="text-right">itempriceAmount</TableHead>
		   <TableHead className="text-right">subtotal</TableHead>
		     <TableHead className="text-right">discountPercentage</TableHead>
			  <TableHead className="text-right">itemquantity</TableHead>
			  
			  <TableHead className="text-right">image</TableHead>
			  <TableHead className="text-right">image2</TableHead>
			    
        </TableRow>
      </TableHeader>
      <TableBody>

  
  
  {
 
  safemymyArrayAtom.map((item,i) => 	(

          <TableRow key={item.id}  onClick={()=>deletefunction(item.id)}>
            <TableCell className="font-medium">{item.id} </TableCell>
         
           <TableCell className="text-right">{item.name}</TableCell>
            <TableCell className="text-right">{item.price}</TableCell>
			 <TableCell className="text-right">{item.Quantityselected}</TableCell>
			 <TableCell className="text-right">{item.Quantityselected}</TableCell>
			  <TableCell className="text-right">{item.itemsquanitity}</TableCell>
				  <TableCell className="text-right">    < Image src={item.imagepath} alt={item.name} width="200" height="200" /></TableCell>  
			  	  <TableCell className="text-right">    < Image src={item.image} alt={item.name} width="200" height="200" /></TableCell>
			  
          </TableRow>
		 
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right"> {abc}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
