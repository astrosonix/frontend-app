import heroBg from '../../assets/img/hero-bg.jpg'
import soundWave1Animation from '../../assets/animations/audio-wave1-lottie.json'
import Lottie from "lottie-react";
import {Link} from "react-router-dom";
const LandingPage = () => (
    <>
        <div className="relative h-screen">
            <img src={heroBg} className="absolute top-0 left-0 w-full h-screen object-cover" style={{
                zIndex: 2,
                mixBlendMode: 'hard-light',
                opacity: 0.2
            }} alt=""/>
            <div className="py-36 h-full">
                <div className="w-5/6 mx-auto">
                    <h1 className="font-primary text-3xl md:text-6xl text-center">
                        <span className="block">Transforming visuals</span>
                        <span className="block">into hi-res sound experiences</span>
                    </h1>
                    <h2 className="text-base md:text-xl text-center mt-6 whitespace-pre-wrap leading-relaxed">
                        Meet <span className="font-primary mx-2">AstroSonix</span>
                        <br />
                        the accessible technology allowing you <wbr /> to uncover the hidden tunes of space and art
                    </h2>
                    <div className="pt-20 relative">
                        <Lottie
                            animationData={soundWave1Animation}
                            className="absolute w-full top-32 left-1/2 transform -translate-x-1/2 h-60"
                            style={{
                                opacity: 0.7,
                                zIndex: 0
                            }}
                            loop={true} />
                        <div className="flex items-center justify-center relative z-10">
                            <div className="">
                                <Link to="/app/image-source"
                                    style={{
                                        background: 'linear-gradient(to right, #9E76FB, #3A71F9)'
                                    }}
                                    className="block md:inline-block text-center text-lg px-4 py-2 rounded-3xl font-bold">
                                    Use the app
                                </Link>
                                <a href="#algo"
                                      style={{
                                          scrollBehavior: 'smooth'
                                      }}
                                      className="block md:inline-block text-center text-lg ml-0 mt-4 md:ml-4 md:mt-0 border-2 border-[#9E76FB] px-4 py-2 rounded-3xl font-bold">
                                    See how it works
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="py-20 h-[60vh]" id="algo">
            <div className="w-4/5 mx-auto">
                <h1 className="text-3xl font-primary">Meet our AstroSonix algorithm</h1>
            </div>
        </div>
    </>


)

export default LandingPage
