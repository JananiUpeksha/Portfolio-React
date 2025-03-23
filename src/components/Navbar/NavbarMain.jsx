import NavbarLogo from "./NavbarLogo.jsx";
import NavbarLinks from "./NavbarLinks.jsx";
import NavbarBtn from "./NavbarBtn.jsx";
import NavbarToggler from "./NavbarToggler.jsx";
import { useSelector } from "react-redux";

const NavbarMain = () => {
    const menuOpen = useSelector((state) => state.menu.menuOpen);

    return (
        <nav className="max-w-[1700px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
            <div className="flex justify-between w-full max-w-[1600px] mx-auto bg-black items-center p-6 rounded-r-3xl rounded-l-3xl border-darkCream border-[1.5px]">
                <NavbarLogo />
                <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
                    <NavbarLinks />
                </div>
                <NavbarBtn />
            </div>
            <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-3xl border-orange border-[1.5px]">
                <NavbarToggler />
            </div>
        </nav>
    );
};

export default NavbarMain;
