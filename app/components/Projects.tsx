import projects from "@/data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="px-6 max-w-3xl mx-auto py-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="space-y-6">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            className="block border p-4 rounded hover:bg-gray-50 transition"
          >
            <h3 className="font-semibold text-xl">{p.title}</h3>
            <p className="text-gray-600">{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
