import styles from './styles/ImageSourceSelectionPage.module.css'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {ImagesGrid} from "./ImagesGrid.tsx";
import {UploadIcon} from "@radix-ui/react-icons";

const SourceHeading = () => (
    <div className={styles.sourceHeadingWrapper}>
        <span className={styles.sourceHeading}>or</span>
    </div>
)

const createBaseImageUrl = (filepath: string) => {
    return `/assets/img/base-imagery/${filepath}`
}


const ImageSourceSelectionPage = () => {
    const {control} = useForm()
    return (
        <div className="w-4/5 mx-auto pt-20 pb-20 md:pb-0">
            <h1 className="font-primary text-center text-2xl mb-5">Hi 👋, <br/> what image you wish to sonify?</h1>
            <div className="my-10 md:flex justify-center transform md:translate-x-[4ch]">
                <div className="flex justify-center">
                    <button type="button" className="text-lg text-center flex items-center">
                        <UploadIcon className="w-5 h-5 mr-2" />
                        Upload your image
                    </button>
                </div>
                <span className="block md:flex h-full items-center mx-10 text-center my-5 md:my-0">or</span>
                <div className="flex justify-center">
                    <input type="text"
                           placeholder="Paste image URL"
                           className="bg-transparent border-b border-gray-700 mx-10 w-full md:w-[20ch]"/>
                </div>
            </div>

            <h3 className="text-lg text-center my-5">or select image from NASA archives</h3>
            <ImagesGrid control={control}/>
            <div className="flex justify-center mt-10">
                <Link to="/app/sound-style" state={{}} className="px-5 font-primary text-lg">Next {'>'}</Link>
            </div>
        </div>
    )
}

export default ImageSourceSelectionPage
