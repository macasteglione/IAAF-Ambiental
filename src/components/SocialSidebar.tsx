import { Instagram, Linkedin } from "lucide-react";

const SocialSidebar = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/iaafambiental",
      icon: Instagram,
      color: "hover:text-[#E1306C]",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/iaaf-ambiental",
      icon: Linkedin,
      color: "hover:text-[#0A66C2]",
    },
  ];

  return (
    <div className="fixed right-6 top-1/3 z-40 hidden lg:block">
      <div className="flex flex-col gap-3 bg-white/80 backdrop-blur-sm rounded-full py-3 px-2 shadow-md">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative w-9 h-9 flex items-center justify-center
                text-gray-600 rounded-full
                transition-all duration-200 ease-in-out
                ${social.color}
                hover:scale-110 hover:bg-gray-100
              `}
              aria-label={`Visitar ${social.name} de IAAF Ambiental`}
              title={social.name}
            >
              <IconComponent className="h-5 w-5" strokeWidth={2} />
              
              {/* Tooltip */}
              <span className="
                absolute right-full mr-3 px-2.5 py-1
                bg-gray-900 text-white text-xs font-medium
                rounded whitespace-nowrap
                opacity-0 group-hover:opacity-100
                transition-opacity duration-200
                pointer-events-none
              ">
                {social.name}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialSidebar;
