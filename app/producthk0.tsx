 import Image from 'next/image'
 import zapierlogo from "./zapierlogo.png"
import pipedrive from "./pipedrive.png"
import sibbank from "./sibbank.png"
import onlyzee from "./onlyzee.png"

 export default async function Producthk0() {
 return(
 <div className="w-full flex justify-center mt-10 mb-30 
">
<div className="w-[80%]  ">
{/*top side */}

{/*products*/}
<div className="flex justify-evenly">


<div className="w-[200px] h-[150px]  flex justify-center items-center">
< Image src={zapierlogo} alt ='hero-image' width={100} height={100} className="w-[85px] h-[87px]" />
</div>
<div className="w-[200px] h-[150px]  flex justify-center items-center">
< Image src={pipedrive} alt ='hero-image' width={100} height={100} className="w-[100px] h-[100px]" />
</div>
<div className="w-[200px] h-[150px]  flex justify-center items-center">
< Image src={sibbank}  alt ='hero-image' width={100} height={100} className="w-[100px] h-[100px]" />

</div>
<div className="w-[200px] h-[150px]  flex justify-center items-center">
< Image src={onlyzee} alt ='hero-image' width={100} height={100} className="w-[100px] h-[100px]" />
</div>



</div>



</div>
 
 </div>
 
 )
 
 
 }
