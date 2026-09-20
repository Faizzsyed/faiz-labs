import { useContext } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { AccentContext } from "../context/AccentContext";

const accentColors = {
  cyan: "#00E5FF",
  violet: "#8B5CF6",
  emerald: "#22C55E",
  rose: "#FF4D8D",
};

function ParticleBackground() {
  const { accent } = useContext(AccentContext);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#050816",
        },

        particles: {
          number: {
            value: typeof window !== 'undefined' && window.innerWidth < 768 ? 30 : 80,
          },

          color: {
            value: accentColors[accent] || "#00E5FF",
          },

          move: {
            enable: true,
            speed: 2,
          },
        },
      }}
    />
  );
}

export default ParticleBackground;