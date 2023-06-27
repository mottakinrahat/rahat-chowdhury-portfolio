
import Particles from "react-tsparticles";
import ParticleConfig from '../ParticleConfig/ParticleConfig';
const ParticleBG = () => {
    return (
        <div>
           <Particles params={ParticleConfig}></Particles> 
        </div>
    );
};

export default ParticleBG;