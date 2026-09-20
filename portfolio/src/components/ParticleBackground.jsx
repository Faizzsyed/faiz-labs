import { useContext, useEffect, useState, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { AccentContext } from "../context/AccentContext";

const accentColors = {
  cyan: "#00E5FF",
  violet: "#8B5CF6",
  emerald: "#22C55E",
  rose: "#FF4D8D",
};

function ParticleBackground() {
  const { accent } = useContext(AccentContext);
  const [isMobile, setIsMobile] = useState(false);
  const [particlesInitError, setParticlesInitError] = useState(false);

  useEffect(() => {
    // Detect mobile / touch for reduced particles & interactions
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 || 
        window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(hover: none)").matches
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const particlesInit = async (engine) => {
    try {
      await loadSlim(engine);
    } catch (e) {
      console.error("Particles initialization failed", e);
      setParticlesInitError(true);
    }
  };

  const options = useMemo(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    return {
      background: {
        color: "#050816",
      },
      fpsLimit: isMobile ? 30 : 60,
      particles: {
        number: {
          value: isMobile ? 25 : 60,
        },
        color: {
          value: accentColors[accent] || "#00E5FF",
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
        },
        size: {
          value: { min: 1, max: 2 },
        },
        links: {
          enable: true,
          color: accentColors[accent] || "#00E5FF",
          opacity: 0.15,
          distance: 150,
        },
        move: {
          enable: !prefersReducedMotion,
          speed: isMobile ? 0.5 : 1,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: !isMobile, // Disable on mobile/touch
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: { opacity: 0.5 }
          }
        }
      },
      detectRetina: true,
    };
  }, [accent, isMobile]);

  if (particlesInitError) {
    return <div style={{ background: "#050816", width: "100%", height: "100%", position: "absolute", zIndex: -1, top: 0, left: 0 }} />;
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={(container) => {}}
      init={particlesInit}
      options={options}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}

export default ParticleBackground;