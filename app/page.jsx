// import data from "../data/data.jsom"

import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const { events_categories } = await import("../data/data.json");

  const renderEvent = events_categories.map((events) => {
    return (
      <section>
        <Link href={`/category/${events.id}`} key={events.id}>
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
    );
  });

  return (
    <>
      <main className="flex flex-col gap-5 w-[80vw] m-auto">
        <h1>Events</h1>

        {renderEvent}
      </main>
    </>
  );
};
export default Home;
