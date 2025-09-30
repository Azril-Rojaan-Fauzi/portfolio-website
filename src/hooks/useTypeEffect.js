import { useEffect, useState } from "react";
import { heroData } from "../data/hero";

const useTypeEffect = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isDelay, setIsDelay] = useState(false);

  const { roles } = heroData;

  useEffect(() => {
    const timer = setTimeout(() => setIsDelay(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isDelay) return;

    const currentRole = roles[currentTextIndex];

    if (!isDeleting) {
      if (currentText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(100);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(150);
      }
    }
  }, [currentText, currentTextIndex, isDeleting, typingSpeed, roles, isDelay]);

  return { currentText };
};

export default useTypeEffect;
