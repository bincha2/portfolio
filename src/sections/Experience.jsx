import React from 'react'

const Experience = () => {
    return (
        <section id = "experience" className="c-space my-20 ">
            <p className="head-text" style={{marginBottom: '20px'}}>
                Experience
            </p>
            <div className="flex justify-center items-center">
                <div className="grid-container w-full h-full inline-block">
                    {/*experience 1*/}
                    <div className="flex items-center">
                        <img src="/assets/rbvillage.webp" alt="rubberband vilalge logo" className="w-12 h-12"/>
                        <span className="grid-headtext ml-5 text-lg text-white-800 flex-grow">
                            Software Engineer Intern - Rubberband Village
                        </span>
                        <span className="text-gray-400 italic text-right">
                             <time dateTime="2024-10-01">February 2025 - Present </time>
                         </span>
                    </div>
                    <p className="grid-subtext text-white-800">
                        • Working alongside Hope Through Healing Publications transitioning physical hospice products into digital flippingbooks while improving analytics and user experience
                    </p>
                    {/*experience 2*/}
                    <div className="flex items-center">
                        <img src="/assets/cseeduw_logo.jfif" alt="cseed uw logo" className="w-12 h-12"/>
                        <span className="grid-headtext ml-5 text-lg text-white-800 flex-grow">
                            Software Engineer Fellow - cseed
                        </span>
                        <span className="text-gray-400 italic text-right">
                             <time dateTime="2024-10-01">October - December 2024</time>
                         </span>
                    </div>
                    <p className="grid-subtext text-white-800">
                        • Building CueZine, a tinder style food finding application to assist indecisive eaters
                    </p>
                    {/*experience 3*/}
                    <div className="flex items-center">
                        <img src="/assets/hclogo-white.png" alt="hc logo" className="w-12 h-5"/>
                        <span className="grid-headtext ml-5 text-lg text-white-800 flex-grow">
                            Vice President - Highline Computer Science Club
                        </span>
                        <span className="text-gray-400 italic text-right">
                             <time dateTime="2022-10-01">October 2022 - June 2023</time>
                         </span>
                    </div>
                    <p className="grid-subtext text-white-800">
                        • Organized Highline’s first in-person hackathon since 2020 for 30+ participants, overseeing logistics, venue setup and
                        sponsorships
                        <br/>
                        • Grew club membership by over 50%, increasing Discord community to 100+ members and boosting in-person participation
                        to 20+ members through targeted outreach and regular career-driven events
                        <br/>
                        • Delivered weekly workshops on Git/Github, data structures, and various coding challenges for 20+ members, strengthening
                        technical skills across the club
                    </p>
                    {/*experience 4*/}
                    <div className="flex items-center">
                        <img src="/assets/gen.png" alt="gen logo" className="w-10 h-10"/>
                        <span className="grid-headtext ml-5 text-lg text-white-800 flex-grow">
                            Server - Gen Korean BBQ
                        </span>
                        <span className="text-gray-400 italic text-right">
                             <time dateTime="2020-6-01">June 2020 - Present</time>
                         </span>
                    </div>
                    <p className="grid-subtext text-white-800">

                        • 5+ year of serving experience at various locations, with excellent customer service skills, sales, time management, and leadership while balancing full-time cs coursework, internship, and employment
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Experience
