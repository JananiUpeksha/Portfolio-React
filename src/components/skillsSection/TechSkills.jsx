import React, { useState } from "react";
import SoftSkills from "./SoftSkills";

// Sample images for each category
const sampleImages = {
    Languages: [
        { url: "java.png", label: "Java" },
        { url: "js.png", label: "JavaScript" },
        { url: "ts.png", label: "TypeScript" },
        { url: "python.png", label: "Python" }
    ],
    WebDevelopment: [
        { url: "HTML.png", label: "HTML" },
        { url: "CSS.png", label: "CSS" },
        { url: "React.png", label: "React" },
        { url: "Node.js.png", label: "Node.js" },
        { url: "Express.js.png", label: "Express.js" }
    ],
    Frontend: [
        { url: "img.png", label: "React" },
        { url: "https://via.placeholder.com/100", label: "Vue.js" },
        { url: "https://via.placeholder.com/100", label: "Angular" },
        { url: "https://via.placeholder.com/100", label: "HTML" },
        { url: "https://via.placeholder.com/100", label: "CSS" },
        { url: "https://via.placeholder.com/100", label: "SASS" }
    ],
    DevOps: [
        { url: "C.png", label: "C#" },
        { url: ".Net.png", label: ".Net" },
        { url: "Docker.png", label: "Docker" },
        { url: "Kubernatees.png", label: "Kubernetes" },
        { url: "CloudComputing.png", label: "Cloud Computing" }
    ],
    Database: [
        { url: "MySQL.png", label: "MySQL" },
        { url: "MongoDB.png", label: "MongoDB" },
        { url: "Firebase.png", label: "Firebase" }
    ],
    Tools: [
        { url: "Github.png", label: "Github" },
        { url: "Figma.png", label: "Figma" },
        { url: "Linux.png", label: "Linux" },
        { url: "Windows.png", label: "Windows" },
        { url: "VScode.png", label: "VScode" },
        { url: "InteligIdea.png", label: "Intelig Idea" }
    ],
};

const skills = [
    { name: "Languages" },
    { name: "WebDevelopment" },
    { name: "Frontend" },
    { name: "DevOps" },
    { name: "Database" },
    { name: "Tools" },
];

export default function SkillsSection() {
    const [selected, setSelected] = useState("Languages"); // Default to "Languages"

    return (
        <div className="flex flex-col md:flex-row min-h-[85vh] w-screen p-4">
            {/* Main Content Area */}
            <div className="flex-1 p-8 rounded-lg flex flex-col items-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-full text-center text-cream"
                    style={{fontFamily: "'Josefin Sans', sans-serif"}}>
                    My Skills
                </h1>

                {/* Skills Buttons - Improved Responsiveness */}
                <div className="flex gap-3 mt-8 w-full justify-center flex-wrap">
                    {skills.map((skill, index) => (
                        <button
                            key={index}
                            className={`px-5 py-3 rounded-lg text-lg font-semibold text-[#6a0dad] border-[#6a0dad] border flex items-center gap-2 bg-black transition-all duration-300 hover:scale-105 hover:border-#6a0dad cursor-pointer hover:shadow-md hover:shadow-[#6a0dad]/50 min-w-[120px] sm:min-w-[140px] md:min-w-[200px]`}
                            onClick={() => setSelected(skill.name)}
                        >
                            {skill.name}
                        </button>
                    ))}
                </div>
                {/* Display Images - Responsive Grid and Black Background */}
                <div id="image-container" className="flex justify-center mt-6 w-full bg-black rounded-lg py-6">
                    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 h-auto`}>
                        {sampleImages[selected]?.slice(0, 6).map((image, index) => (
                            <div key={index} className="flex flex-col items-center justify-center">
                                <img
                                    src={image.url}
                                    alt={`Image ${index + 1}`}
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                                <p className="mt-2 text-white text-sm sm:text-base font-medium bg-gradient-to-b from-[#9b59b6] to-[#6a0dad] text-white p-1 sm:p-2 rounded-md text-center">
                                    {image.label}
                                </p>
                            </div>
                        ))}
                        {sampleImages[selected]?.length > 6 && (
                            <p className="text-gray-700 text-center col-span-2 sm:col-span-3">Showing the first 6
                                items.</p>
                        )}
                        {!sampleImages[selected] && (
                            <p className="text-gray-700 text-center col-span-2 sm:col-span-3">No skills to display in
                                this category yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}