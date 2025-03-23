import { Link } from 'react-router-dom';  // Add this import
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
    return (
        <button className="px-4 py-2 rounded-full text-xl font-bold font-body text-black border-royalPurple border flex items-center gap-1 bg-gradient-to-r from-cream via-lavender to-royalPurple transition-all duration-500 hover:scale-110 hover:border-cream cursor-pointer hover:shadow-lg hover:shadow-royalPurple/50">
            <Link to="contact">
                Hire Me
            </Link>
            <div className="sm:hidden md:block">
                <LuArrowDownRight />
            </div>
        </button>
    );
}

export default NavbarBtn;
