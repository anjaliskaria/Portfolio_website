import { motion } from 'framer-motion'
import heroImage from '../assets/hi_girl.png'

const Hero = ({ darkMode }) => {
  const lightColors = {
    bgGradient: 'from-blue-100 via-slate-100 to-orange-100',
    blurTop: 'from-slate-100 to-transparent',
    blurBlue: 'bg-blue-200',
    blurOrange: 'bg-orange-200',
    cardBg: 'bg-white/90',
    textSmall: 'text-orange-600/80',
    textName: 'text-gray-900',
    textTitle: 'text-gray-700',
    textDesc: 'text-gray-600',
    buttonPrimary: 'from-orange-500 via-orange-400 to-amber-400 text-white',
    buttonSecondary: 'border-orange-300 bg-orange-50 text-orange-700 hover:border-orange-400 hover:bg-orange-100',
    imageBg: 'from-orange-200/20 via-white/20 to-white/10'
  };

  const darkColors = {
    bgGradient: 'from-blue-900 via-slate-900 to-orange-900',
    blurTop: 'from-slate-900 to-transparent',
    blurBlue: 'bg-blue-500',
    blurOrange: 'bg-orange-500',
    cardBg: 'bg-slate-950/10',
    textSmall: 'text-orange-300/80',
    textName: 'text-white',
    textTitle: 'text-slate-200',
    textDesc: 'text-slate-300',
    buttonPrimary: 'from-orange-500 via-orange-400 to-amber-400 text-slate-950',
    buttonSecondary: 'border-orange-400/30 bg-white/5 text-orange-200 hover:border-orange-400/70 hover:bg-orange-400/10',
    imageBg: 'from-orange-400/20 via-slate-950/20 to-slate-950/10'
  };

  const colors = darkMode ? darkColors : lightColors;
  return (
    <section id="home" className="relative overflow-hidden py-20 lg:py-24">
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${colors.bgGradient}`} />
      <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${colors.blurTop} blur-3xl`} />
      <div className={`absolute inset-y-1/4 left-10 h-36 w-36 rounded-full ${colors.blurBlue} blur-3xl`} />
      <div className={`absolute right-10 top-36 h-44 w-44 rounded-full ${colors.blurOrange} blur-3xl`} />

      <div className="mx-auto flex w-full max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="w-full"
        >
          <div className={`relative flex min-h-screen flex-col justify-center overflow-hidden rounded-[2rem] ${colors.cardBg} p-6 shadow-2xl sm:p-10 lg:flex-row lg:items-center lg:gap-10`}>
            <div className="relative z-10 flex-1 lg:max-w-xl">
              <div className="space-y-5">
                <p className={`text-sm uppercase tracking-[0.4em] ${colors.textSmall}`}>Hello, I’m</p>
                <h1 className={`text-4xl font-semibold tracking-tight ${colors.textName} sm:text-5xl lg:text-6xl`}>
                  Anjali Skaria
                </h1>
                <p className={`max-w-xl text-xl font-medium leading-9 ${colors.textTitle} text-opacity-100 sm:text-2xl`}>
                  Data Science Enthusiast | AI Explorer
                </p>
                <p className={`max-w-2xl text-base leading-8 ${colors.textDesc} sm:text-lg`}>
                  Passionate about data science, AI-powered applications and creating modern digital experiences with impactful solutions.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <motion.a
                  href="/Anjali_Skaria_CV.pdf"
                  download
                  whileHover={{ y: -2, scale: 1.02 }}
                  className={`inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r ${colors.buttonPrimary} px-7 py-3 text-sm font-semibold shadow-2xl transition duration-300 hover:shadow-2xl sm:w-auto`}
                >
                  Download CV
                </motion.a>
                <motion.a
                  href="mailto:anjaliskaria@gmail.com"
                  whileHover={{ y: -2, scale: 1.02 }}
                  className={`inline-flex w-full items-center justify-center rounded-full border ${colors.buttonSecondary} px-7 py-3 text-sm font-semibold transition duration-300 sm:w-auto`}
                >
                  Contact Me
                </motion.a>
                
              </div>
            </div>

            <div className="relative mt-12 h-[420px] w-full flex-1 lg:mt-0 lg:max-w-lg">
              <div className={`absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br ${colors.imageBg} blur-3xl`} />
              <img
                src={heroImage}
                alt="Anjali Skaria hero"
                className="relative z-10 h-full w-full rounded-[2rem] object-cover object-top shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
