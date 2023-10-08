export interface MovieInspiration {
    name: string
    posterImgPath: string
    composer: string
    director: string
    slug: string
    videoId: string
}

export const movieInspirations: MovieInspiration[] = [
    {
        name: "Pirates of the Caribbean: The Curse of the Black Pearl",
        posterImgPath: "piratesofthecaribbean.jpg",
        composer: "Klaus Badelt",
        director: "Gore Verbinski",
        slug: "pirates_of_the_caribbean_the_curse_of_the_black_pearl",
        videoId: "bauDAJEIuYQ"
    },
    {
        name: "Titanic",
        posterImgPath: "titanic.jpg",
        composer: "James Horner",
        director: "James Cameron",
        slug: "titanic",
        videoId: "X2RIf9QrQ6k"
    },
    {
        name: "Chariots of Fire",
        posterImgPath: "chariotsoffire.jpg",
        composer: "Vangelis",
        director: "Hugh Hudson",
        slug: "chariots_of_fire",
        videoId: "8a-HfNE3EIo"
    },
    {
        name: "La La Land",
        posterImgPath: "lalaland.jpg",
        composer: "Justin Hurwitz",
        director: "Damien Chazelle",
        slug: "la_la_land",
        videoId: "Yaufxd6zEZI"
    },
    {
        name: "The Lion King",
        posterImgPath: "thelionking.jpg",
        composer: "Hans Zimmer",
        director: "Roger Allers, Rob Minkoff",
        slug: "the_lion_king",
        videoId: "RakhywpkY-k"
    },
    {
        name: "Black Panther",
        posterImgPath: "blackpanther.jpg",
        composer: "Ludwig Göransson",
        director: "Ryan Coogler",
        slug: "black_panther",
        videoId: "LUBn0lE8cs8"
    },
    {
        name: "The Social Network",
        posterImgPath: "thesocialnetwork.jpg",
        composer: "Trent Reznor, Atticus Ross",
        director: "David Fincher",
        slug: "the_social_network",
        videoId: "yydZbVoCbn0"
    },

    {
        name: "Back to the Future",
        posterImgPath: "backtothefuture.jpg",
        composer: "Alan Silvestri",
        director: "Robert Zemeckis",
        slug: "back_to_the_future",
        videoId: "zrAompldrus"
    },
    {
        name: "Rocky",
        posterImgPath: "rocky.jpg",
        composer: "Bill Conti",
        director: "John G. Avildsen",
        slug: "rocky",
        videoId: "KPhqU--Mq1A"
    },
    {
        name: "Her",
        posterImgPath: "her.jpg",
        composer: "Arcade Fire (William Butler and Owen Pallett)",
        director: "Spike Jonze",
        slug: "her",
        videoId: "g_72RkQV25Y"
    }
];

export interface ComposerInspiration {
    name: string
    imagePath: string
    slug: string
}

export const composerInspirations: ComposerInspiration[] = [
    {
        name: "Hans Zimmer",
        imagePath: "hanszimmer.jpg",
        slug: "hans_zimmer"
    },
    {
        name: "Ennio Morricone",
        imagePath: "enniomorricone.jpg",
        slug: "ennio_morricone"
    },
    {
        name: "John Williams",
        imagePath: "johnwilliams.jpg",
        slug: "john_williams"
    },
    {
        name: "Ludwig van Beethoven",
        imagePath: "ludvigvanbeethoven.jpg",
        slug: "ludwig_van_beethoven"
    },
    {
        name: "Wolfgang Amadeus Mozart",
        imagePath: "wolfgangamadeusmozart.jpg",
        slug: "wolfgang_amadeus_mozart"
    },
    {
        name: "Johann Sebastian Bach",
        imagePath: "johannsebastianbach.jpg",
        slug: "johann_sebastian_bach"
    },
    {
        name: "Pyotr Ilyich Tchaikovsky",
        imagePath: "pyotrilyichtchaikovsky.jpg",
        slug: "pyotr_ilyich_tchaikovsky"
    },
    {
        name: "Ludwig Göransson",
        imagePath: "ludwiggoransson.jpg",
        slug: "ludwig_g_ransson"
    },
    {
        name: "Alan Silvestri",
        imagePath: "alansilvestri.jpg",
        slug: "alan_silvestri"
    },
    {
        name: "Alexandre Desplat",
        imagePath: "alexandredesplat.jpg",
        slug: "alexandre_desplat"
    }
]
