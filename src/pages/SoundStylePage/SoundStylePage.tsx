import styles from './styles/ImageSourceSelectionPage.module.css'
import {Link} from "react-router-dom";
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon } from '@radix-ui/react-icons';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import {ComposerInspirationsGrid, MoviesInspirationsGrid} from "./InspirationsGrid.tsx";
import {useForm} from "react-hook-form";
import {useState} from "react";

const toggleGroupItemClasses =
    'hover:bg-gray-200 text-black data-[state=on]:bg-primary data-[state=on]:text-white flex h-[35px] px-4 items-center justify-center bg-white text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:outline-none';


const SoundStylePage = () => {
    const {control} = useForm()
    const [tab, setTab] = useState('composer')
    return (
        <form className="w-4/5 mx-auto pt-20 pb-20 md:pb-0">
            <h1 className="font-primary text-center text-2xl mb-5">Select music inspiration ♫</h1>
            <div className="flex justify-center mt-10">
                <ToggleGroup.Root
                    className="inline-flex bg-mauve6 rounded space-x-px"
                    type="single"
                    defaultValue="left"
                    aria-label="Text alignment"
                >
                    <ToggleGroup.Item
                        onClick={() => setTab('composer')}
                        className={toggleGroupItemClasses} value="left" aria-label="Left aligned">
                        Composer
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                        onClick={() => setTab('movie')}
                        className={toggleGroupItemClasses} value="right" aria-label="Center aligned">
                        Soundtrack from a movie
                    </ToggleGroup.Item>
                </ToggleGroup.Root>
            </div>

            <div className="mt-5 md:mt-20">
                <ScrollArea.Root className="w-full rounded overflow-hidden">
                    <ScrollArea.Viewport className="h-full rounded pb-5">
                        {
                            tab === 'composer' ? (
                                <ComposerInspirationsGrid control={control} />
                            ) : (
                                <MoviesInspirationsGrid control={control} />
                            )
                        }
                    </ScrollArea.Viewport>
                    <ScrollArea.Scrollbar
                        className="flex select-none touch-none p-0.5 bg-white/10 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                        orientation="horizontal"
                    >
                        <ScrollArea.Thumb className="flex-1 bg-white/70 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                    </ScrollArea.Scrollbar>
                </ScrollArea.Root>

            </div>

            <div className="mt-10 flex justify-center">
                <Link to="/app/generate" state={{}} className="px-5 font-primary text-xl border px-4 py-2">
                    Generate
                </Link>
            </div>
        </form>
    )
}

export default SoundStylePage
