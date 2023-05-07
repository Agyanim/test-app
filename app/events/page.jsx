import React from "react";

const EventsPage = () => {
  return (
    <>
      <main className="flex flex-col gap-5 w-[80vw] m-auto">
        <h1>Events</h1>
        <section>
          {/* <a href="/category/london"> */}
            <img src="/images/category/ev-cat-london.jpeg" alt="lodon city" />
            <h2>Events In London</h2>
            <p className=" text-red-950">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          {/* </a> */}
        </section>
        <section>
          <a href="">
            <img
              src="/images/category/ev-cat-sanFrancisco.jpg"
              alt="lodon city"
            />
            <h2>Events In San-Francisco</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </a>
        </section>
        <section>
          <a href="">
            <img
              src="/images/category/ev-cat-barcelona.jpeg"
              alt="lodon city"
            />
            <h2>Events In Barcelona</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </a>
        </section>
      </main>
    </>
  );
};

export default EventsPage;
