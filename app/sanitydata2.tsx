import Image from "next/image";
import Hk from "./hkpic.jpg"
import { client} from "@/sanity/lib/client"

export default async function SanityData2() {


   
    const products:any = await client.fetch(`*[_type == 'product' && category == 'FeaturedProductChair']`)
  console.log(products)
  

  return (
   <div className="sm:w-full md:w-[80px] lg:w-[80%] h-full bg-blue-500 flex justify-center items-center ">
    <div className="w-[80%] sm:h-full md:h-[3000px] ">
  < Image src={Hk} alt ='hero-image' width={200} height={200} />  
<h1>sanity data </h1>
 

<ul>
{
 products.map((product:any,i:number) => (
  

   
   <>
   
   
   <li key={product._id}></li>
   {


   }
     <h2>Product_name</h2>
   <h2>{product.name}</h2>
      <h2>Product_category</h2>
   <h2>{product.category}</h2>
    
    <h2>Poduct_price</h2>
    <h2>{product.price}</h2>
	 <h2>product_description</h2>
	   <h2>{product.description}</h2>
	      <h2>product_discountPercentage</h2>
	     <h2>{product.discountPercentage}</h2>
		  
  
     < Image src={product.image} alt={product.name} width="200" />
   
   </>
  
 
 ))




}
</ul>
      </div>
   </div>
  );
}
