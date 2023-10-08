import {
    ComposerInspiration,
    composerInspirations,
    MovieInspiration,
    movieInspirations
} from '../../data/inspirations.ts'
import imdbLogo from '../../assets/img/imdb-logo.png'
import {Controller} from "react-hook-form";
import {BaseImage, baseImagery} from "../../data/baseImagery.ts";
const createBaseImageUrl = (filepath: string) => {
    return `/assets/img/base-imagery/${filepath}`
}

const isImageActive = (baseImage: BaseImage, value) => {
    return value && value.imgPath === baseImage.imgPath
}

export const ImagesGrid = ({control}) => {
    return (
        <Controller control={control} name="baseImage" render={({field: {onChange, value}}) => (
            <div className="mt-2 grid grid-cols-1 md:grid-cols-5 gap-10">
                {
                    baseImagery.map(image => (
                        <div className="flex justify-center">
                            <button
                                type="button"
                                onClick={() => {
                                    if(isImageActive(image, value))
                                        onChange(null)
                                    else
                                        onChange(image)
                                }}
                                className={[
                                    "relative w-60 mx-10 first:ml-0 last:mr-0 border-2 rounded transition",
                                    isImageActive(image, value) ? 'border-primary shadow-lg shadow-primary/50' : 'border-transparent'
                                ].join(' ')}>
                                <img
                                    src={createBaseImageUrl(image.imgPath)}
                                    alt=""
                                    className="rounded h-full object-cover"/>
                                <div className="absolute bottom-0 left-0 w-full">
                                    <div className="px-5 py-2 bg-dark/70" style={{
                                        backdropFilter: 'blur(5px)'
                                    }}>
                                        <span className="text-lg block text-center font-primary">{image.name}</span>
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
