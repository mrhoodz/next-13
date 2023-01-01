import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next/types";

type Data = {
    name: string
  }
  


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
  // const response = await axios.get("https://127.0.0.1:1337/api/projectinfos/1");
  // const x = await response.data;

//   console.log(req.body.id);

console.log(req.body.slug);

if(req.body.slug){
    const serviceResponse = await axios.get(`https://dummyjson.com/products/${req.body.slug}`);
    const serviceData = await serviceResponse.data; 
    res.status(200).json(serviceData);




} else{
    const serviceResponse = await axios.get(`https://dummyjson.com/products/`);
    const serviceData = await serviceResponse.data; 
    res.status(200).json(serviceData);


}




//   const serviceResponse = await axios.get(`https://dummyjson.com/products/`);
//   const serviceData = await serviceResponse.data; 

  



}
