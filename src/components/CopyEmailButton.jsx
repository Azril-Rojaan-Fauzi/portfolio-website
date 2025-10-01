import { Copy, SquareCheckBig } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "azrilrojaan@gmail.com";

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    <motion.button
      onClick={copyToClipBoard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="bg-primary relative w-[12rem] cursor-pointer overflow-hidden px-1 py-4 text-center text-sm font-extralight"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <SquareCheckBig className="w-5" />
            Email has copied
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Copy className="w-5" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
