export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.id} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <a href={p.link} className="card-link" target="_blank" rel="noreferrer">
              View project →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
