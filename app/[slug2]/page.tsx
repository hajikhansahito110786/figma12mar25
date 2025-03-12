//"use client"
//[slug2]
//"use client"
//import Image from "next/image";
import Hk from "./hkpic.jpg"
import { client} from "@/sanity/lib/client"
import product from '@/sanity/schemaTypes/product';
import { StaticImageData } from 'next/image';
import React from 'react'
//
import Image from 'next/image'
import Minus from '@/app/Minus';
import Plus from '@/app/Plus';




//import {useState} from "react";
import Link from "next/link";
import Itemaddition from "../itemaddition";
//okimport User1 from "../User1";
//ok import { count } from "../data123";
import {useAtom} from "jotai"
//import User1 from '@/app/data';
//import User1 from '../data1';
import Header_1 from "../header_1";
import Header1 from "../header1"
import Hero1 from "../hero1";
import Header0 from "../header0";

//import { count } from "./data1.ts";



//const Slug2 = ({params}:{params:{slug2:number}}) => {   //export default Slug2;

//
 export default  async function Slug2({params}:{params:{slug2:number}})  {
 

 
 
console.clear();


  //const Slug2 = ({params}:{params:{slug2:number}}) => {
  
  // const products:any = await client.fetch(`*[_type == 'product' && category == 'FeaturedProductChair']`)
  
const product:any[] = await client.fetch(`*[_type == 'product' && category == 'FeaturedProductChair']{
  name,
  id,
  price,
  "imageUrl": image.asset->url  
  }`)
//ok const product:any[]  = await client.fetch(`*[_type == 'product' && category == 'FeaturedProductChair']`)
   console.log("product6mar25",product)
  // const [myCount,setMyCount]=useAtom(count)
//const items:any=products.find((item:any)=>item.id==params.slug2)
//console.log(items)
//console.log(params) //  <img src={dataset.imagePath} alt={dataset.name} width="200" />
  return (
 
    <div className="sm:w-full md:w-[80px] lg:w-[80%] h-full bg-blue-500 flex justify-center items-center ">
    <div className="w-[80%] sm:h-full md:h-[300px] ">
   



   




    {
    product.map((dataset:any,i:number)=>{
	
	if(dataset.id==params.slug2){
	console.log("ok")
	}
    return(
	
	dataset.id==params.slug2 ? (
      <>
        

<div className="flex bg-purple-400 " >
    <div>

    
        < Image src={dataset.imageUrl} alt={dataset.name} width={200} height={100}  />
         <h1 key={dataset.id} > {"item Name: "}   { dataset.name } </h1>
         <h1  >    { dataset.price } </h1>
</div>

<div>
<Itemaddition image1={dataset.imageUrl} imagepath1={dataset.imageUrl} price1={dataset.price} name1={dataset.name} />
		 
	
</div>
<div className="flex flex-col bg-purple-400 ">


<div className="bg-orange-400">
<Link href={"/"}>Click me Go to Main Page for another Shopping </Link>
</div>
<div className="bg-teal-300">
<Link href={"/NewCart"}> Click me if finished  Shopcart payment page</Link>	
</div>   
              </div>
              </div>




      </>   
    ) : (
      <div className="whatever">.</div> 
    )
  )
	
	
	
	
	
    })
     }
    
    
    
    
    
    
    
    </div>
    </div>
  );
}
