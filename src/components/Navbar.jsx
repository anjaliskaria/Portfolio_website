import { motion } from 'framer-motion';
import { useState } from "react";
import { Sun, Moon, X, Menu } from 'lucide-react';


const Navbar = ({darkMode, toggleDarkMode}) => {
  const[activeSection, setActiveSection] = useState('home');
  const[isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {name: 'Home',link: '#home'},
    {name: 'About',link: '#about'},
    // {name: 'Skills',link: '#skills'},
    {name: 'Projects',link: '#projects'},
    {name: 'Contact',link: '#contact'},
  ]

  const lightColor = {
    navBg:'bg-gradient-to-br from-orange-200 to-white',
    textPrimary:'text-gray-900',
    textSecondary:'text-gray-700',
    textHover:'text-orange-500',
    textActive:'text-orange-600',
    indicator:'from-orange-500 to-amber-500',
    button:'from-orange-500 to-amber-500'
  };
  const darkColor = {
    navBg:'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950',
    textPrimary:'text-white',
    textSecondary:'text-gray-300',
    textHover:'text-orange-400',
    textActive:'text-orange-400',
    indicator:'from-orange-500 to-amber-500',
    button:'from-orange-500 to-amber-500'
  };

  const colors = darkMode ? darkColor : lightColor;
  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false); // Close menu on mobile after click
    
  };




  return (
    <div className="fixed inset-x-0 top-4 z-50 px-4">
      <motion.nav
      initial={{y:-100, opacity: 0, scale: 0.8, rotateX: -15}}
      animate={{
        y:0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        boxShadow: [
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        ]
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
        duration: 0.8,
        boxShadow: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={`mx-auto w-full max-w-[1600px] flex items-center justify-center ${colors.navBg}
      backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
        <div className="flex items-center justify-between
        w-full space-x-6 lg:space-x-8">
          {/* logo */}
          <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
          whileHover={{scale: 1.05}}
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="flex items-center space-x-2">
            <span className={`text-xl font-bold ${colors.textPrimary}`}>
               Portfolio<span
               className="text-orange-500">.</span>
            </span>

          </motion.a>
            {/*Nvaigation Items */}
            <div className="hidden lg:flex items-center
            space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                key={item.name}
                href={item.link}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                className="relative"
                onClick={() => handleNavClick(item.name)}
              >
                <motion.span
                className={`font-medium transition-colors duration-300 ${
                  activeSection === item.name.toLowerCase()
                  ? colors.textActive
                  : `${colors.textSecondary} hover:${colors.textHover}`
                }`}

                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
                >
                  {item.name}
                </motion.span>
                {
                  activeSection === item.name.toLowerCase() && (
                    <motion.div
                    layoutId='navbar-indicator'
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full 
                     ${colors.indicator}`}>

                    </motion.div>
                  )
                }
              </motion.a>
            ))}
            </div>
            <div className='flex items-center space-x-2'>
              {/* Dark Mode Toggle */}
              <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.4, type: "spring" }}
              whileHover={{
                scale:1.1,
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{scale:0.9}}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode
              ? 'bg-gray-700'
              : 'bg-gray-200'
              } transition-colors`}
               aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                
                  {
                    darkMode ? (
                    
                      <Sun className="w-5 h-5 text-yellow-300"/>

                    ):
                 

                    <Moon className="w-5 h-5 text-gray-700"/>
                  }
              </motion.button>
                {/* Button */}  
                <motion.a
                href="#contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6, type: "spring" }}
                whileHover={{
                  scale:1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{scale:0.95}}
                className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-gradient-to-r ${colors.button}
                text-white shadow-md hover:shadow-lg transition-shadow`}>
                  Hire me
                </motion.a>
            </div>
            {/* Mobile Menu Button */}
            <div className='flex lg:hidden items-center space-x-4 px-2'>

              <motion.button
              whileTap={{scale:0.9}}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${darkMode 
                ? 'bg-gray-700' 
                : 'bg-gray-200'}`}>

                  {
                    isMenuOpen ? (
                      <X className={`w-5 h-5 ${darkMode
                        ?`text-white`
                        :`text-gray-700`
                        
                      }`}/>
                    ):(
                      <Menu className={`w-5 h-5 ${darkMode
                        ?'text-white'
                        :'text-gray-700'
                       }` }/>
                    )
                  }




              </motion.button>

            </div>
        </div>
            {isMenuOpen && (
              <motion.div
                initial={{opacity:0, height:0}}
                animate={{opacity:1, height: "auto"}}
                transition={{duration:0.3}}
                className={`absolute top-full left-0 right-0 mt-2 lg:hidden
                  ${darkMode 
                  ?'bg-gray-900/95'
                :'bg-white/95'
                } backdrop-blur-lg rounded-xl shadow-lg border 
                 ${ darkMode
                 ? `border-gray-700`
                 : `border-gray-200`
                 }`}>

                  <div className='px-4 py-3 space-y-2'>
                  {navItems.map((item)=>(
                    <a key={item.name}
                    href={item.link}
                    onClick={()=> handleNavClick(item.name)}
                    className ='block'>
                      <motion.div 
                      whileHover={{x:5}}
                      className={`py-3 px-4 rounded-lg text-center
                      ${
                      activeSection === item.name.toLowerCase()
                      ? darkMode ?`bg-gray-800`:`bg-orange-50`
                      :``
                      }`}>

                        <span 
                        className={`font-medium ${
                        activeSection === item.name.toLowerCase()
                        ? colors.textActive
                        : colors.textSecondary
                        
                        }`}>

                          {item.name}

                        </span>

                      </motion.div>
                    </a>

                  ))}

                  <motion.a
                    href='#contact'
                    onClick={()=>setIsMenuOpen(false)}
                    whileTap={{scale:0.95}}
                    className={`block py-3 px-4 text-center font-semibold
                      rounded-lg bg-gradient-to-r ${colors.button}
                      text-white shadow-md
                      
                      `}
                  >
                    Hire me
                  </motion.a>

                  </div>
              </motion.div>

            )}      
      </motion.nav>
  
    </div>
  );
};

export default Navbar
