import { useState, FC } from "react";
import * as icon from "react-icons/bs";
import Link from "./Link";

const LinkIcons: FC = () => {
    const [gitHover, setGitHover] = useState<boolean>(false);
    const [discordHover, setDiscordHover] = useState<boolean>(false);
    const [instaHover, setInstaHover] = useState<boolean>(false);
    const [whatsappHover, setWhatsappHover] = useState<boolean>(false);

    return (
        <div className={`flex my:gap-3 text-white flex-col my:flex-row my:items-center my:justify-center mr-2 my:mr-0 my:h-[100px] h-[180px]`} >
            <Link hover={gitHover} setHover={setGitHover} icon={<icon.BsGithub size={28}/>} name="Github" to="https://github.com/spyei"/>
            <Link hover={discordHover} setHover={setDiscordHover} icon={<icon.BsDiscord size={28} fill="#404EED"/>} name="Discord" to="https://discord.com/users/955095844275781693"/>
            <Link hover={instaHover} setHover={setInstaHover} icon={<icon.BsInstagram size={28} fill="#E1306C" />} name="Instagram" to="https://www.instagram.com/caiuwu_"/>
            <Link hover={whatsappHover} setHover={setWhatsappHover} icon={<icon.BsWhatsapp size={28} fill="#20B859" />} name="Whatsapp" to="/"/>
        </div>
    );
};

export default LinkIcons;