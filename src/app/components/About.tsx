export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg text-foreground/80 leading-relaxed text-center">
            Aspiring Python Frontend Developer with hands-on experience in Python, HTML, CSS, and MySQL,
            seeking an entry-level opportunity to design and develop responsive and scalable user interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}
