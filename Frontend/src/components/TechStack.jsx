import { motion } from 'framer-motion'

const TechStack = () => {
  const technologies = [
    { name: 'Python', color: 'bg-blue-500' },
    { name: 'Flask', color: 'bg-gray-500' },
    { name: 'React', color: 'bg-blue-400' },
    { name: 'JavaScript', color: 'bg-yellow-400' },
    { name: 'Tailwind CSS', color: 'bg-cyan-400' },
    { name: 'SQLAlchemy', color: 'bg-red-500' },
    { name: 'PostgreSQL', color: 'bg-blue-600' },
    { name: 'Git', color: 'bg-orange-500' },
    { name: 'Vite', color: 'bg-purple-500' },
    { name: 'BeautifulSoup', color: 'bg-green-500' },
    { name: 'Supabase', color: 'bg-emerald-500' },
    { name: 'Google Gemini API', color: 'bg-indigo-500' },
    { name: 'SMTP', color: 'bg-pink-500' },
    { name: 'HTML/CSS', color: 'bg-orange-400' },
    { name: 'Alembic', color: 'bg-teal-500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section className="section-padding bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-dark-700 rounded-lg p-4 border border-dark-600 hover:border-primary-500 transition-colors duration-200 cursor-pointer">
                <div className="flex items-center justify-center mb-2">
                  <div className={`w-8 h-8 rounded-full ${tech.color} flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <p className="text-center text-sm text-dark-300 group-hover:text-primary-400 transition-colors duration-200">
                  {tech.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack 