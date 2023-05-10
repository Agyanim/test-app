import Link from "next/link";

const Nav = () => {
  return (
    <section className="flex-center gap-10 max-w-[80vw]  m-auto">
      <Link href={"/"}>Home</Link>
      <Link href={"/about-us"}>About</Link>
      <Link href={"/events"}>Events</Link>
    </section>
  );
};

export default Nav;
