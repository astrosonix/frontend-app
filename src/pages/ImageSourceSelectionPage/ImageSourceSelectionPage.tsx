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



const ImageSourceSelectionPage = () => {
    const {control} = useForm()
    return (
        <div className="w-4/5 mx-auto pt-20 pb-20 md:pb-0">
            <h1 className="font-primary text-center text-2xl mb-5">Hi 👋, <br/> what image you wish to sonify?</h1>
            <div className="my-10 md:flex justify-center">
                <div className="flex justify-center">
                    <button disabled={true} type="button" className="cursor-not-allowed text-lg text-center flex items-center">
                        <UploadIcon className="w-5 h-5 mr-2" />
                        Upload your image sequence
                    </button>
                </div>
            </div>

            <h3 className="text-lg text-center mt-5 mb-20 block font-bold">or select an image sequence from NASA datasets</h3>
            <ImagesGrid control={control}/>
            <div className="mb-10 mt-16">
                <h3 className="text-lg text-center mt-5 mb-5 block font-bold">How many images should be extracted from the sequence?</h3>
                <div className="flex justify-center">
                    <input type="text" value="3"
                           className="bg-transparent border-gray-600 border inline-block px-3 py-1 block text-center w-[10ch] rounded cursor-not-allowed"/>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <Link to="/app/sound-style" state={{}} className="px-5 font-primary text-lg">Next {'>'}</Link>
            </div>
        </div>
    )
}

export default ImageSourceSelectionPage
