import { Code, Database, Palette, Brain, Clock, TrendingUp } from 'lucide-react';

export function Skills() {
  const primarySkills = [
    { name: 'Python', icon: Code },
    { name: 'HTML', icon: Code },
    { name: 'CSS', icon: Code },
    { name: 'SQL', icon: Database },
  ];

  const secondarySkills = [
    { name: 'Figma', level: 70, icon: Palette },
    { name: 'Generative AI', level: 65, icon: Brain },
    { name: 'Problem Solving', level: 75, icon: Brain },
    { name: 'Time Management', level: 95, icon: Clock },
    { name: 'Adaptability', level: 90, icon: TrendingUp },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Primary Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {primarySkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="bg-card p-6 rounded-xl border border-border hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex flex-col items-center gap-3 group"
                >
                  <Icon className="w-12 h-12 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-center">{skill.name}</h4>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Secondary Skills</h3>
          <div className="space-y-6">
            {secondarySkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-purple-500" />
                    <h4 className="font-semibold">{skill.name}</h4>
                    <span className="ml-auto text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
