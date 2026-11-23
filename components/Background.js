import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Both values must keep a stable identity, so they live outside the component.
const registerParticles = async (engine) => {
  await loadSlim(engine);
};

const options = {
  fullScreen: { enable: false },
  particles: {
    number: { value: 160, density: { enable: false } },
    paint: { color: { value: "#fff" }, fill: { enable: true } },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: { enable: true, speed: 1, sync: false },
    },
    size: { value: { min: 1, max: 4 } },
    links: { enable: false },
    move: {
      enable: true,
      random: true,
      speed: 1,
      direction: "top",
      outModes: "out",
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "bubble" },
    },
    modes: {
      bubble: { distance: 250, duration: 2, size: 0, opacity: 0 },
    },
  },
};

const fill = { position: "absolute", inset: 0 };

export default function Background() {
  return (
    <ParticlesProvider init={registerParticles}>
      <Particles options={options} style={fill} />
    </ParticlesProvider>
  );
}
