import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventsPage =async () => {
  const { events_categories } = await import("../../data/data.json");

  return (
    <>
      <main className="flex flex-col gap-5 w-[80vw] m-auto">
        <h1>Events</h1>

        {events_categories.map((events) => (
          <section>
          <Link href={`/category/${events.id}`} key={events.id}>
              <Image
                src={events.image}
                width={400}
                height={200}
                alt="Event image"
              />
              <h2>{events.title}</h2>
              <p>{events.description}</p>
            </Link>
          </section>
        ))}
      </main>
    </>
  );
};

export default EventsPage;

