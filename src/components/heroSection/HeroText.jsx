import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { fadeIn } from "../../framerMotion/variants";
import { FiArrowRight } from "react-icons/fi";

const HeroText = () => {
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const phrases = [
        "Front-End Developer",
        "Backend Engineer",
        "Full Stack Creator"
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
    }, [text, isTyping, phraseIndex]);

    return (
        <div className="flex flex-col gap-6 h-full justify-center">
            <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="flex items-center gap-3"
            >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 animate-pulse" />
                <span className="text-lg font-mono text-cyan-300">
                    {text}
                    <span className="ml-1 animate-pulse">▋</span>
                </span>
            </motion.div>

            <motion.h1
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent leading-tight"
            >
                Janani Upeksha
            </motion.h1>

            <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="text-lg text-gray-300 max-w-2xl"
            >
                Software engineer crafting digital experiences with modern web technologies.
                Passionate about building efficient, scalable solutions with clean code.
            </motion.p>

            <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="mt-6"
            >
                <a
                    href="#projects"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-medium w-fit hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group"
                >
                    View My Work
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
            </motion.div>
        </div>
    );
};

export default HeroText;