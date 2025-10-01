import { useRef } from "react";
import Card from "./Card";

const HobbyCard = () => {
  const grid2Container = useRef();
  return (
    <div className="grid-default-color grid-2">
      <div
        ref={grid2Container}
        className="flex h-full w-full items-center justify-center"
      >
        <p className="flex items-end text-5xl text-gray-500">HOBBY</p>
        <Card
          style={{ rotate: "10deg", top: "30%", left: "0%" }}
          text="CODING"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "-25deg", top: "60%", left: "40%" }}
          text="GAMING"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "30deg", top: "30%", left: "70%" }}
          text="WORKOUT"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "30deg", top: "60%", left: "10%" }}
          image="assets/logos/React-logo.png"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "30deg", top: "30%", left: "70%" }}
          image="assets/logos/stardew-logo.png"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "30deg", top: "10%", left: "40%" }}
          image="assets/logos/valorant-logo.png"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "30deg", top: "70%", left: "80%" }}
          image="assets/logos/Javascript-logo.png"
          containerRef={grid2Container}
        />
      </div>
    </div>
  );
};

export default HobbyCard;
