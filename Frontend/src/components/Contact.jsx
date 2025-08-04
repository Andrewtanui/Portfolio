import { motion } from 'framer-motion'
import { Github, Mail, Download, ExternalLink } from 'lucide-react'

const Contact = () => {
  const contactLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Andrewtanui',
      icon: Github,
      color: 'hover:text-gray-400'
    },
    {
      name: 'Email',
      url: 'mailto:tanuilelan@gmail.com',
      icon: Mail,
      color: 'hover:text-red-400'
    }
  ]

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Andrew Tanui CV.pdf';
    link.download = 'Andrew Tanui CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section id="contact" className="section-padding bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Let's work together on your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Let's Connect
            </h3>
            <p className="text-dark-300 leading-relaxed mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-dark-700 rounded-lg border border-dark-600 hover:border-primary-500 transition-colors duration-200 group"
                >
                  <link.icon className={`w-6 h-6 text-dark-300 group-${link.color} transition-colors duration-200`} />
                  <span className="text-dark-300 group-hover:text-white transition-colors duration-200">
                    {link.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-dark-400 group-hover:text-primary-400 transition-colors duration-200 ml-auto" />
                </motion.a>
              ))}
            </div>

            {/* CV Download Button */}
            <motion.button
              onClick={handleDownloadCV}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.button>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-dark-700 rounded-xl p-8 border border-dark-600"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Send a Message
            </h3>
            <p className="text-dark-300 mb-6">
              Ready to start a project? Fill out the form below and I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-dark-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-dark-300 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200">
                Send Message
              </button>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-dark-300">
            Currently available for freelance opportunities and full-time positions
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 