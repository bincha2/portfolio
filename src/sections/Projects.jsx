import React from 'react'
import {myProjects} from "../constants/index.js";

const Projects = () => {
    return (
        <section id = "projects" className="c-space my-20">
            <p className="head-text">
                Projects
            </p>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">

                {/*project 1*/}
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={myProjects[0].spotlight} alt="spotlight"
                             className="w-full h-96 object-cover rounded-xl"/>
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
                         style={myProjects[0].logoStyle}>
                        <img src={myProjects[0].logo} alt="logo" className="w-20 h-20"/>
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">
                            {myProjects[0].title}
                        </p>
                        <p className="animatedText">
                            {myProjects[0].award}
                        </p>
                        <p className="animatedText">
                            {myProjects[0].desc}
                        </p>
                        <p className="animatedText">
                            {myProjects[0].subdesc}
                        </p>
                    </div>

                    <div className="flex items-center justify-between flex-wrapgap-5">
                        <div className="flex items-center gap-3">
                            {myProjects[0].tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/*project 2*/}
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={myProjects[1].spotlight} alt="spotlight"
                             className="w-full h-96 object-cover rounded-xl"/>
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
                         style={myProjects[1].logoStyle}>
                        <img src={myProjects[1].logo} alt="logo" className="w-20 h-20"/>
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">
                            {myProjects[1].title}
                        </p>
                        <p className="animatedText">
                            {myProjects[1].desc}
                        </p>
                        <p className="animatedText">
                            {myProjects[1].subdesc}
                        </p>
                    </div>

                    <div className="flex items-center justify-between flex-wrapgap-5">
                        <div className="flex items-center gap-3 absolute bottom-9">
                            {myProjects[1].tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/*project 3*/}
                {/*<div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">*/}
                {/*    <div className="absolute top-0 right-0">*/}
                {/*        <img src={myProjects[2].spotlight} alt="spotlight"*/}
                {/*             className="w-full h-96 object-cover rounded-xl"/>*/}
                {/*    </div>*/}

                {/*    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"*/}
                {/*         style={myProjects[2].logoStyle}>*/}
                {/*        <img src={myProjects[2].logo} alt="logo" className="w-20 h-20"/>*/}
                {/*    </div>*/}

                {/*    <div className="flex flex-col gap-5 text-white-600 my-5">*/}
                {/*        <p className="text-white text-2xl font-semibold animatedText">*/}
                {/*            {myProjects[2].title}*/}
                {/*        </p>*/}
                {/*        <p className="animatedText">*/}
                {/*            {myProjects[2].desc}*/}
                {/*        </p>*/}
                {/*        <p className="animatedText">*/}
                {/*            {myProjects[2].subdesc}*/}
                {/*        </p>*/}
                {/*    </div>*/}

                {/*    <div className="flex items-center justify-between flex-wrapgap-5">*/}
                {/*        <div className="flex items-center gap-3 absolute bottom-9">*/}
                {/*            {myProjects[2].tags.map((tag, index) => (*/}
                {/*                <div key={index} className="tech-logo">*/}
                {/*                    <img src={tag.path} alt={tag.name}/>*/}
                {/*                </div>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*project 4*/}
                {/*<div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">*/}
                {/*    <div className="absolute top-0 right-0">*/}
                {/*        <img src={myProjects[3].spotlight} alt="spotlight"*/}
                {/*             className="w-full h-96 object-cover rounded-xl"/>*/}
                {/*    </div>*/}

                {/*    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"*/}
                {/*         style={myProjects[3].logoStyle}>*/}
                {/*        <img src={myProjects[3].logo} alt="logo" className="w-20 h-20"/>*/}
                {/*    </div>*/}

                {/*    <div className="flex flex-col gap-5 text-white-600 my-5">*/}
                {/*        <p className="text-white text-2xl font-semibold animatedText">*/}
                {/*            {myProjects[3].title}*/}
                {/*        </p>*/}
                {/*        <p className="animatedText">*/}
                {/*            {myProjects[3].desc}*/}
                {/*        </p>*/}
                {/*        <p className="animatedText">*/}
                {/*            {myProjects[3].subdesc}*/}
                {/*        </p>*/}
                {/*    </div>*/}

                {/*    <div className="flex items-center justify-between flex-wrapgap-5">*/}
                {/*        <div className="flex items-center gap-3 ">*/}
                {/*            {myProjects[3].tags.map((tag, index) => (*/}
                {/*                <div key={index} className="tech-logo">*/}
                {/*                    <img src={tag.path} alt={tag.name}/>*/}
                {/*                </div>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
)
}
export default Projects
