import { motion } from "framer-motion";

const stats = [
  { value: 74, label: "Training & Education" },
  { value: 66, label: "Certifications" },
  { value: 83, label: "Networking Events" },
];

function Circle({ value }) {
  const radius = 70;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (value / 100) * circumference;

  return (
    <div className="relative w-[160px] h-[160px] flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2}>
        {/* Background circle */}
        <circle
          stroke="#1f2937"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress circle */}
        <motion.circle
          stroke="url(#grad)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Gradient */}
        <defs>
          <linearGradient id="grad">
            <stop offset="0%" stopColor="#e1663d" />
            <stop offset="100%" stopColor="#e1663d" />
          </linearGradient>
        </defs>
      </svg>

      {/* Percentage text */}
      <span className="absolute text-3xl font-bold text-white">
        {value}%
      </span>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="bg-[#0b1220] text-white my-5">
      <div className=" mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-400 mb-4">
            Solutions for every need
          </p>

          <h2 className="text-4xl md:text-4xl font-bold leading-tight">
            Professional Development <br/> Opportunities
           
          </h2>
        </div>

        {/* RIGHT CIRCLES */}
        <div className="flex flex-wrap justify-center md:justify-end gap-10">
          {stats.map((item, i) => (
            <div key={i} className="text-center">
              <Circle value={item.value} />
              <p className="mt-4 text-lg text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default StatsSection;