import {Navigate, useNavigate} from "react-router-dom";
import musicAnimation from '../../assets/animations/music-loaded.json'
import * as Progress from '@radix-ui/react-progress';
import {useEffect, useState} from "react";
import Lottie from "lottie-react";
import soundWave1Animation from "../../assets/animations/audio-wave1-lottie.json";

const phrases = [
    'Tuning the AI orchestra',
    'Sculpting sonic waveforms',
    'Harmonizing the algorithms',
]

const GeneratePage = () => {
    const [progress, setProgress] = useState(13);
    const [isComplete, setIsComplete] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const timeframes = [
            {
                fn: () =>  setProgress(33),
                time: 200
            },
            {
                fn: () =>  setProgress(75),
                time: 500
            },
            {
                fn: () =>  setProgress(100),
                time: 1000
            },
            {
                fn: () =>  setIsComplete(true),
                time: 2000
            },
            {
                fn: () => {
                    navigate('/app/player')
                },
                time: 3500
            }
        ]
        const timers = timeframes.map(({fn, time}) => setTimeout(fn, time))
        return () => {
            timers.forEach(timer => clearTimeout(timer))
        }
    }, []);

    return (
        <div className="w-4/5 mx-auto pt-20 relative">
            {
                isComplete && (
                    <Lottie
                        animationData={musicAnimation}
                        autoplay={true}
                        className="absolute w-96 top-32 left-1/2 transform -translate-x-1/2 h-60"
                        style={{
                            opacity: 0.7,
                            zIndex: 0
                        }}
                        loop={false} />
                )
            }
            <h2
                style={{
                    opacity: isComplete ? 0 : 1
                }}
                className="mt-40 text-4xl text-center font-primary  transition duration-300">
                {phrases[2]}
            </h2>
        <Progress.Root
            className="mt-10 relative overflow-hidden rounded-full w-full h-5 transition duration-300"
            style={{
                // Fix overflow clipping in Safari
                // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                transform: 'translateZ(0)',
                opacity: isComplete ? 0 : 1
            }}
            value={progress}
        >
            <Progress.Indicator
                className="bg-white w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                style={{
                    transform: `translateX(-${100 - progress}%)`,
                    background: 'linear-gradient(to left, #9E76FB, white)'
            }}
            />
        </Progress.Root>
        </div>
    );
};

export default GeneratePage;

// <Navigate to="/app/player" />

