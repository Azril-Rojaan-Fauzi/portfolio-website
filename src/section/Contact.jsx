import { Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
  const contacts = [
    {
      href: "https://github.com/Azril-Rojaan-Fauzi",
      title: "Github",
      icon: <Github size={20} />,
    },
    {
      href: "https://www.instagram.com/azrilrojan/",
      title: "Instagram",
      icon: <Instagram size={20} />,
    },
    {
      href: "https://www.linkedin.com/in/azril-rojaan-fauzi-199a632a9/",
      title: "Linkedin",
      icon: <Linkedin size={20} />,
    },
  ];
  return (
    <section className="c-space section-spacing flex items-center">
      <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-5 px-5">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-heading" id="contact">
            Let's Work Together
          </h2>
          <p className="text-sm">
            Feel free to reach out for collaborations, projects, or just a
            friendly chat.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-8">
          {contacts.map((contact, index) => (
            <motion.a
              target="_blank"
              whileHover={{ scale: 1.05 }}
              key={index}
              href={contact.href}
              className="flex flex-1 items-center justify-center gap-1 bg-white px-2 py-1 text-black sm:flex-none"
            >
              {contact.icon} {contact.title}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
