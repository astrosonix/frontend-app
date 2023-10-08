export interface PredefinedImageSequence {
    name: string
    slug: string
    description: string
    imgPaths: string[]
}

export const createImageSequenceImageUrl = (imageSequence: PredefinedImageSequence, n: number) => {
    return `/assets/img/image-sequences/${imageSequence.slug}/${imageSequence.slug}_${n}.png`
}


export const predefinedImageSequences = [
    {
        name: "Cosmic Reef",
        slug: "cosmic_reef",
        description: "",
        imgPaths: ["cosmic_reef_1.jpg", "cosmic_reef_2.jpg", "cosmic_reef_3.jpg"]
    },
    {
        name: "Cosmic Wonders",
        slug: "cosmic_wonders",
        description: "",
        imgPaths: ["cosmic_wonders_1.jpg", "cosmic_wonders_2.jpg", "cosmic_wonders_3.jpg"]
    },
    {
        name: "Lagoon Nebula",
        slug: "lagoon_nebula",
        description: "",
        imgPaths: ["lagoon_nebula_1.jpg", "lagoon_nebula_2.jpg", "lagoon_nebula_3.jpg"]
    }
]
