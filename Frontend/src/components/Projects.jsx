import { motion } from 'framer-motion'
import { ExternalLink, Github, ShoppingCart, BookOpen, FileText } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "🛒 Price Comparison Web App",
      description: "A platform focused on Kenyan e-commerce (Jumia, Kilimall, Jiji, Kenyatronics, Zurimall) that scrapes product data, tracks price changes, and enables product comparisons and wishlists.",
      features: [
        "Product scraping",
        "Price tracking and comparison",
        "User auth & wishlist",
        "RESTful API backend",
        "Email and OTP",
        "Admin/database tools"
      ],
      technologies: [
        "Python", "Flask", "SQLAlchemy", "Alembic", "BeautifulSoup", 
        "Supabase", "React", "Vite", "Context API", "Tailwind CSS"
      ],
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "📚 Student-Centric Content Publishing Platform",
      description: "A web app for boosting student interaction within universities via events, study groups, content sharing, and multilingual support with AI-enhanced tagging.",
      features: [
        "User registration and profile management",
        "Event creation and participation",
        "Study groups and clubs",
        "Social features (follow, posts, notifications)",
        "Content analysis/tagging using AI (Gemini API)",
        "Swahili–English multilingual support via Google Translate",
        "Recommendation system for posts/users"
      ],
      technologies: [
        "Python", "Flask", "SQLite/PostgreSQL", "SQLAlchemy", "Alembic",
        "React", "Google Gemini API", "Google Translate API", "Logging", ".env management"
      ],
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 3,
      title: "✍️ Web Blogging Platform",
      description: "Users register, read and publish blogs, with email notifications for updates.",
      features: [
        "User registration and authentication",
        "Blog creation and publishing",
        "Email notifications for updates",
        "Responsive design",
        "Admin dashboard"
      ],
      technologies: [
        "Python", "SQLAlchemy", "SMTP", "HTML/CSS", "Flask"
      ],
      icon: FileText,
      color: "from-purple-500 to-pink-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="section-padding bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            AI integration, and solving real-world problems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-1"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="bg-dark-700 rounded-xl p-8 border border-dark-600 card-hover"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <project.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-dark-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary-400">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-dark-300">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary-400">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-dark-600 text-dark-300 rounded-full text-sm border border-dark-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 