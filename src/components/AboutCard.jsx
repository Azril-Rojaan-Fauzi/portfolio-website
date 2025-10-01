const AboutCard = () => {
  return (
    <div className="grid-default-color grid-1 flex items-end">
      <img
        src="assets/coding-pov.png"
        alt="coding"
        className="absolute -top-[1rem] -right-[5rem] scale-[1.75] md:inset-y-10 md:scale-[3] lg:scale-[2] xl:left-50"
      />
      <div className="z-10">
        <p className="headtext">Hi, I'm Azril Rojaan Fauzi</p>
        <p className="subtext">
          an Informatics student and Front-End Developer. I love building clean,
          interactive, and responsive websites.
        </p>
        <div className="sm:1/3 pointer-events-none absolute inset-x-0 -bottom-4 h-1/2" />
      </div>
    </div>
  );
};

export default AboutCard;
