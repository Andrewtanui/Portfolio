import { motion } from 'framer-motion'
import { MapPin, Code, Brain } from 'lucide-react'

const About = () => {
  const skills = [
    "Full-Stack Development",
    "Python & JavaScript",
    "AI Integration",
    "Database Design",
    "API Development",
    "Web Scraping",
    "User Experience Design",
    "Problem Solving"
  ]

  return (
    <section id="about" className="section-padding bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  I'm Andrew Tanui
                </h3>
                <p className="text-dark-300 leading-relaxed mb-6">
                  I'm a developer passionate about solving real-world problems with code. 
                  I focus on full-stack development with Python and JavaScript, and I enjoy 
                  using AI tools to enhance user experience and backend intelligence.
                </p>
                <p className="text-dark-300 leading-relaxed">
                  Based in Kenya, I specialize in creating innovative web applications that 
                  address local and global challenges. My work spans from e-commerce solutions 
                  to educational platforms, always with a focus on user experience and 
                  technological excellence.
                </p>
              </div>

              {/* Location and Focus */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span className="text-dark-300">Based in Kenya</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-primary-400" />
                  <span className="text-dark-300">Full-Stack Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5 text-primary-400" />
                  <span className="text-dark-300">AI Integration Specialist</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">
                Skills & Expertise
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-dark-700 rounded-lg p-4 border border-dark-600 hover:border-primary-500 transition-colors duration-200"
                  >
                    <p className="text-dark-300 text-center font-medium">
                      {skill}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-dark-700 rounded-xl p-8 border border-dark-600"
        >
          <h4 className="text-xl font-semibold mb-4 text-white">
            What I Do
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-primary-400" />
              </div>
              <h5 className="font-semibold mb-2 text-white">Development</h5>
              <p className="text-dark-300 text-sm">
                Building robust, scalable web applications with modern technologies
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-primary-400" />
              </div>
              <h5 className="font-semibold mb-2 text-white">AI Integration</h5>
              <p className="text-dark-300 text-sm">
                Leveraging AI tools to enhance user experience and backend intelligence
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary-400" />
              </div>
              <h5 className="font-semibold mb-2 text-white">Problem Solving</h5>
              <p className="text-dark-300 text-sm">
                Creating solutions that address real-world challenges and user needs
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 