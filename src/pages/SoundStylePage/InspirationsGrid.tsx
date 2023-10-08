import {
    ComposerInspiration,
    composerInspirations,
    MovieInspiration,
    movieInspirations
} from '../../data/inspirations.ts'
import imdbLogo from '../../assets/img/imdb-logo.png'
import {Controller} from "react-hook-form";
const createInspirationImageUrl = (filepath: string) => {
    return `/assets/img/inspirations/${filepath}`
}

const isComposerActive = (composer: ComposerInspiration, value) => {
    return value && value.inspirationType === 'composer' && value.composer.slug === composer.slug
}

export const ComposerInspirationsGrid = ({control}) => {
    return (
        <Controller control={control} name="inspiration" render={({field: {onChange, value}}) => (
            <div className="mt-2 flex">
                {
                    composerInspirations.map(composer => (
                        <button
                            type="button"
                            onClick={() => {
                                if(isComposerActive(composer, value))
                                    onChange(null)
                                else
                                    onChange({
                                        inspirationType: 'composer',
                                        composer
                                    })
                            }}
                            className={[
                                "relative w-60 mx-10 first:ml-0 last:mr-0 border-2 rounded transition",
                                isComposerActive(composer, value) ? 'border-primary shadow-lg shadow-primary/50' : 'border-transparent'
                            ].join(' ')}>
                            <img
                                src={createInspirationImageUrl(composer.imagePath)}
                                alt=""
                                className="rounded h-full object-cover"/>
                            <div className="absolute bottom-0 left-0 w-full">
                                <div className="px-5 py-2 bg-dark/70" style={{
                                    backdropFilter: 'blur(5px)'
                                }}>
                                    <span className="text-lg block text-center font-primary">{composer.name}</span>
                                </div>
                            </div>
                        </button>
                    ))
                }
            </div>
        )} />
    )
}

const isMovieActive = (movie: MovieInspiration, value) => {
    return value && value.inspirationType === 'movie' && value.movie.slug === movie.slug
}

export const MoviesInspirationsGrid = ({control}) => {
    return (
        <Controller control={control} name="inspiration" render={({field: {onChange, value}}) => (
            <div className="mt-2 flex">
                {
                    movieInspirations.map(movie => (
                        <button
                            type="button"
                            onClick={() => {
                                console.log(movie, value)
                                if(isMovieActive(movie, value))
                                    onChange(null)
                                else
                                    onChange({
                                        inspirationType: 'movie',
                                        movie
                                    })
                            }}
                            className={[
                                "relative w-60 mx-10 first:ml-0 last:mr-0 border-2 rounded transition",
                                isMovieActive(movie, value) ? 'border-primary shadow-lg shadow-primary/50' : 'border-transparent'
                            ].join(' ')}>
                            <div className="absolute top-2 right-2">
                                <img src={imdbLogo} className="w-10" alt=""/>
                            </div>
                            <img
                                src={createInspirationImageUrl(movie.posterImgPath)}
                                alt=""
                                className="rounded h-full object-cover"/>
                            <div className="absolute bottom-0 left-0 w-full">
                                <div className="px-5 py-2 bg-dark/70" style={{
                                    backdropFilter: 'blur(5px)'
                                }}>
                                    <span className="text-lg block text-center font-primary">{movie.name}</span>
                                    <span className="mt-2 text-sm block text-center">♫ {movie.composer}</span>
                                    <span className="mt-1 text-xs block text-center">🎥 {movie.director}</span>
                                </div>
                            </div>
                        </button>
                    ))
                }
            </div>
        )} />
    )
}
