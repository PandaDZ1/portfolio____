export default function Hero({ profile }) {
  return (
    <section id="home" className="hero">
      <p className="hello">Hi, my name is</p>
      <h1>{profile.name}</h1>
      <h2>{profile.title}</h2>
      <p className="bio">{profile.bio}</p>
      <div className="hero-buttons">
        <a href="#projects" className="btn">View my work</a>
        <a href="#contact" className="btn btn-outline">Contact me</a>
      </div>
    </section>
  );
}
