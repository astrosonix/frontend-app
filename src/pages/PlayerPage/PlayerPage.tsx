import {useEffect, useLayoutEffect, useRef, useState} from "react";
import WaveSurfer from "wavesurfer.js";
import * as Slider from '@radix-ui/react-slider';
import {
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    PauseIcon,
    PlayIcon,
    RotateCounterClockwiseIcon
} from '@radix-ui/react-icons'
import styles from './styles/PlayerPage.module.css'
import {createImageSequenceImageUrl, predefinedImageSequences} from "../../data/predefinedImageSequences.ts";

const directions = [
    {
        label: 'To right',
        icon: ArrowRightIcon,
        iconClassName: 'text-primary'
    },
    {
        label: 'To left',
        icon: ArrowLeftIcon
    },
    {
        label: 'To top',
        icon: ArrowUpIcon
    },
    {
        label: 'To bottom',
        icon: ArrowDownIcon
    },
    {
        label: 'Clockwise',
        icon: RotateCounterClockwiseIcon,
        iconClassName: 'transform'
    },
    {
        label: 'Counterclockwise',
        icon: RotateCounterClockwiseIcon
    },
]

const PlayerPage = () => {
    const waveSurferRef = useRef<WaveSurfer>()
    const playerContainerRef = useRef<HTMLDivElement>(null)
    const overlaysSliderRef = useRef<HTMLDivElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentImageProgress, setCurrentImageProgress] = useState(0)
    const currentImageSequence = predefinedImageSequences[0]
    let rangeToImageMapping = [
        {
            start: 0,
            end: 5,
            imageUrl: createImageSequenceImageUrl(currentImageSequence, 1)
        },
        {
            start: 5,
            end: 8,
            imageUrl: createImageSequenceImageUrl(currentImageSequence, 2)
        },
        {
            start: 8,
            end: 12,
            imageUrl: createImageSequenceImageUrl(currentImageSequence, 3)
        }
    ]
    rangeToImageMapping = rangeToImageMapping.reverse()

    const [currentRange, setCurrentRange] = useState(rangeToImageMapping[0])


    const imageSrc = currentRange.imageUrl


    useLayoutEffect(() => {
        if(!waveSurferRef.current) {
            waveSurferRef.current = WaveSurfer.create({
                container: playerContainerRef.current,
                waveColor: '#9E76FB',
                progressColor: '#383351',
                url: '/assets/music/sample-audio.mp4',
            })
            waveSurferRef.current?.on('play', () => setIsPlaying(true))
            waveSurferRef.current?.on('pause', () => setIsPlaying(false))
            waveSurferRef.current?.on('timeupdate', (currentTime) => {
               const newRange = rangeToImageMapping.find(r => currentTime >= r.start)
                if(newRange) {
                    setCurrentRange(newRange)
                    // console.log((currentTime - r.start) / (r.end - r.start) * 100)
                    setCurrentImageProgress((currentTime - newRange.start) / (newRange.end - newRange.start) * 100)
                }
            })
            window.addEventListener('keyup', e => {
                if(e.code === 'Space' && waveSurferRef.current)
                    waveSurferRef.current?.playPause()
            })
        }
    }, [])
    const handlePlayPause = () => {
        waveSurferRef.current?.playPause()
    }
    return (
        <div className="h-screen relative bg-dark" style={{
               zIndex: 10
           }}>
            <div className="absolute top-0 left-0 w-full h-full opacity-40 overflow-hidden">
                <img
                    src={imageSrc}
                    alt=""
                    className={[
                        isPlaying ? styles.rotatingMusicBg : styles.musicBg
                    ].join(' ')} style={{zIndex:-20}}/>
            </div>
            <div className="relative h-full grid md:grid-cols-5"  style={{
                backdropFilter: 'blur(40px)',
            }}>
           <div className="h-screen md:h-full md:col-span-3 flex flex-col">
                <div className="mt-20">
                    <div className="relative aspect-video md:w-3/4 mx-auto overflow-hidden">
                        <div
                            style={{
                                left: `${currentImageProgress}%`,
                                backdropFilter: 'blur(5px)'
                            }}
                            className="w-[2px] bg-white/30 h-full absolute z-10 transition"></div>
                        <img
                            src={imageSrc}
                            alt=""
                            className="rounded"/>
                    </div>

                </div>
               <div className="w-4/5 mx-auto mt-20">
                   <div className="px-10 py-5 bg-dark/20 rounded-lg">
                       <div className="flex items-center">
                           <div className="">
                               <h3 className="text-xl font-primary">
                                   Sounds of space
                               </h3>
                               <span className="">inspired by Hans Zimmer</span>
                           </div>
                           <div className="ml-5 flex items-center">
                               <button
                                   onClick={handlePlayPause}
                                   type="button" className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-dark">
                                   {
                                       isPlaying ? (
                                           <PauseIcon className="w-6 h-6" />
                                       ) : (
                                           <PlayIcon className="w-6 h-6" />
                                       )
                                   }
                               </button>
                           </div>
                       </div>
                       <div className="mt-10" ref={playerContainerRef}></div>
                   </div>
               </div>
               </div>
            <div className="bg-dark/20 border-l border-primary/20 px-5 py-10 md:col-span-2">
                <div className="md:w-3/4 mx-auto">
                    <span className="text-xl text-center block">Additional settings</span>
                    <span className="mt-5 text-lg text-center block text-white/80">Heuristic overlays direction</span>
                    <div className="mt-5 grid grid-cols-2 gap-5">
                        {
                            directions.map(({icon: DirectionIcon, iconClassName, label}) => (
                                <div className="">
                                    <div className="flex items-center justify-center">
                                        <button type="button" disabled className="cursor-not-allowed w-12 h-12 flex items-center justify-center border rounded border-white/30" type="button">
                                    <span className="flex items-center justify-center">
                                        <DirectionIcon className={`w-10 h-10 text-white/80 ${iconClassName ? iconClassName : ''}`} />
                                    </span>
                                        </button>
                                    </div>
                                    <span className="text-center block text-white/80 text-sm mt-1">
                                    {label}
                                </span>
                                </div>
                            ))
                        }
                    </div>
                    <span className="mt-10 text-lg text-center block text-white/80">Audio equalizer</span>

                    <div className="mt-5 grid grid-cols-6">
                        {new Array(6).fill(null).map(() => (
                            <div className="flex justify-center">
                                <Slider.Root
                                    className="relative flex items-center select-none touch-none w-1 h-20 cursor-not-allowed"
                                    defaultValue={[50]}
                                    max={100}
                                    step={1}
                                    disabled
                                    orientation="vertical"
                                >
                                    <Slider.Track className="bg-gray-600 relative grow rounded-full w-[3px] h-full">
                                        <Slider.Range className="absolute bg-primary rounded-full w-full" />
                                    </Slider.Track>
                                    <Slider.Thumb
                                        className="block w-5 h-5 bg-white rounded-[10px] hover:bg-white  transform -translate-x-1/3"
                                        aria-label="Volume"
                                    />
                                </Slider.Root>
                            </div>
                        ))}
                    </div>
                    <span className="mt-10 text-lg text-center block text-white/80">Share</span>

                    <span className="block text-center mt-5 px-4 py-2 bg-white/10 rounded-lg text-sm md:text-lg">audiosonix.ai/sound/jsnx7xu3c54</span>

                    <span className="block text-center mt-5 px-4 py-2 bg-white/10 rounded-lg text-sm">
                    Check out my latest tune crafted from the image of Galaxy X using AudioSonix at
                    audiosonix.ai/sound/jsnx7xu3c54
                </span>
                    <span className="mt-5 text-base text-center block text-white/80">Post on</span>
                    <span className="mt-5 text-base text-center block text-white/80">
                    TikTok, Instagram, Snapchat, X, Facebook
                </span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerPage
