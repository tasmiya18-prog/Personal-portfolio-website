import { Download, Mail, Phone, Linkedin, Github } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Tasmiya
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-foreground/80">
              Aspiring Python Frontend Developer
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Building responsive and scalable user interfaces with modern technologies
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base">
            <a href="mailto:tasmiyaaleem@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              tasmiyaaleem@gmail.com
            </a>
            <a href="tel:9591487631" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              9591487631
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent hover:scale-105 transition-all duration-200"
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
