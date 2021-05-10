import React from 'react';

import Particles from 'react-particles-js'
import ParticleConfig from "./config/particle-config"
//import ParticlesBg from 'particles-bg'
export default function ParticleBackground() {
    return (
        /* <Particles  height="100vh" width="100vw" params = {ParticleConfig} className="landing-grid1"/> */
        <Particles
            height="100vh" 
            width="100vw"
            style={{backgroundColor:'blue'}}
            params={{
                "particles": {
                    "number": {
                        "value": 65
                    },
                    "size": {
                        "value": 6
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} /> 
        // <ParticlesBg type="circle"  config={ParticleConfig}/>
    );
}