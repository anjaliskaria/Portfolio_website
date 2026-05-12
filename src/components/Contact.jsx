import { motion } from 'framer-motion';
import { Download, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white mb-4"
          >
            CONTACT ME
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Let's connect and discuss how we can bring your ideas to life with data-driven solutions and modern web experiences.
          </motion.p>
        </div>

        {/* CV Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, scale: 1.01 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 relative overflow-hidden rounded-3xl border border-white/10 bg-white/80 dark:bg-slate-950/70 dark:border-slate-700/70 p-8 lg:p-12 shadow-2xl shadow-orange-500/10 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-transparent to-blue-500/5 opacity-80 blur-2xl" />
          <div className="relative z-10">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
                Professional Profile
              </h3>
              <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                As a passionate Data Science enthusiast, I'm dedicated to creating intelligent solutions and modern web experiences.
                My expertise spans data analysis, machine learning, and frontend design and  development, always focused on delivering impactful results.
              </p>
            </div>

            <motion.a
              href="/Anjali_Skaria_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:shadow-xl"
            >
              <Download className="h-5 w-5" />
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Information Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, scale: 1.01 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/80 dark:bg-slate-950/70 dark:border-slate-700/70 p-8 lg:p-12 shadow-2xl shadow-orange-500/10 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-transparent to-blue-500/5 opacity-80 blur-2xl" />
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">
              {/* Email Section */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="text-lg font-medium text-black dark:text-white mb-1">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    anjaliskaria@gmail.com
                  </p>
                </div>
                <motion.a
                  href="mailto:anjaliskaria@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-orange-500 dark:border-orange-400 text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/40 px-6 py-3 font-semibold transition duration-300"
                >
                  <Mail className="h-4 w-4" />
                  Send Email
                </motion.a>
              </div>

              {/* WhatsApp Section */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="text-lg font-medium text-black dark:text-white mb-1">
                    WhatsApp
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91 8590972921
                  </p>
                </div>
                <motion.a
                  href="https://wa.me/918590972921"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-green-500 dark:border-green-400 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40 px-6 py-3 font-semibold transition duration-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Chat
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;