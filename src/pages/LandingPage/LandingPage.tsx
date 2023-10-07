import heroBg from '../../assets/img/hero-bg.jpg'
import soundWave1Animation from '../../assets/animations/audio-wave1-lottie.json'
import Lottie from "lottie-react";
const LandingPage = () => (
    <>
        <nav className="fixed top-0 left-0 w-full z-10 px-10 py-5 flex items-center justify-between">
            <span className="font-primary">
                AudioSight
            </span>
            <div className="flex">
                <ul className="flex items-center mr-5">
                    <li className="mx-5">About us</li>
                    <li className="mx-5">Features</li>
                </ul>
                <button className="border-2 border-[#9E76FB] px-4 py-2 rounded-3xl font-bold">
                    Use the app
                </button>
            </div>
        </nav>
        <div className="relative h-full">

            <img src={heroBg} className="absolute" style={{
                zIndex: 2,
                mixBlendMode: 'hard-light',
                opacity: 0.2
            }} alt=""/>
            <div className="absolute top-36 left-1/2 transform -translate-x-1/2">
                <div className="w-5/6 mx-auto">
                    <h1 className="font-primary text-6xl text-center">
                        <span className="block">Transforming visuals</span>
                        <span className="block">into hi-res sound experiences</span>
                    </h1>
                    <h2 className="text-xl text-center mt-6 whitespace-pre-wrap leading-relaxed">
                        Meet <span className="font-primary mx-2">AudioSight</span>
                        <br />
                        the accessible technology allowing you <wbr /> to uncover the hidden tunes of space and art
                    </h2>
                    <div className="mt-20 relative">
                        <Lottie
                            animationData={soundWave1Animation}
                            className="absolute w-full top-0 left-1/2 transform -translate-x-1/2"
                            style={{
                                opacity: 0.7,
                                zIndex: -5
                            }}
                            loop={true} />
                        <div className="flex items-center justify-center">
                            <div className="">
                                <button
                                    style={{
                                        background: 'linear-gradient(to right, #9E76FB, #3A71F9)'
                                    }}
                                    className="text-lg px-4 py-2 rounded-3xl font-bold">
                                    Use the app
                                </button>
                                <button className="text-lg ml-4 border-2 border-[#9E76FB] px-4 py-2 rounded-3xl font-bold">
                                    See how it works
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>


)

export default LandingPage
