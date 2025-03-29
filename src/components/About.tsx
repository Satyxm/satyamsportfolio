'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Replace this with your actual Twitter data
const tweets = [
  {
    content: "Just launched a new portfolio website! Check it out 🚀",
    likes: 42,
    retweets: 12,
    replies: 5
  },
  {
    content: "Working on some exciting new projects. Stay tuned! 💻",
    likes: 38,
    retweets: 8,
    replies: 3
  },
  {
    content: "Learning new technologies is always exciting! Today's focus: Next.js 🔥",
    likes: 56,
    retweets: 15,
    replies: 7
  },
  {
    content: "Code review time! Always great to learn from others' perspectives 👀",
    likes: 29,
    retweets: 6,
    replies: 4
  },
  {
    content: "Debugging can be frustrating, but solving problems is so satisfying! 🎯",
    likes: 45,
    retweets: 9,
    replies: 6
  },
  {
    content: "Clean code is not just about aesthetics, it's about maintainability 🧹",
    likes: 67,
    retweets: 18,
    replies: 8
  },
  {
    content: "Pair programming session today - great way to learn and share knowledge 👥",
    likes: 34,
    retweets: 7,
    replies: 3
  },
  {
    content: "Remember: Comments are for explaining why, not what. Code should speak for itself 💭",
    likes: 89,
    retweets: 24,
    replies: 12
  },
  {
    content: "New feature implemented! Testing phase begins 🧪",
    likes: 47,
    retweets: 11,
    replies: 5
  },
  {
    content: "Code optimization is an art. Every millisecond counts ⚡",
    likes: 58,
    retweets: 14,
    replies: 7
  },
  {
    content: "Git commits are like a diary of your coding journey 📝",
    likes: 41,
    retweets: 9,
    replies: 4
  },
  {
    content: "Remember to take breaks! A fresh mind writes better code 🧘‍♂️",
    likes: 72,
    retweets: 19,
    replies: 9
  },
  {
    content: "Code review feedback is a gift - it helps us grow as developers 🎁",
    likes: 63,
    retweets: 16,
    replies: 7
  },
  {
    content: "Documentation is as important as the code itself 📚",
    likes: 85,
    retweets: 22,
    replies: 10
  },
  {
    content: "Every bug is a learning opportunity. Embrace the challenge! 🐛",
    likes: 78,
    retweets: 20,
    replies: 8
  }
];

