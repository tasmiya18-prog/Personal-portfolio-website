import { Award, Heart } from 'lucide-react';

export function CertificationsAndHobbies() {
  const certifications = [
    'Design Thinking',
    'Internet of Things',
  ];

  const hobbies = [
    'Cooking',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent flex items-center gap-3">
              <Award className="w-8 h-8 text-blue-500" />
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                  <p className="font-semibold">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent flex items-center gap-3">
              <Heart className="w-8 h-8 text-pink-500" />
              Hobbies
            </h2>
            <div className="space-y-4">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-pink-500 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full" />
                  <p className="font-semibold">{hobby}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
