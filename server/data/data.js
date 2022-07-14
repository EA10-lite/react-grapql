
let timestamp = 1657643301163
let today = new Date(timestamp);
let august = new Date(today.getFullYear(), today.getMonth(), today.getDate()+30).getTime();
let september =  new Date(today.getFullYear(), today.getMonth(), today.getDate()+60).getTime();
let october =  new Date(today.getFullYear(), today.getMonth(), today.getDate()+90).getTime();
let december = new Date(today.getFullYear(), today.getMonth(), today.getDate()+170).getTime()
let nextYear =  new Date(today.getFullYear(), today.getMonth(), today.getDate()+200).getTime();

var movies = [
    { 
        id:"1", title:"Thor, Love and thunder",description:"Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods.",
        genreTypes:[
            {id:"2",name:"Action"},
            {id:"3", name:"Adventure"}
        ],
        release_date:august,
        poster_path:"https://imgc.allpostersimages.com/img/posters/marvel-thor-love-and-thunder-rainbow-splatter_u-L-FA87SM0.jpg" 
    },
    {
        id:"2", title:"Spiderman No way Home", 
        description:"Peter Parker seeks Doctor Strange's help to make people forget about Spiderman's identity. However, when the spell he casts gets corrupted, several unwanted guests enter their universe.",
        genreTypes:[
            { id: "2", name: "Action" },
            { id: "3", name: "Adventure" },
        ],
        release_date:nextYear,
        poster_path:"https://imgc.allpostersimages.com/img/posters/marvel-spider-man-no-way-home-teaser_u-L-FA85610.jpg",
    },
    {
        id:"3",title:"Dr Strange 2, Multiverse of madness",
        description:"Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle.",
        genreTypes:[
            { id: "2", name: "Action" },
            { id: "3", name: "Adventure" },
        ],
        release_date:august,
        poster_path:"https://imgc.allpostersimages.com/img/posters/marvel-doctor-strange-in-the-multiverse-of-madness-official-one-sheet_u-L-FA85100.jpg"
    },
    {
        id:"4",title:"Jurasic World Dominion",
        description:"Four years after the destruction of Isla Nublar, dinosaurs now live and hunt alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures.",
        genreTypes:[
            { id: "11", name: "Sci-Fi" },
            { id: "2", name: "Action" }
        ], release_date:august,
        poster_path:"https://imgc.allpostersimages.com/img/posters/jurassic-world-dominion-giga-vs-t-rex_u-L-FA8JWI0.jpg"
    },
    {
        id:"5",title:"Extraction 2",
        description:"Extraction 2 is an upcoming American 2 thriller film directed by Sam Hargrave and written by Joe Russo, based on the graphic novel Ciudad by Ande Parks, Joe Russo, Anthony Russo, Fernando León González, and Eric Skillman. A sequel to the 2020 film, Chris Hemsworth and Golshifteh Farahani reprise their roles.",
        genreTypes:[
            {id:"2",name:"Action"},
            {id:"7",name:"Thriller"}
        ], release_date:december,
        poster_path:"https://m.media-amazon.com/images/M/MV5BMjNjYWY0OGYtMDBlYi00YmI4LWExZmEtNGRlOTJiZmM0NjBlXkEyXkFqcGdeQXVyMjU0OTAwMDc@._V1_QL75_UY148_CR61,0,100,148_.jpg"
    },
    {
        id:"6",title:"Fantastic Beasts: The Secrets of Dumbledore",
        description:"Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
        genreTypes:[
            { id: "6", name: "Fantasy" },
            { id: "3", name: "Adventure" }
        ],
        release_date:august,
        poster_path:"https://m.media-amazon.com/images/M/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_QL75_UX100_CR0,0,100,148_.jpg"
    },
    {
        id:"7",title:"The Gray Man",
        description:"When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague.",
        genreTypes:[
            { id: "2", name:"Action" },
            { id: "7", name:"Thriller" },
        ], release_date:nextYear,
        poster_path:"https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX100_CR0,0,100,148_.jpg"
    },
    {
        id:"8",title:"Spiderhead",
        description:"Two inmates form a connection while grappling with their pasts in a state-of-the-art penitentiary run by a brilliant visionary who experiments on his subjects with mind-altering drugs.",
        genreTypes:[
            {id: "11", name:"Sci-Fi"},
            {id:"7", name:"Thriller"}
        ], release_date:september,
        poster_path:"https://m.media-amazon.com/images/M/MV5BNDVkZTc4OTktNTAyOC00MzQxLThiZjMtM2M3MTlmYzFjY2FkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX100_CR0,0,100,148_.jpg"
    },
    {
        id:"9",title:"Black Adam",
        description:"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods -- and imprisoned just as quickly -- Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        genreTypes:[
            { id: "2", name: "Action" },
            { id: "3", name: "Adventure" },
        ], release_date:nextYear,
        poster_path:"https://m.media-amazon.com/images/M/MV5BN2ZmYTlhNmMtODQ0OS00YWNiLWI1MmMtNzkwYWMzOGM4YWQxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX100_CR0,0,100,148_.jpg"
    },
    {
        id:"10",title:"Avatar: The Way of water",
        description:"Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
        genreTypes:[
            { id: "2", name: "Action" },
            { id: "11", name: "Sci-Fi" },
        ], release_date:december,
        poster_path:"https://m.media-amazon.com/images/M/MV5BMWFmYmRiYzMtMTQ4YS00NjA5LTliYTgtMmM3OTc4OGY3MTFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UY148_CR9,0,100,148_.jpg"
    },
    {
        id:"11",title:"Nope",
        description:"Caretakers at a California horse ranch encounter a mysterious force that affects human and animal behaviour.",
        genreTypes:[
            { id: "7", name: "Thriller" },
            { id: "8", name: "Horror" },
        ], release_date:october,
        poster_path:"https://m.media-amazon.com/images/M/MV5BMGIyNTI3NWItNTJkOS00MGYyLWE4NjgtZDhjMWQ4Y2JkZTU5XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_QL75_UX100_CR0,15,100,148_.jpg"
    },
    {
        id:"12",title:"Amsterdan",
        description:"Set in the '30s, it follows three friends who witness a murder, become suspects themselves, and uncover one of the most outrageous plots in American history.",
        genreTypes:[
            { id: "1", name: "Drama" },

        ], release_date:september,
        poster_path:"https://m.media-amazon.com/images/M/MV5BODJhZjg3NTEtZjIzNy00NzNkLThjZDYtMzA4NjYzOWM4MWI5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX100_CR0,0,100,148_.jpg"
    },
    {
        id:"13",title:"Puss in Boots: The last wish",
        description:"Puss in Boots discovers that his passion for adventure has taken its toll: he has burnt through eight of his nine lives. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        genreTypes:[
            { id: "5", name: "Comedy" },
            { id: "6", name: "Fantasy" },
        ], release_date:august,
        poster_path:"https://m.media-amazon.com/images/M/MV5BNTAxMzA0ZjMtMGJjZi00MTFkLThmZTItOTJiM2RiMzg0YmRjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_QL75_UX100_CR0,5,100,148_.jpg"
    },
    {
        id:"14",title:"Persuasion",
        description:"When Frederick Wentworth -- the one who got away -- crashes back into Anne Elliot's life, she must choose between putting the past behind her or listening to her heart when it comes to second chances.",
        genreTypes:[
            {id:"1", name:"Drama"},
            {id:"10",name:"Romance"}
        ], release_date:september,
        poster_path:"https://m.media-amazon.com/images/M/MV5BZDg3MzdiYjAtZWQ0MC00MDY4LWE5ZWEtNjliNTE3ZDZjNTU3XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_QL75_UX100_CR0,0,100,148_.jpg"
    },
    {
        id:"15",title:"Halloween ends",
        description:"Laurie Strode prepares for a final showdown with masked killer Michael Myers.",
        genreTypes:[
            { id: "7", name: "Thriller" },
            { id: "8", name: "Horror" },
        ],
        release_date:october,
        poster_path:"https://m.media-amazon.com/images/M/MV5BY2RhOGQ1YTMtM2ZmYy00YzY2LTlmYTMtZjM4MDc3MDFlODhlXkEyXkFqcGdeQXVyMTMyNTE4MDc0._V1_QL75_UY148_CR82,0,100,148_.jpg"
    },
    {
        id:"16",title:"Where the crowdad sings",
        description:"Abandoned as a girl, Kya raised herself in the dangerous marshlands of North Carolina. For years, rumors of the marsh girl haunted Barkley Cove, isolating the sharp and resilient Kya from her community. Drawn to two young men from town, she opens herself to a new and startling world.",
        genreTypes:[
            {id:"1",name:"Drama"},
            {id:"9",name:"Mystery"}
        ], release_date:september,
        poster_path:"https://m.media-amazon.com/images/M/MV5BMTJmNGJmYTgtYjAxNy00YmMzLTk2YTYtMGIzMmUwNDMyMTY1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_QL75_UY148_CR9,0,100,148_.jpg"
    },
    {
        id:"17",title:"Black Panther: Wakanda Forever",
        description:"Black Panther: Wakanda Forever is an upcoming American superhero film based on the Marvel Comics character Black Panther. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is intended to be the sequel to Black Panther and the 30th film in the Marvel Cinematic Universe. ",
        genreTypes:[
            { id: "2", name: "Action" },
            { id: "3", name: "Adventure" },
        ], release_date:nextYear,
        poster_path:"https://m.media-amazon.com/images/M/MV5BYjJlMjBmYzUtY2E3MC00OWI1LWE1YmUtOTdmM2IyMTQyZDBjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX100_CR0,0,100,148_.jpg"
    },
    {
        id:"18",title:"Transformers: Rise of the beasts",
        description:"During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons.",
        genreTypes:[
            {id:"11",name:"Sci-Fi"},
            {id:"2",name:"Action"}
        ], release_date:october,
        poster_path:"https://m.media-amazon.com/images/M/MV5BNWQ2MWU1ZWItYjkyNi00YmYwLWExMzAtZmZlMGNhMTg3OWI1XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_QL75_UX100_CR0,1,100,148_.jpg"
    },
    {
        id:"19",title:"Ant-man and the wasp: Quantumania",
        description:"Ant-Man and the Wasp: Quantumania is an upcoming American superhero film based on Marvel Comics featuring the characters Scott Lang / Ant-M,an and Hope Pym / Wasp",
        genreTypes:[
            {id:"3",name:"Adventure"},
            {id:"6",name:"Thriller"}
        ], release_date:december,
        poster_path:"https://m.media-amazon.com/images/M/MV5BMGYzYmU2YzMtODNiZC00ZDBmLWJmOGMtMmNkYmIxNTlmNDE1XkEyXkFqcGdeQXVyMTA1OTAyOTI@._V1_QL75_UY148_CR24,0,100,148_.jpg"
    },
    {
        id:"20",title:"Blue Beetle",
        description:"Mexican-American teenager Jaime Reyes gains super powers when a mysterious scarab binds to his spine and provides him with a powerful suit of blue alien armor.",
        genreTypes:[
            { id: "2", name: "Action" },
            { id: "3", name: "Adventure" },
        ], release_date:september,
        poster_path:"https://m.media-amazon.com/images/M/MV5BNThmZTMyMGItYTViNi00YWFkLTk1NWMtNTJkYjZlMjU3ZGVhXkEyXkFqcGdeQXVyNjc0NzQzNTM@._V1_QL75_UX100_CR0,0,100,148_.jpg"
    },
    {
        id:"22",title:"Spiderman: Across the spider-verse",
        description:"Miles Morales embarks on an epic adventure that will transport Brooklyn's full-time, friendly neighbourhood Spider-Man across the Multiverse to join forces with Gwen Stacy and a new team.",
        genreTypes:[
            { id: "2", name: "Action" },
            { id: "3", name: "Adventure" },
        ], release_date:nextYear,
        poster_path:"https://m.media-amazon.com/images/M/MV5BZGRhNDE1YjYtOGUzMC00YjliLThiOTgtYTkwNmQwNDZjYjFhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_QL75_UX100_CR0,0,100,148_.jpg"
    },
    {
        id:"23",title:"Aquaman and the lost kingdom",
        description:"Aquaman forges an uneasy alliance with an unlikely ally in a bid to save Atlantis and the rest of the planet.",
        genreTypes:[
            { id: "2", name: "Action" },
            { id: "6", name: "Fantasy" },
        ], release_date:october,
        poster_path:"https://m.media-amazon.com/images/M/MV5BM2QyYTRkMjMtMDk5NC00OTc0LWIyYTYtNGNhMzRjMTNhNGNkXkEyXkFqcGdeQXVyNjc0NzQzNTM@._V1_QL75_UY148_CR82,0,100,148_.jpg"
    }
];

var genreTypes = [
    { id: "1", name: "Drama" },
    { id: "2", name: "Action" },
    { id: "3", name: "Adventure" },
    { id: "4", name: "Animation" },
    { id: "5", name: "Comedy" },
    { id: "6", name: "Fantasy" },
    { id: "7", name: "Thriller" },
    { id: "8", name: "Horror" },
    { id: "9", name: "Mystery" },
    { id: "10", name: "Romance" },
    { id: "11", name: "Sci-Fi" },
]

module.exports = {
    movies,
    genreTypes
};