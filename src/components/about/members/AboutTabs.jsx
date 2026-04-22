import { useState } from "react";
import { membersData } from "../../../data/membersData";
import MemberCard from "./MemberCard";



const tabs = [
  { key: "council", label: "Governing Council" },
  { key: "patrons", label: "Patrons & Matrons" },
  { key: "trustees", label: "Board of Trustees" },
  { key: "faculty", label: "Faculty Members" },
];

function AboutTabs() {
  const [activeTab, setActiveTab] = useState("council");

  return (
    <section className=" bg-[var(--color-primary-100)]">
      <div className=" mx-auto flex flex-col bg-[var(--color-primary-100)] items-center">

        {/* TABS */}
        <div className="flex flex-wrap  mb-10 justify-center h-20 w-full border-b-1 border-white  bg-[var(--color-primary-100)]">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2   cursor-pointer transition ${
                activeTab === tab.key
                  ? "bg-[var(--color-primary-100)] text-white h-22"
                  : "text-[var(--color-primary-200)] border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className=" max-w-7xl grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {membersData[activeTab].map((member, i) => (
            <MemberCard key={i} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutTabs;