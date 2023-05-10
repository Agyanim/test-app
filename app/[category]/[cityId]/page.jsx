// "use client"
import Link from "next/link";
import Image from "next/image"
import { use } from "react";

//Data fetching

export const getData=async ()=>{
  const {events_categories}= await import(("../../../data/data.json"))
  
 return events_categories
}
export const getAllEvents=async ()=>{
  const {allEvents}= await import(("../../../data/data.json"),{cache: "no store"})
  
 return allEvents
}


const Events = ({params}) => {
  const events= use(getAllEvents())
  const {cityId}=params
  const categoryEents=events.filter(ev=>ev.city==cityId)
  // console.log(categoryEents);
  return (
<main>

  {
categoryEents.map(events=>(
  <section>
  <Link href={`/category/cityId/${events.id}`} key={events.id}>
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







