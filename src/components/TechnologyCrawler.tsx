import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiPython,
  SiPostgresql,
  SiRedis,
  SiAmazon,
  SiGraphql,
  SiJest,
  SiGit,
  SiFigma,
  SiFirebase,
  SiPrisma
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const technologies = [
  { name: 'React', icon: SiReact, color: 'text-blue-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
  { name: 'Redis', icon: SiRedis, color: 'text-red-500' },
  { name: 'AWS', icon: SiAmazon, color: 'text-orange-500' },
  { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-500' },
  { name: 'Jest', icon: SiJest, color: 'text-red-600' },
  { name: 'Git', icon: SiGit, color: 'text-orange-600' },
  { name: 'VS Code', icon: VscCode, color: 'text-blue-500' },
  { name: 'Figma', icon: SiFigma, color: 'text-purple-500' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-orange-500' },
  { name: 'Prisma', icon: SiPrisma, color: 'text-indigo-500' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' }
];

export default function TechnologyCrawler() {
  return (
    <div className="w-full overflow-hidden py-12 sm:py-16">
      <div className="relative">
        {/* First row - moving right */}
        <motion.div
          className="flex space-x-12 sm:space-x-16 mb-8 sm:mb-12"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2"
            >
              <div className={`text-4xl sm:text-5xl ${tech.color} transition-colors duration-300`}>
                <tech.icon />
              </div>
              <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Second row - moving left */}
        <motion.div
          className="flex space-x-12 sm:space-x-16"
          animate={{
            x: [-1000, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2"
            >
              <div className={`text-4xl sm:text-5xl ${tech.color} transition-colors duration-300`}>
                <tech.icon />
              </div>
              <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 