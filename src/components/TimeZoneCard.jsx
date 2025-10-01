const TimeZoneCard = () => {
  return (
    <div className="grid-black-color grid-3">
      <div className="z-10 w-full lg:w-[50%]">
        <p className="headtext">Time Zone</p>
        <p className="subtext">
          I am based in Indonesia and available for remote opportunities.
        </p>
      </div>
      <figure className="absolute top-[30%] left-[10%] w-[30rem] lg:top-[10%] lg:left-[40%]">
        <img src="assets/logos/world-logo.png" alt="world" />
      </figure>
    </div>
  );
};

export default TimeZoneCard;
