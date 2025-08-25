import React from 'react'

const Contact = () => {
    return (
        <section id = "contact" className="c-space my-20">
            <p className="head-text" style={{marginBottom: '20px'}}>
                Contact Me
            </p>
            <div className="flex justify-center items-center">
                <div className="grid-container w-full h-full inline-block">
                    <div className="flex items-center">
                        <img src="/assets/mail.png" alt="email" className="w-12 h-12"/>
                        <a href="mailto:davidhkim04@gmail.com"
                           className="grid-headtext ml-5 text-lg text-gray-300 hover:text-rose-300 flex-grow">
                            davidhkim04@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center">
                        <img src="/assets/linkedin.png" alt="linkedin" className="w-12 h-12"/>
                        <a href="https://www.linkedin.com/in/david-hyun-kim" target = "_blank"
                           className="grid-headtext ml-5 text-lg text-gray-300 hover:text-yellow-400 flex-grow">
                            LinkedIn
                        </a>
                    </div>
                    <div className="flex items-center">
                        <img src="/assets/github.svg" alt="github" className="w-12 h-12"/>
                        <a href="https://github.com/bincha2" target="_blank"
                           className="grid-headtext ml-5 text-lg text-gray-300 hover:text-blue-400 flex-grow">
                            GitHub (More Projects Here!)
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
