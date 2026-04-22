import { FaMousePointer, FaLayerGroup, FaSlidersH, FaCode, FaPalette, FaHeadset } from "react-icons/fa";
import StatsSection from "../extra/StatsSection";
const features = [
  {
    icon: <FaMousePointer />,
    title: "Professional Training",
    desc: "Structured programs designed to build competence in Loan & Risk Management practices."
  },
  {
    icon: <FaLayerGroup />,
    title: "Practical Learning",
    desc: "Hands-on case studies and real-world scenarios to strengthen industry expertise."
  },
  {
    icon: <FaSlidersH />,
    title: "Custom Programs",
    desc: "Flexible learning paths tailored to individuals and organizations across sectors."
  },
  {
    icon: <FaCode />,
    title: "No Experience Needed",
    desc: "Start from foundational knowledge and grow into a highly skilled professional."
  },
  {
    icon: <FaPalette />,
    title: "Ethical Standards",
    desc: "Instilling discipline, integrity, and accountability in all financial practices."
  },
  {
    icon: <FaHeadset />,
    title: "Continuous Support",
    desc: "Access expert guidance, mentorship, and ongoing professional development."
  },
];

function Section2() {
  return (
    
    
    <section className="bg-[#0b1220] py-20 border-b-1 border-white">
        <div className="max-w-7xl mx-auto">
        <StatsSection/>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10  my-20">
        
        {features.map((item, i) => (
          <div key={i} className="flex gap-5 items-start">
            
            {/* ICON */}
            <div className="min-w-[70px] h-[70px] flex items-center justify-center border border-[var(--color-primary-300)] rounded-2xl text-2xl text-[var(--color-primary-200)]">
              {item.icon}
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-primary-300)] mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--color-primary-300)] leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>
        ))}

      </div>

      

    </section>
  );
}

export default Section2;