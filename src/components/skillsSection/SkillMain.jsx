import React from "react";
import TechSkills from "./TechSkills";
import SoftSkills from "./SoftSkills";
import SkillsConstellation from "./SkillsConstellation.jsx";

export default function SkillMain() {
    return (
        <div className="flex flex-col min-h-screen w-screen">
            {/* TechSkills - 80% of viewport height */}
            <div className="flex-1 min-h-[80vh]">
                <SkillsConstellation />
            </div>

            {/* SoftSkills - 20% of viewport height */}
            <div className="min-h-[15vh]">
                <SoftSkills />
            </div>
        </div>
    );
}
