import { useAtom } from 'jotai';
import { useState } from "react"; 
import { myArrayAtom } from "./data123";
import { newtotal } from "./data123";
import { nameyesno, totalprice } from "./data123";
import Image from "next/image";
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
/*
 <TableHeader>
          <TableRow>
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
		*/
  const [mytotalprice, settotalprice] = useAtom(totalprice);
  const [mymyArrayAtom, setmymyArrayAtom] = useAtom(myArrayAtom);
  const [mynameyesno, setMynameyesno] = useAtom(nameyesno);
  const safemymyArrayAtom1 = Array.isArray(mymyArrayAtom) ? mymyArrayAtom : [];
  let abc: number = 0;

  safemymyArrayAtom1.map((item: any, i: number) => {
    abc = abc + item.Quantityselected;
  });

  settotalprice(abc);

  const [mynewtotal, setmynewtotal] = useAtom(newtotal);
  const safemymyArrayAtom = Array.isArray(mymyArrayAtom) ? mymyArrayAtom : [];

  const deletefunction = (v: number) => {
    const newArray = safemymyArrayAtom.filter(item => item.id !== v);
    setmymyArrayAtom(newArray);
  };

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableCaption>A list of your recent invoices.</TableCaption>
       
        <TableBody>
          {safemymyArrayAtom.map((item, i) => (
            <TableRow key={item.id} onClick={() => deletefunction(item.id)} className="flex flex-col md:table-row">
              <TableCell className="font-medium">id {item.id}</TableCell>
              <TableCell className="text-right">item_name: {item.name}</TableCell>
              <TableCell className="text-right">item_unit/price: {item.price}</TableCell>
              <TableCell className="text-right">item_subtotal: {item.Quantityselected}</TableCell>
              <TableCell className="text-right">item Quantity subtotal: {item.Quantityselected}</TableCell>
              <TableCell className="text-right"> item quantity: {item.itemsquanitity}</TableCell>
              <TableCell className="text-right">item pic: 
                <Image src={item.imagepath} alt={item.name} width="200" height="200" />
              </TableCell>
              <TableCell className="text-right"> item pic2
                <Image src={item.image} alt={item.name} width="200" height="200" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{abc}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
