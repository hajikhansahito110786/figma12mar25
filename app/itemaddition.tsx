"use client"
import {useAtom} from "jotai"
import {useState} from "react";
import { count } from "./data123";
import { total } from "./data123";
import { todo } from "./data123";
import { todoobject,todoobjecttotal } from "./data123";
import { newtotal } from "./data123";
import { subtotal } from "./data123";
import { myArrayAtom } from './data123';

import SanityData2 from './sanitydata2';

import { nameyesno  } from "./data123";




  const Itemaddition = ({image1,imagepath1,price1,name1}:{image1:string,imagepath1:string,price1:number,name1:string}) => {



 console.clear();
 console.log("********")
 
    console.log("data2 image1",image1)	
    console.log("data2 imagepath1",imagepath1)
    console.log("data2 price1",price1)
    console.log("data2 name1",name1)

    console.log("********")
  
    
		const [mynewtotal,setmynewtotal]=useAtom(newtotal)
		 // console.warn("data1mynewtotal",mynewtotal)
	const [mysubtotal,setsubtotal]=useAtom(subtotal)
	  const [myTotal,setMyTotal]=useAtom(total)
const [myCount,setMyCount]=useAtom(count)
const [myCount1,setMyCount1]=useState(0)
//const [myCount,setMyCount]=useState(0)
const [myTodoobjecttotal,setMyTodoobjecttotal]=useState(todoobjecttotal)
//setMyCount=0;  todoobjecttotal

interface abc2{
name:string,
yesno:number
    }
	
	
const [mynameyesno,setMynameyesno]=useAtom(nameyesno)

  //ok console.log("data1 price1",mynameyesno)
//const [myMyArraynew,setMyArraynew]=useAtom(myArraynew)

const [myTodo, setTodo]=useAtom(todo);

const [myTodoobject, setTodoobject]=useAtom(todoobject);
const [myArray, setMyArray] = useAtom(myArrayAtom);
//const [myTodoobject, setTodoobject]=useAtom(myArrayAtom);
 //useAtom(myArrayAtom);

//todoobject
const [todonewvalue, setTodonewvalue]=useState("");


const addfunction=()=>{






//
interface MyObject {
id:number,
itemsquanitity:number,
image:string,
imagepath:string,
Quantityselected:number,
name:string,
price:number

}

const newObject: MyObject = {
id: myArray.length + 1, // Generate a unique ID,
itemsquanitity:myCount1,
image:image1,
imagepath:imagepath1,
Quantityselected:(price1 * myCount1),
name:name1,
price:price1
}


//	
	
	
	
	
setMyArray((prevArray) => [...prevArray, newObject]);


//

/*


myTodoobject.push({itemsquanitity:parseInt(myCount1),image:image1,imagepath:imagepath1, Quantityselected:(parseInt(price1) * parseInt(myCount1)), name:name1,price:(parseInt(price1) *1)})
*/
//const abc123:any|never=myCount1
//myTodoobject.push({itemsquanitity:parseInt(myCount1)})
//myTodoobject.push({itemsquanitity:67})


//ok mynameyesno.push({ name: name1,yesno:price1 * myCount1}); 

	 
	   //ok   setTodo([...myTodo, (parseInt(price1) * parseInt(myCount1))])
			

	
	console.log("myTodoobject",myTodoobject)
	
console.log("mynameyesno",mynameyesno)
  }

  const deletefunction=(v:any)=>{
    const newArray=myTodo.filter(item=>item!==v);
    setTodo(newArray)
    
    //setTodonewvalue("")
  }


  return (
    
   









    <div className="sm:w-full md:w-[80px] lg:w-[80%] h-full bg-blue-500 flex justify-center items-center ">
    <div className="w-[80%] sm:h-full md:h-[300px] ">
	  <h1>Please Select Quantity</h1>
      <h1></h1>
      <h1></h1>
      <div>
      <button className="bg-red-300 w-100" onClick={() => {
        setMyCount(myCount + 1);
		 setMyCount1(myCount1 + 1);
       //setTodonewvalue(parseInt({data1}) * parseInt({myCount}))
	  //ok  setTodonewvalue(parseInt({price1}) * parseInt({myCount1}))
	 //ok  setmynewtotal(parseInt({todonewvalue}))
      //setTodonewvalue(88);
      
		   
      } }>Quantity Please? click me (+) : ({myCount1})  </button>
      </div>
	  <div className="bg-green-300 w-100">
      <h1>SubTotal</h1>
	  <h1>   ..</h1>
      {price1 * myCount1}

      <button onClick={addfunction} className="bg-blue-300 ml-5">
          click me to add this cart addition 

        </button>
     </div>
    </div><div>


     </div>
      </div>
	 
 
   
    
  )
}

export default Itemaddition;