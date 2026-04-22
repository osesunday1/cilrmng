import heroImg from "../../assets/1.WEBP";
import { motion } from "framer-motion";


function Section1() {
    
  return (
     <section className="relative min-h-[70vh] py-5 flex items-center overflow-hidden bg-gradient-to-r from-[#0f172a] via-[#111827] to-black border-b-1 border-white">

      {/* FADED BACKGROUND TEXT (bottom → top) */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute text-[20vw] font-bold text-white top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
      >
        CILRM
      </motion.h1>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* LEFT IMAGE (left → right) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <img
            src={heroImg}
            alt="hero"
            className="rounded-2xl w-full max-w-md"
          />
        </motion.div>

        {/* RIGHT TEXT (right → left) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-white"
        >
          <p className="uppercase text-sm tracking-widest text-gray-400 mb-4">
            Solutions for every need
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Trust in the process!
            <br />
            Join us today.
          </h1>

          <p className="text-gray-300 mb-8 max-w-lg">
            Professional training in Loan & Risk Management.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-[var(--color-primary-200)] text-white px-6 py-3 rounded-lg font-semibold">
              Get Started
            </button>

            <button className="border border-white/30 px-6 py-3 rounded-lg hover:bg-white/10">
              Learn More
            </button>
          </div>
        </motion.div>

      </div>


    </section>
  );
}

export default Section1;