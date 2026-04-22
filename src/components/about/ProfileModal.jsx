import { FaTimes, FaLinkedin, FaFacebookF } from "react-icons/fa";

function ProfileModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500"
        >
          <FaTimes size={18} />
        </button>

        {/* IMAGE */}
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
        />

        {/* INFO */}
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {member.name}
        </h2>

        <p className="text-center text-[var(--color-primary-200)] mb-4 font-bold">
          {member.position}
        </p>

        <p className="text-gray-600 text-center mb-6">
          {member.profile || "No additional profile information available."}
        </p>

        {/* SOCIALS */}
        <div className="flex justify-center gap-4">
          <a
            href={member.linkedin}
            className="p-3 bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white"
          >
            <FaLinkedin />
          </a>

          <a
            href={member.facebook}
            className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white"
          >
            <FaFacebookF />
          </a>
        </div>

      </div>
    </div>
  );
}

export default ProfileModal;