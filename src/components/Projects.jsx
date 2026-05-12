import { motion } from 'framer-motion';
import { GitBranch, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Driven Mock Interview Platform',
      description:
        'An AI-powered mock interview platform designed to help users practice technical interviews with interactive question-answer sessions and intelligent feedback mechanisms.',
      github: 'https://github.com/anjaliskaria/AI_Driven_Mock_Interview_Platform.git',
      tech: ['React', 'Tailwind CSS', 'AI Integration', 'JavaScript'],
    },
    {
      title: 'Autonomous Job Applier',
      description:
        'A smart automated job application platform that streamlines the job application process and improves efficiency for job seekers.',
      github: 'https://github.com/anjaliskaria/Autonomous-Job-Applier-FrontEnd.git',
      tech: ['React', 'Tailwind CSS', 'Automation', 'JavaScript'],
    },
    {
      title: 'Student Report Generator',
      description: "Student Report Generator web application  to automate student record management and grade calculation. Implemented features for report generation, percentage analysis, and database storage with an interactive user interface.",
      github: 'https://github.com/anjaliskaria/Student-report-generator-.git',
      tech: ['python', 'sqlite', 'streamlit', 'pycharm'],
    },
    {
      title: 'Portfolio Website',
      description: "A personal portfolio website built with React and Tailwind CSS to showcase projects, skills, and experience. The website features a modern design, responsive layout, and interactive elements to engage visitors.",
      github: 'https://github.com/anjaliskaria/Portfolio_website.git',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
    }

  ];

  return (
    <section id="projects" className="py-20 lg:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 max-w-3xl text-center">
         
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl text-left">
            PROJECTS
          </h2>
        
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/80 dark:bg-slate-950/70 dark:border-slate-700/70 p-8 shadow-2xl shadow-orange-500/10 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-transparent to-blue-500/5 opacity-80 blur-2xl" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-50/80 px-3 py-1 text-sm font-semibold text-orange-600 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-400/30">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    Featured Project
                  </div>
                  <h3 className="text-2xl font-semibold text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-6">
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="rounded-full border border-slate-200/80 bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:shadow-xl"
                  >
                    <GitBranch className="h-4 w-4" />
                    View on GitHub
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
