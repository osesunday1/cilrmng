import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinkClass = ({ isActive }) =>
    `transition hover:text-[var(--color-primary-300)] ${
      isActive ? "text-[var(--color-primary-300)] font-semibold" : "text-white"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-[var(--color-primary-100)] shadow-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-white">
          CILRMNG
        </NavLink>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>

        </ul>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-[var(--color-primary)]">
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
           
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;