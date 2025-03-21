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
  
  
  
  <div className=" sm:w-ful h-[300px]  flex justify-center mt-8 " >
  <div className=" bg-red-100 sm:w-full md:w-full lg:w-[80%] h-full flex justify-between ">  



{
product.map((data:any,i:number)=>{
return(
    

<div key={data.id} className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] md:w-[400px] md:h-[400px] overflow-hidden">
<h1  > price  { data.price } </h1>
   <h1 > { data.name } </h1> 
   <Link href={`/${data.id}`}    >     <h1>cart here </h1> </Link>
 
  
  < Image src={data.imageUrl} alt={data.name} width={400} height={400} className="w-full h-full object-cover"  />
     
   
  
          </div>
)
})
 }







</div>
</div>
 
  )
}

