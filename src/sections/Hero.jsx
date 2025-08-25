import React, {Suspense} from 'react'


const Hero = () => {
    return (
        <section id = "home" className="w-full flex flex-col relative">
            <div className="h-screen flex justify-center items-center">
                <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                    <p className="sm:text-3xl text-2xl fond-extrabold text-white-800 text-center font-generalsans">
                        Hey, im David!
                    </p>
                    <p className="hero_tag text-gray_gradient font-generalsans breathe">
                        Software Engineer and Student
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Hero


