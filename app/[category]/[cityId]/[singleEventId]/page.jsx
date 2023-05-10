// "use client"
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
export const getAllEvents = async () => {
  const { allEvents } = await import("../../../../data/data.json", {
    cache: "no store",
  });

  return allEvents;
};
const SinglePage = ({ params }) => {
  const { singleEventId } = params;
  const events = use(getAllEvents());
  const singleEvent = events.find((events) => events.id === singleEventId);
  // console.log(singleEvent);
  return (
    <main>
      <h1>Events</h1>

      {
        <section>
          <Link href={{}} key={singleEvent.id}>
            <Image
              src={singleEvent.image}
              width={300}
              height={100}
              alt="Event image"
            />
            <h2>Title: {singleEvent.title}</h2>
            <h3>City: {singleEvent.city}</h3>
            <p>Discription: {singleEvent.description}</p>
            <div>
              Emial:
              {singleEvent.emails_registered?.map((email) => {
                return <ul><li>{email}</li></ul>
              })}
            </div>
          </Link>
        </section>
      }
    </main>
  );
};

export default SinglePage;
