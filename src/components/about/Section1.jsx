import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import personImg from "../../assets/2.webp";

const sections = [
  {
    title: "Our Story",
    heading: "Building Professionals in Loan & Risk Management",
    text: `The Chartered Institute of Loan & Risk Management of Nigeria is a professional and educational body established by the 
    act of Parliament of the Federal Republic of Nigeria Gazetted Bill No. SB 220 Vol. 9 of 2012.

    The Institute was established primarily to fill the void in the specialist professional disciplines of loan & risk management practice, 
    thereby complementing the noteworthy contributions of individual, academia and other professional bodies.

    The evolving highly competitive global economic scenario with its demand for top flight efficiency and effectiveness have made it 
    essential for specialist professional focus on loan & risk management as in the case already in the more advanced countries and a 
    number of emerging economies of the world.
    `,
  },
  {
    title: "Our Vision",
    heading: "Raising Competent Professionals",
    text: `The Institute envisions a future where professionals in Loan and Risk Management practice operate at 
    the highest level of competence, professionalism, and global relevance, contributing meaningfully to financial stability and economic growth.,
    This vision is driven by the need to develop a new generation of experts equipped with the knowledge, 
    skills, and ethical standards required to meet the increasing demand for competent professionals in both local and international financial environments.
    In line with global best practices, the Institute seeks to continually raise the standard of professional practice through 
    structured capacity building, innovation, and commitment to excellence in all areas of loan and risk management.`,
  },
  {
    title: "Our Mission",
    heading: "Instilling Integrity & Excellence",
    text: `The mission of the Institute is to fill the existing gap in professionalism within the Loan and Risk Management sector by promoting discipline, integrity, and accountability among practitioners.

    It is committed to fostering a culture of ethical conduct, transparency, and responsibility, ensuring that professionals are not only technically sound but also guided by strong moral principles in their practice.

    Through education, certification, and continuous engagement, the Institute aims to build a community of professionals who consistently uphold excellence and contribute positively to the financial system and society at large.`,
  },
  {
    title: "Core Values",
    heading: "Principles That Guide Us",
    text: `The Institute operates on a foundation of core values that define its identity and guide its actions in all professional engagements. These values include transparency, responsibility, integrity, professionalism, and adherence to best practices.

    It also upholds fairness, humility, and accountability as essential principles that shape decision-making and interactions within the Institute and the wider professional community.

    These values serve as a compass, ensuring that all activities and initiatives of the Institute are aligned with the highest standards of ethical and professional conduct.`,
  },
  {
    title: "Our Aims",
    heading: "Advancing Knowledge & Practice",
    text: `The Institute aims to promote research, knowledge development, and professional excellence in the field of Loan and Risk Management through strategic initiatives and collaborative efforts.

    It is dedicated to organizing training programs, workshops, and seminars that enhance the capacity of professionals and keep them updated with evolving industry trends and global standards.

    By fostering collaboration among stakeholders and encouraging continuous professional development, the Institute seeks to strengthen the practice and ensure its relevance in a dynamic and competitive global environment.`,
  },
];

function Section1() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % sections.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + sections.length) % sections.length);

  const current = sections[index];

  return (
    <section className="bg-gradient-to-r from-[#0b1220] to-[#0b1220] text-white py-30 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        

        {/* LEFT SIDE */}
        <div className=" border-r border-white/20">
          <img
            src={personImg}
            alt="about"
            className="rounded-xl w-full max-w-md"
          />

          <div className="border-t border-white/20 pt-6 px-3">
            <h5 className="text-xl font-semibold mb-2 text-[var(--color-primary-200)]">
                President / Chairman, Governing Council
            </h5>

            <h3 className="text-xl font-semibold mb-2">
              DR. (MRS.) HARRIET NKECHI AKUBUIRO, HCILRM
            </h3>
            <p className="text-gray-300 text-md  text-justify">
              She is a renowned and highly experienced Educationist. She is an erudite scholar and a Management Consultant, 
              with Education Career that has covers several years. She holds a PhD in Business Administration, an M.Sc in 
              Personnel Management and Industrial Relations and a B.Sc in Business Administration. 
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* MAIN CONTENT */}
          <AnimatePresence mode="wait">
            {/* SMALL HEADING */}

          <div className="flex flex-row justify-between my-5">

                <p className="uppercase text-md tracking-widest text-[var(--color-primary-200)] mb-4 ">
                    {current.title}
                </p>

                {/* NAV BUTTONS */}
                <div className="flex items-center gap-4">
                    <button
                    onClick={prev}
                    className="border border-white/30 px-4 py-2 rounded-full hover:bg-white/10 cursor-pointer"
                    >
                    ←
                    </button>
                    <button
                    onClick={next}
                    className="border border-white/30 px-4 py-2 rounded-full hover:bg-white/10 cursor-pointer"
                    >
                    →
                    </button>
                </div>

          </div>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* BIG HEADING */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                {current.heading}
              </h2>

              {/* DIVIDER */}
              <div className="border-b border-white/20 mb-6"></div>

              {/* PARAGRAPH */}
              <p className="text-gray-300 leading-relaxed mb-10 text-justify">
                {current.text}
              </p>
            </motion.div>
          </AnimatePresence>

       

          {/* INDICATOR LINES */}
          <div className="flex gap-3 mt-6">
            {sections.map((_, i) => (
              <div
                key={i}
                className={`h-[3px] w-10 rounded-full ${
                  i === index ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Section1;