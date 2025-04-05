/*import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center pt-4 sm:pt-0 md:pt-16 lg:pt-32">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Front-End
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Janani <br className="sm:hidden md:block" />
        Upeksha
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
          Here's a more concise version of the text:

          "Passionate Software Engineering student skilled in coding and problem-solving. Constantly exploring new technologies and frameworks to enhance skills. Eager to contribute innovative solutions and grow as a Software Developer."
      </motion.p>
    </div>
  );
};

export default HeroText;*/

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const phrases = [
        "Front-End Web Developer",
        "Backend Developer",
        "Full Stack Developer"
    ];
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const pauseBetweenText = 1000;

    const timeoutRef = useRef(null);

    useEffect(() => {
        let isMounted = true;

        const typeText = () => {
            if (!isMounted) return;

            if (isTyping) {
                if (text.length < phrases[phraseIndex].length) {
                    setText(phrases[phraseIndex].substring(0, text.length + 1));
                    timeoutRef.current = setTimeout(typeText, typingSpeed);
                } else {
                    setIsTyping(false);
                    timeoutRef.current = setTimeout(typeText, pauseBetweenText);
                }
            } else {
                if (text.length > 0) {
                    setText(text.substring(0, text.length - 1));
                    timeoutRef.current = setTimeout(typeText, erasingSpeed);
                } else {
                    setIsTyping(true);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                    timeoutRef.current = setTimeout(typeText, typingSpeed);
                }
            }
        };

        timeoutRef.current = setTimeout(typeText, typingSpeed);

        return () => {
            isMounted = false;
            clearTimeout(timeoutRef.current);
        };
    }, [text, isTyping, phraseIndex, phrases, typingSpeed, erasingSpeed, pauseBetweenText]);

    return (
        <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center pt-2 sm:pt-0 md:pt-16 lg:pt-20">
            <motion.h2
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
                className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
            >
                {text}
                <span className="animate-pulse">|</span> {/* Cursor indicator */}
            </motion.h2>
            <motion.h1
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
                className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-darkCream font-bold uppercase"
            >
                Janani <br className="sm:hidden md:block"/>
                Upeksha
            </motion.h1>
            <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
                className="text-lg mt-4 font-baskerville w-full max-w-[600px]"
            >
                Passionate Software Engineering student skilled in coding and problem-solving. Constantly exploring new technologies and frameworks to enhance skills. Eager to contribute innovative solutions and grow as a Software Developer.
            </motion.p>
        </div>
    );
};

export default HeroText;