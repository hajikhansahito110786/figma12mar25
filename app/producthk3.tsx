import React from 'react'
import Image from 'next/image'
//import chaircusion from "./chaircusion.png"
import smallwhitechair from "./smallwhitechair.jpg"
import redchair from "./redchair.png"
import orange from "./orange.png"
import whitesofa from "./whitesofa.png"
import { client} from "@/sanity/lib/client"
import Link from 'next/link'

interface Iproduct {
     name:string
     }
 export default async function Producthk3() {
   


//const product:any[] = await client.fetch(`*[_type == 'product' && category == 'FeaturedProductChair']`)
 const product:any[] = await client.fetch(`*[_type == 'product' && category == 'FeaturedProductChair']{
  name,
  price,
  id,
  "imageUrl": image.asset->url  
  }`)

  return (
    
<div className="sm:w-full md:w-full lg:w-[80%] h-full ">
<div className="w-full sm:h-full md:h-[300px] flex justify-center items-center  mt-10">

{
product.map((data:any,i:number)=>{
return(
     <div key={data.id}>
<ul>


  <li key={data.id}>..</li>
  < Image src={data.imageUrl} alt={data.name} width={200} height={100}  />
     <h1  >    { data.id } </h1>
     <h1  >    { data.name } </h1>
     <h1  >    { data.price } </h1>
   <Link href={`/${data.id}`}    >     <h1>cart here </h1> </Link>
   </ul>
          </div>
)
})
 }







</div>
</div>
 
  )
}

