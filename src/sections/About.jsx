import React from 'react'
import Globe from "react-globe.gl";

 


const About = () => {

    return (
        <section id="about" className="c-space my-20">
            <p className="head-text" style={{marginBottom: '20px'}}>
                About
            </p>

            <div className="grid xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="xl:row-span-1 md:row-span-1 row-span-1 flex justify-center items-center">
                    <div className="grid-container w-full h-full">
                        <img src="/assets/DavidIMG.jpg" alt="grid1" className="w-[326px] h-[326px] object-cover rounded-full mx-auto"/>
                        <div className="text-container">
                            <p className="grid-headtext">Who am I</p>
                            <p className="grid-subtext">
                                Sophomore at the University of Washington majoring in Computer Science and Software Engineering, with a minor in Data Science.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="xl:row-span-1 md:row-span-1 row-span-1 flex justify-center items-center">
                    <div className="grid-container w-full h-full">
                        <img src="/assets/techstack.jpg" alt="grid2" className="w-[326px] h-[326px] object-cover bg-transparent mx-auto"/>
                        <div className="text-container">
                            <p className="grid-headtext">Technical Skills</p>
                            <p className="grid-subtext">
                                I am mainly experienced with C++, Python, and JavaScript with knowledge in React and Node.js ecosystems
                            </p>
                        </div>
                    </div>
                </div>
                <div className="xl:row-span-1 md:row-span-1 row-span-1 flex justify-center items-center">
                    <div className="grid-container w-full h-full">
                        <div className="rounded-3xl w-[326px] h-[326px] flex justify-center items-center mx-auto">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

                            />
                        </div>
                        <div className="text-container">
                            <p className="grid-headtext">Based in Seattle, Washington</p>
                            <p className="grid-subtext">I am available in the Greater Seattle Area and am open to any remote work
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
