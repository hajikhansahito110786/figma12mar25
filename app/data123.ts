import {atom} from "jotai"


export const subtotal=atom(0)
export const totalprice=atom(0)
export const count=atom(0)
export const newtotal=atom(100)
export const todo=atom([])
//export const todo=atom([{name1:0}])
export const todoobjecttotal=atom([7777])
export const todoobject = atom([
  
  
])

//ok export const nameyesno  = atom([{productname:"_",priceplz:0}])
 export const nameyesno  = atom([]); 

export const total=atom(100)


// Define the type of the object in the array
interface MyObject1 {
  id: number;
  name: string;
}
interface MyObject {
id:number,
itemsquanitity:number,
image:string,
imagepath:string,
Quantityselected:number,
name:string,
price:number

}
// Define the atom with an initial empty array
export const myArrayAtom = atom<MyObject[]>([]);

