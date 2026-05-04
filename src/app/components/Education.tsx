import { GraduationCap } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'BE',
      institution: 'BGS Institute of Technology, Mandya',
      field: 'EC',
      score: '9.1 CGPA',
      year: '2026',
    },
    {
      degree: '12th',
      institution: 'BGS Independent PU College',
      field: 'PCMB',
      score: '93.3%',
      year: '2022',
    },
    {
      degree: '10th',
      institution: 'GJC Nagamangala',
      field: '',
      score: '94%',
      year: '2020',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden sm:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-0 sm:pl-20">
                <div className="absolute left-5 top-6 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-background hidden sm:block" />

                <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:hidden">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold">
                          {edu.degree}
                          {edu.field && ` – ${edu.field}`}
                        </h3>
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <p className="text-lg font-semibold text-blue-500">{edu.score}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
