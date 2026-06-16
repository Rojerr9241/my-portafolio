import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail, SiCredly } from "react-icons/si";

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
        name: "Email",
        icon: <SiGmail className="size-5" />,
        url: "mailto:rodrigo.negretejuarez@gmail.com"
    },
    {
        name: "Credly",
        icon: <SiCredly className="size-5" />,
        url: "https://www.credly.com/users/rodrigo-negrete-juarez"
    },
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