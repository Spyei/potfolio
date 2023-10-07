const Link: React.FC<{
    setHover: (value: boolean) => void;
    hover: boolean | undefined;
    name: string;
    icon: React.ReactNode;
    to: string;
}> = ({ setHover, icon, name, hover, to }) => {
    return (
        <a
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="w-[100%] flex gap-2 items-center justify-end transition-all h-[40px] duration-300"
            href={to}
            target="_blank"
        >
            {icon}
            <div className={`transition-all duration-300 text-center  text-neutral-300 hover:text-white ${hover ? "text-[16px] ml-1 my:text-[0px]" : "text-[0px]"}`}>
                {name}
            </div>
        </a>
    )
};

export default Link;