function TweetCard({ tweet }: { tweet: typeof tweets[0] }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-4 border border-gray-200 dark:border-gray-700"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <div 
            className="w-10 h-10 rounded-full overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/profile.jpg')` }}
          >
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-gray-900 dark:text-white">Satyam Singh</span>
            <span className="text-gray-500">@satyamtwts</span>
          </div>
          <p className="text-gray-900 dark:text-white mt-1">{tweet.content}</p>
          <div className="flex items-center justify-between mt-3 text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-sm">{tweet.replies}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-sm">{tweet.retweets}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-sm">{tweet.likes}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Snake() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(1);
  const [isMoving, setIsMoving] = useState(true);
  const [showOuch, setShowOuch] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [displayedMessage, setDisplayedMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    "So, you're visiting Mr. Satyam Singh huh? He's a cool guy you know! 👋",
    "Did you know he's a coding wizard? His code is like poetry! ✨",
    "He's always helping others debug their problems... such a kind soul! 🤗",
    "I love watching him work on his projects... it's mesmerizing! 💻",
    "He's got this amazing ability to solve complex problems with simple solutions! 🧠",
    "Sometimes he stays up late coding... I keep him company! 🌙",
    "His portfolio is going to be amazing, just wait and see! 🚀",
    "He's not just a coder, he's a problem solver extraordinaire! 💪",
    "Want to know a secret? He's pretty awesome at what he does! 🤫",
    "I'm his little coding companion, making sure everything runs smoothly! 🐍",
    "He's always learning new technologies... it's inspiring! 📚",
    "Did you see his latest project? It's absolutely mind-blowing! 🤯",
    "He's got this unique way of explaining complex concepts... so clear! 🎯",
    "His code is so clean and organized, it's like art! 🎨",
    "He's always up for a coding challenge... nothing stops him! 💪",
    "His debugging skills are out of this world! 🔍",
    "He makes coding look so easy... it's almost unfair! 😄",
    "His portfolio is going to be a masterpiece, just wait! 🎭",
    "He's not just a developer, he's a tech artist! 🎨",
    "I'm lucky to be his coding companion! 🍀"
  ];

  useEffect(() => {
    const moveInterval = setInterval(() => {
      if (isMoving) {
        setPosition(prev => ({
          x: prev.x + (3 * direction),
          y: prev.y
        }));

        // Check if reached the right edge
        if (position.x >= 300) {
          setDirection(-1);
        }
        // Check if reached the left edge
        if (position.x <= 0) {
          setDirection(1);
        }
      }
    }, 50);

    return () => clearInterval(moveInterval);
  }, [direction, isMoving, position.x]);

  useEffect(() => {
    if (isTyping && displayedMessage.length < messages[messageIndex].length) {
      const typingInterval = setInterval(() => {
        setDisplayedMessage(prev => messages[messageIndex].slice(0, prev.length + 1));
      }, 50);

      return () => clearInterval(typingInterval);
    } else {
      // After typing is complete, wait 0.3s then move to next message
      const delayTimeout = setTimeout(() => {
        setMessageIndex(prev => (prev + 1) % messages.length);
        setDisplayedMessage("");
        setIsTyping(true);
      }, 300);

      return () => clearTimeout(delayTimeout);
    }
  }, [isTyping, messageIndex, displayedMessage, messages]);

  // Start typing when component mounts
  useEffect(() => {
    setIsTyping(true);
  }, []);

  const handleClick = () => {
    setIsMoving(false);
    setShowOuch(true);
    setTimeout(() => {
      setShowOuch(false);
      setIsMoving(true);
    }, 1000);
  };

  return (
    <div className="relative">
      <motion.div
        className="relative w-40 h-16"
        style={{
          x: position.x,
          y: position.y,
          scaleX: direction === -1 ? -1 : 1,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-36 h-8">
            {/* Snake head */}
            <motion.div
              className="absolute w-4 h-4 bg-green-500 rounded-full cursor-pointer"
              style={{
                left: "0px",
                top: "0px",
              }}
              animate={{
                y: [0, 0, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              onClick={handleClick}
            >
              {/* Eyes */}
              <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full" />
              <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full" />
            </motion.div>

            {/* Snake body segments */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-green-500 rounded-full cursor-pointer"
                style={{
                  left: `${(i + 1) * 4}px`,
                  top: "0px",
                }}
                animate={{
                  y: [0, 0, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
                onClick={handleClick}
              />
            ))}

            {/* Ouch message */}
            {showOuch && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: -20 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -top-8 bg-red-500 text-white px-2 py-1 rounded-lg text-xs whitespace-nowrap"
                style={{
                  left: direction === 1 ? '0px' : 'auto',
                  right: direction === -1 ? '0px' : 'auto',
                  transform: direction === -1 ? 'scaleX(-1)' : 'none',
                  width: 'fit-content',
                }}
              >
                Ouch! 😫
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Typing message below snake */}
      <div className="mt-2 text-xs text-gray-600 dark:text-gray-300 flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
        <span>{displayedMessage}</span>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About Me</h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  A passionate Computer Science student with expertise in software development and machine learning. I love solving complex problems and building innovative solutions.
                </p>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>&gt; Final year CSE student</p>
                  <p>&gt; Works worldwide remotely</p>
                  <p>&gt; Open source contributor</p>
                  <p>&gt; Building in public</p>
                  <p>&gt; Always upskilling</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors font-medium">
                    Want to know more? View my CV →
                  </a>
                </div>
              </div>
              <div className="pt-4 h-16">
                <Snake />
              </div>
            </div>
            
            <div className="relative h-[500px] overflow-hidden">
              <motion.div
                className="absolute inset-0"
                animate={{
                  y: [0, -1000],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
              >
                {[...tweets, ...tweets].map((tweet, index) => (
                  <TweetCard key={index} tweet={tweet} />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 