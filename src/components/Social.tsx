import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socials = [
    {
        name: "GitHub",
        icon: <FaGithub className="size-5" />,
        url: "https://github.com/Rojerr9241"
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedinIn className="size-5" />,
        url: "https://www.linkedin.com/in/rodrigo-negrete/"
    },
    {
        name: "YouTube",
        icon: <FaYoutube className="size-5" />,
        url: "https://youtube.com"
    },
    {
        name: "Email",
        icon: <SiGmail className="size-5" />,
        url: "mailto:rodrigo.negretejuarez@gmail.com"
    }
];

const Social = ({ containerStyles, iconStyles }: { containerStyles: string; iconStyles: string }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-accent transition-all duration-300 ${iconStyles}`}
                >
                    {item.icon}
                </Link>
            ))}
        </div>
    )
}

export default Social