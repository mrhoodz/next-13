// // // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// // export default function handler(
// //   req: NextApiRequest,
// //   res: NextApiResponse<Data>
// // ) {

// //   res.status(200).json({ name: 'John Doe' })
// // }

// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import axios from "axios";



// // async function getProjects() {
 
// //   const response = await fetch("http://localhost:1337/api/projectinfos");
// //   const x = await response.json();
// //   return x;  


// // }





// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
//   ) {
//   // const response = await axios.get("https://127.0.0.1:1337/api/projectinfos/1");
//   // const x = await response.data;


//   const serviceResponse = await axios.get("http://localhost:1337/api/projectinfos");
//   const serviceData = await serviceResponse.data; 

  



//   res.status(200).json(serviceData);
// }
