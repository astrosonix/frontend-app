import {
    ComposerInspiration,
    composerInspirations,
    MovieInspiration,
    movieInspirations
} from '../../data/inspirations.ts'
import imdbLogo from '../../assets/img/imdb-logo.png'
import {Controller} from "react-hook-form";
import {BaseImage, baseImagery} from "../../data/baseImagery.ts";
import {
    createImageSequenceImageUrl,
    PredefinedImageSequence,
    predefinedImageSequences
} from "../../data/predefinedImageSequences.ts";

const isImageSequenceActive = (imageSequence: PredefinedImageSequence, value) => {
    return value && value.slug === imageSequence.slug
}

export const ImagesGrid = ({control}) => {
    return (
        <Controller control={control} name="baseImage" render={({field: {onChange, value}}) => (
            <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    predefinedImageSequences.map(imageSequence => (
                        <div className="flex justify-center">
                            <button
                                type="button"
                                onClick={() => {
                                    if(isImageSequenceActive(imageSequence, value))
                                        onChange(null)
                                    else
                                        onChange(imageSequence)
                                }}
                                className={[
                                    "relative mx-10 first:ml-0 last:mr-0 border-2 rounded transition",
                                    isImageSequenceActive(imageSequence, value) ? 'border-primary shadow-lg shadow-primary/50' : 'border-transparent'
                                ].join(' ')}>
                                <div className="absolute top-1 right-1">
                                    <span className="inline-block bg-dark/40 rounded">
                                        n=24
                                    </span>
                                </div>
                                <img
                                    src={createImageSequenceImageUrl(imageSequence, 1)}
                                    alt=""
                                    className="rounded h-full object-cover"/>
                                <div className="absolute bottom-0 left-0 w-full">
                                    <div className="px-5 py-2 bg-dark/70" style={{
                                        backdropFilter: 'blur(5px)'
                                    }}>
                                        <span className="text-lg block text-center font-primary">{imageSequence.name}</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    ))
                }
            </div>
        )} />
    )
}
