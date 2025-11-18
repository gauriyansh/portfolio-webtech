import { Mail, Linkedin, Github, MapPin, Phone, ExternalLink, Award, Briefcase, GraduationCap, Code2, FileText, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              GK
            </h1>
            <div className="hidden md:flex gap-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Achievements'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-slate-800'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              GK
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            Gauriyansh Kalra
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            AI/ML Engineer & B.Tech Student specializing in Deep Learning, NLP, and GenAI
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:gauriyansh.write@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/gauriyansh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-slate-800 rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl border border-slate-200">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/gauriyansh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-slate-800 rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl border border-slate-200">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Hisar, Haryana</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91 8307574545</span>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="mt-16 animate-bounce"
          >
            <ChevronDown size={32} className="text-slate-400" />
          </button>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-slate-800 flex items-center gap-3">
            <GraduationCap className="text-slate-600" />
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold mb-4 text-slate-800">Education</h3>
              <p className="text-lg font-semibold text-slate-700 mb-2">B.Tech in Artificial Intelligence and Machine Learning</p>
              <p className="text-slate-600 mb-2">Bennett University</p>
              <p className="text-slate-600 mb-2">Expected 2027</p>
              <p className="text-lg font-bold text-slate-800">CGPA: 8.8/10</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold mb-4 text-slate-800">Objective</h3>
              <p className="text-slate-600 leading-relaxed">
                B.Tech AI/ML student with experience in ML, GenAI, and DSA, seeking opportunities to apply deep learning and NLP skills in real-world AI applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-slate-800 flex items-center gap-3">
            <Briefcase className="text-slate-600" />
            Experience & Research
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">AI Intern (Paid)</h3>
                  <p className="text-lg text-slate-600">Eastman Automobile Pvt. Ltd., Gurgaon</p>
                </div>
                <span className="text-slate-500 font-medium">May 2024 – Jul 2024</span>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li className="flex gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Designed and implemented ML pipelines to analyze EV battery data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Built and deployed an LSTM model achieving 86% accuracy in EV range prediction</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <FileText className="text-slate-600 mt-1" size={24} />
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">EV Range Prediction using LSTM</h3>
                  <p className="text-lg text-slate-600 mb-3">Bennett University</p>
                  <p className="text-slate-600 leading-relaxed">
                    Developed an LSTM-based model for predicting EV range using driving history, achieving 86% accuracy; paper under review for IEEE publication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-slate-800 flex items-center gap-3">
            <Code2 className="text-slate-600" />
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">AI Resume Classifier</h3>
              <p className="text-slate-600 mb-4">
                OCR+NLP pipeline to extract data from resume images and classify candidates with 96% accuracy.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full">OCR</span>
                <span className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full">NLP</span>
                <span className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full">ML</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">GenAI PPT Generator</h3>
              <p className="text-slate-600 mb-4">
                Generated presentations from prompts using OpenAI API and deployed via Streamlit.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full">GenAI</span>
                <span className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full">OpenAI</span>
                <span className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full">Streamlit</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Weather Forecast App</h3>
              <p className="text-slate-600 mb-4">
                Flutter app using OpenWeatherMap API to display real-time weather with clean UI.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full">Flutter</span>
                <span className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full">API</span>
                <span className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full">Dart</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3">LSTM-based EV Prediction</h3>
              <p className="text-slate-600 mb-4">
                Deep learning model for predicting electric vehicle range with 86% accuracy using historical data.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full">LSTM</span>
                <span className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full">TensorFlow</span>
                <span className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-slate-800 flex items-center gap-3">
            <Code2 className="text-slate-600" />
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['C++', 'Python', 'Java', 'R', 'Dart', 'JavaScript', 'SQL', 'Bash'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'PyTorch', 'Keras', 'scikit-learn', 'OpenCV', 'pandas', 'NumPy'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['Streamlit', 'Flutter', 'Node.js', 'Express.js'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {['ML', 'DL', 'GenAI', 'LSTM', 'NLP', 'OCR', 'DSA'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-slate-800 flex items-center gap-3">
            <Award className="text-slate-600" />
            Achievements & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
              <Award className="text-slate-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Top 50 Team Lead</h3>
              <p className="text-slate-600">IEEE SSH Hackathon, Oct 2024</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
              <Award className="text-slate-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Academic Scholarship Holder</h3>
              <p className="text-slate-600">Bennett University</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
              <Award className="text-slate-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Placement Committee Member</h3>
              <p className="text-slate-600">Bennett University</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4 text-slate-600">
              <div className="flex items-start gap-2">
                <ExternalLink size={16} className="mt-1 text-slate-400" />
                <span>Data Structures in C++ – UIUC</span>
              </div>
              <div className="flex items-start gap-2">
                <ExternalLink size={16} className="mt-1 text-slate-400" />
                <span>DP & Greedy – Colorado Boulder</span>
              </div>
              <div className="flex items-start gap-2">
                <ExternalLink size={16} className="mt-1 text-slate-400" />
                <span>SQL for Data Science – IBM</span>
              </div>
              <div className="flex items-start gap-2">
                <ExternalLink size={16} className="mt-1 text-slate-400" />
                <span>Supervised ML – IBM</span>
              </div>
              <div className="flex items-start gap-2">
                <ExternalLink size={16} className="mt-1 text-slate-400" />
                <span>WEKA – IIT Madras</span>
              </div>
              <div className="flex items-start gap-2">
                <ExternalLink size={16} className="mt-1 text-slate-400" />
                <span>DSA – ExcelR</span>
              </div>
              <div className="flex items-start gap-2">
                <ExternalLink size={16} className="mt-1 text-slate-400" />
                <span>Operating Systems – Google</span>
              </div>
              <div className="flex items-start gap-2">
                <ExternalLink size={16} className="mt-1 text-slate-400" />
                <span>GenAI Essentials – Udemy</span>
              </div>
              <div className="flex items-start gap-2">
                <ExternalLink size={16} className="mt-1 text-slate-400" />
                <span>MERN Stack – Udemy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-slate-300 mb-6">
            Open to opportunities in AI/ML, Deep Learning, and NLP
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="mailto:gauriyansh.write@gmail.com" className="hover:text-slate-300 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/gauriyansh" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/gauriyansh" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              <Github size={24} />
            </a>
          </div>
          <p className="text-slate-400 text-sm">
            © 2024 Gauriyansh Kalra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
