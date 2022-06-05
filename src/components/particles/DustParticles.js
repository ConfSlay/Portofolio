import React, { useCallback } from "react"; //JSX
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";


export default function DustParticles(props: unknown) {
  // this customizes the component tsParticles installation
  const customInit = useCallback(async (engine: Engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  });

  const options = require("./dust.json");
  
  return <Particles options={options} init={customInit} />;
}