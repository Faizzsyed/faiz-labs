import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleBackground() {

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
    value: 80,
  },

  color: {
    value: "#00ffff",
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