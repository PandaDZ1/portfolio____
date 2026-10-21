import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([fetch("/api/profile"), fetch("/api/projects")])
      .then(async ([p, pr]) => {
        if (!p.ok || !pr.ok) throw new Error();
        setProfile(await p.json());
        setProjects(await pr.json());
      })
      .catch(() => setError("Could not reach the server. Is the backend running on port 5000?"));
  }, []);

  if (error) return <p className="status">{error}</p>;
  if (!profile) return <p className="status">Loading...</p>;

  return (
    <>
      <Navbar name={profile.name} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects projects={projects} />
        <Contact email={profile.email} />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}. Built with React & Express.
      </footer>
    </>
  );
}
