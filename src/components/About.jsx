import { motion } from 'framer-motion';
import { Code2, Database, BarChart3, Brain, Globe, Workflow, Coffee } from 'lucide-react';
import profileImage from '../assets/girl_causal_2.png'; // Updated image for About section

const About = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Python', 'Java', 'C'],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'SQLite'],
    },
    {
      title: 'Data Science',
      icon: BarChart3,
      skills: ['Pandas', 'NumPy', 'Power BI', 'Data Analysis'],
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: ['Machine Learning Basics', 'kNN Algorithm', 'Data Preprocessing'],
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: ['React', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      title: 'Tools & Technologies',
      icon: Workflow,
      skills: ['Git', 'GitHub', 'VS Code', 'Streamlit'],
    },
  ];

  const floatingIcons = [
    { Icon: Code2, delay: 0 },
    { Icon: Database, delay: 0.5 },
    { Icon: BarChart3, delay: 1 },
    { Icon: Brain, delay: 1.5 },
    { Icon: Coffee, delay: 2 },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 dark:text-white text-black">
                ABOUT ME
              </h2>

              <p className="text-lg leading-relaxed mb-6 dark:text-gray-300 text-gray-700">
                I'm a passionate Data Science enthusiast with a keen interest in transforming raw data into meaningful insights.
                My journey in data science has equipped me with the skills to analyze complex datasets and build intelligent solutions.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-6 dark:text-white text-black">Technical Skills</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {skillCategories.map((category, index) => {
                    const CategoryIcon = category.icon;
                    return (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-950/70 p-5 shadow-sm backdrop-blur"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                            <CategoryIcon className="w-5 h-5" />
                          </div>
                          <h4 className="text-base font-semibold dark:text-white text-black">{category.title}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skillItem) => (
                            <span
                              key={skillItem}
                              className="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                            >
                              {skillItem}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-8 dark:text-gray-300 text-gray-700">
                I enjoy problem-solving, data analysis, and continuously learning new technologies.
                Currently, I'm focusing on improving my skills in data science, machine learning, and modern web development to create impactful digital experiences.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              
               

              
               
            </motion.div>
          </div>

          {/* Right Column - Image with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Glassmorphism card */}
              <div className="relative rounded-3xl bg-white/10 dark:bg-slate-900/10 backdrop-blur-lg border border-white/20 dark:border-slate-700/20 shadow-2xl p-8">
                <img
                  src={profileImage}
                  alt="Anjali Skaria"
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                />

                {/* Floating Icons */}
                {floatingIcons.map(({ Icon, delay }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: delay,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    className={`absolute w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center ${
                      index === 0 ? 'top-4 left-4' :
                      index === 1 ? 'top-8 right-8' :
                      index === 2 ? 'bottom-8 left-6' :
                      index === 3 ? 'bottom-4 right-4' :
                      'top-1/2 left-2 transform -translate-y-1/2'
                    }`}
                  >
                    <Icon className="w-6 h-6 text-orange-500" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;