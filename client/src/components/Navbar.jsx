import { useState } from "react";

const links = ["about", "projects", "contact"];

export default function Navbar({ name }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        {name.split(" ")[0]}
        <span>.</span>
      </a>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        ☰
      </button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map((l) => (
          <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>
            {l}
          </a>
        ))}
      </nav>
    </header>
  );
}
