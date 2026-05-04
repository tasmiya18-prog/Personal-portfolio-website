import { ExternalLink, CheckCircle2 } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Aggression and Violence Detection System',
      description: 'AI-based surveillance system to detect violent activities using video analysis',
      tech: ['Python', 'Machine Learning', 'OpenCV', 'Deep Learning'],
      features: [
        'Real-time detection',
        'Video analysis',
        'Automated alerts',
        'Public safety applications',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'CampusATdesk – Job Board & Career Portal',
      description: 'Web platform for job and internship listings',
      tech: ['HTML', 'CSS', 'JavaScript', 'Python (Flask)', 'MySQL'],
      features: [
        'Job listing system',
        'User-friendly UI',
        'Recruiter-student interaction',
        'Application submission',
        'Dashboard management',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Feedback Management System',
      description: 'Web app to collect and manage user feedback',
      tech: ['Python (Flask)', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Feedback form',
        'Validation',
        'Flash messages',
        'Database storage',
        'Clean UI',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold pr-2">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer flex-shrink-0" />
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <h4 className="text-sm font-semibold mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
