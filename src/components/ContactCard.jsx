import React from "react";
import CopyEmailButton from "./CopyEmailButton";

const ContactCard = () => {
  return (
    <div className="grid-special-color grid-4">
      <div className="flex size-full flex-col items-center justify-center gap-4">
        <p className="headtext text-center">Wanna start a project with me?</p>
        <CopyEmailButton />
      </div>
    </div>
  );
};

export default ContactCard;
