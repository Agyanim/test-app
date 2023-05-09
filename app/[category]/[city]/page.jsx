"use client"
import Link from "next/link";
import Image from "next/image"
import { use } from "react";

const Events = ({params}) => {
  const events= use(getAllEvents())
  const {city}=params
  const categoryEents=events.filter(ev=>ev.city==city)
  console.log(categoryEents);
  return (
<main>

  {
categoryEents.map(events=>(
  <section>
  <Link href={{}} key={events.id}>
      <Image
        src={events.image}
        width={200}
        height={100}
        alt="Event image"
      />
      <h2>{events.title}</h2>
      <p>{events.description}</p>
    </Link>
  </section>

))
  }
</main>

  )
}

export default Events

//Data fetching
export const getData=async ()=>{
  const {events_categories}= await import(("../../../data/data.json"),{cache: "no store"})
  
 return events_categories
}
export const getAllEvents=async ()=>{
  const {allEvents}= await import(("../../../data/data.json"),{cache: "no store"})
  
 return allEvents
}

//Generating static params
// export const generateStaticParams=async ()=>{
// const data= await (getAllEvents())
// return data?.map(ev=> ({
//   params: {}
// }))
// }
// export const generateStaticParams=async ()=>{
// return {params: {}}
// }





// export const getStaticPath = async()=>{
// const {events_categories}= await import("../../../data/data.json")
// const allPath=events_categories.map(event=>{
//   return{
//     params:{
//       cat:event.id.toString()
//     }
//   }
// })
//   return{
//       paths:{
//         params:id,
//         fallback:false
//       }
//     };
  
// }

// export const getStaticProps=(context)=>{
//   console.log(context);
//   return{
//     props:{}
//   }
// }