//import Image from "next/image";
"use client"
import { useAtom } from 'jotai';
import { myArrayAtom } from "./data123";
 import { todoobject } from "./data123";
import Link from "next/link"
import Image from 'next/image'
import logo1 from "./logo1.png"
import cartshop from "./cartshop.png"
function Header1() {
const [myTodoobject]=useAtom(todoobject);
const [myArray, setMyArray] = useAtom(myArrayAtom);
//myTodoobject.length
 //export default  
  return (
<div className="w-full sm:h-[90px] md:h-[80px]   flex justify-center items-center sm:border-b-none md:border-b-2 sm:mb-4 ">

<div className="w-[80%] h-full  flex sm:flex-col md:flex-row justify-between items-center">
 

	  {/*left side*/}
 <div className="sm:ml-1">
	<ul className="flex gap-x-1 md:mr-4 sm:mb-4 md:mb-0">
	 <li>
	<Link className="hover:underline" href={"/"}>Home</Link>
	 </li>
	 <li>
	<Link className="hover:underline" href={"/"}>Shop</Link>
	 </li>
	 <li>
	<Link className="hover:underline" href={"/ProductAll"}>Product</Link>
	 </li>
	  <li>
	  <Link className="hover:underline" href={"/SinglePage"}>Pages</Link>
	 </li>
	   <li>
	   <Link className="hover:underline" href={"/About"}>About</Link>
	    </li>
	
	   
	
	


	 <li>
	   <Link className="hover:underline" href={"/newfolder"}>
	     < Image src={cartshop} alt ='hero-image' width={50} height={50} className="w-[45px]" />Items
	   ({myArray.length})</Link>
	 </li>



	
	 </ul>
	
	 </div>

	 
	  {/*right side*/}
	 <div className="sm:text-[7] " >
	
	<h1>Hello 0800-0000</h1>
	 
	</div>
	
	  
</div>

</div>

   
      
     
   
  );
}
export default Header1;