const HeroGradient = () => {
    return (
        <div>
            {/* Royal Purple Gradient Shadow - Positioned Top Left, Increased Size */}
            <div className="shadow-[0px_0px_600px_300px_rgba(106,13,173,1)] absolute top-0 left-0 -z-10 animate-pulse"></div>

            {/* Purple Gradient Shadow - Positioned Right, Increased Size */}
            <div className="shadow-[0px_0px_750px_375px_rgba(155,89,182,0.9)] absolute top-[20%] right-0 -z-10 opacity-80"></div>

            {/* Dark Cream Gradient Shadow - Positioned Right, Increased Size */}
            <div className="shadow-[0px_0px_600px_300px_rgba(209,193,138,0.8)] absolute top-[40%] right-0 -z-10 animate-pulse"></div>

            {/* Cream Gradient Shadow - Positioned Left, Increased Size */}
            <div className="shadow-[0px_0px_750px_375px_rgba(249,243,210,0.8)] absolute bottom-[10%] left-0 -z-10 opacity-70"></div>

            {/* Additional Shadow - Positioned Top Left, Increased Size */}
            <div className="shadow-[0px_0px_600px_300px_rgba(106,13,173,1)] absolute top-[50%] left-[30%] -z-10 animate-pulse"></div>
        </div>
    );
};

export default HeroGradient;
