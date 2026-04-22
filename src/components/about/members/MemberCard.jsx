import { FaShareAlt, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import ProfileModal from "../ProfileModal";


function MemberCard({ member }) {
  const [showSocials, setShowSocials] = useState(false);
const [open, setOpen] = useState(false);
  return (
    <>
    <div className="group">
      
      {/* IMAGE CARD */}
      <div className="relative rounded-2xl overflow-hidden">
        
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-[320px] object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

        {/* SHARE BUTTON */}
        <div
          className="absolute bottom-4 right-4"
          onMouseEnter={() => setShowSocials(true)}
          onMouseLeave={() => setShowSocials(false)}
        >
          <div className="bg-white/80 backdrop-blur p-3  cursor-pointer">
            <FaShareAlt />
          </div>

          {/* SOCIAL ICONS */}
          <div
            className={`absolute bottom-10 right-0 flex flex-col gap-1 transition ${
              showSocials
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 pointer-events-none"
            }`}
          >
            <a
              href={member.linkedin}
              className="bg-white p-3  hover:bg-blue-500 hover:text-white"
            >
              <FaLinkedin />
            </a>

            <a
              href={member.facebook}
              className="bg-white p-3  hover:bg-blue-600 hover:text-white"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col ">

      {/* TEXT */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-[var(--color-primary-300)] truncate max-w-[100%]">
          {member.name}
        </h3>
        <p className="text-[var(--color-primary-200)] truncate max-w-[100%]">{member.position}</p>
      </div>

        {/* BUTTON */}
        <button
            onClick={() => setOpen(true)}
            className="mt-3 px-4 py-3 text-sm bg-[var(--color-primary-200)] text-white rounded-lg hover:opacity-90 cursor-pointer "
            >
            View Profile
        </button>

      </div>


    </div>
    {/* MODAL */}
      {open && (
        <ProfileModal member={member} onClose={() => setOpen(false)} />
      )}
    </>
  );
}

export default MemberCard;