import { useRef } from "react";
import img1 from "../../assets/phone1.webp";
import img2 from "../../assets/phone3.webp";
import img3 from "../../assets/phone2.webp";
import img4 from "../../assets/phone4.webp";
import img5 from "../../assets/phone5.webp";

function Section3() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector(".card");
    if (!card) return;

    const gap = 24; // gap-6 = 24px
    const scrollAmount = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#0b1220] py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 items-center px-6">

        {/* LEFT */}
        <div className="flex flex-col items-start md:items-end text-left md:text-right">
          <p className="uppercase text-sm tracking-widest text-gray-400 mb-4">
            Solutions for every need
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Innovative ideas for
            <br />
            corporate identity
          </h2>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => scroll("left")}
              className="border border-white/30 px-4 py-2 rounded-full cursor-pointer hover:bg-white/20"
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              className="border border-white/30 px-4 py-2 rounded-full cursor-pointer hover:bg-white/20"
            >
              →
            </button>
          </div>
        </div>

        {/* RIGHT - SLIDER */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide touch-pan-x"
          >
            {[img1, img2, img3, img4, img5, img1].map((img, i) => (
              <div
                key={i}
                className="card min-w-[250px] md:min-w-[350px] h-[400px] md:h-[700px] rounded-[30px] flex-shrink-0 snap-center"
              >
                <img
                  src={img}
                  alt="screen"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Section3;