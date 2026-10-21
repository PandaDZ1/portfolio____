export default function About({ profile }) {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About me</h2>
      <p>
        I'm a {profile.title.toLowerCase()} based in {profile.location}. {profile.bio}
      </p>
      <h3>Skills</h3>
      <ul className="skills">
        {profile.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <div className="socials">
        <a href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}
