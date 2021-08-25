import {
    ChelseaFront,
    ChelseaBehind,
    DortmundFront,
    DortmundBehind,
    JuveFront,
    JuveBehind,
    LeicesterFront,
    LeicesterBehind,
    LiverpoolFront,
    LiverpoolBehind,
    MadridFront,
    MadridBehind,
    MilanFront,
    MilanBehind,
    MunchenFront,
    MunchenBehind,
    BundesLiga,
    LaLiga,
    PremierLeague,
    SerieA
} from '../../assets'

export const dummyJersey = [
    {
        id: 1,
        name: 'CHELSEA 3RD 2018-2019',
        picture: [ChelseaFront, ChelseaBehind],
        liga: {
            id: 2,
            name: 'Premier League',
            picture: PremierLeague
        },
        price: 125000,
        weight: 0.25,
        type: 'Replika Top Quality',
        size: ["S", "M", "L", "XL", "XXL"],
        ready: true
    },
    {
        id: 2,
        name: 'DORTMUND AWAY 2018-2019',
        picture: [DortmundFront, DortmundBehind],
        liga: {
            id: 4,
            name: 'Bundes Liga',
            picture: BundesLiga
        },
        price: 125000,
        weight: 0.25,
        type: 'Replika Top Quality',
        size: ["S", "M", "L", "XL", "XXL"],
        ready: true
    },
    {
        id: 3,
        name: 'JUVENTUS AWAY 2018-2019',
        picture: [ JuveFront, JuveBehind ],
        liga: {
            id: 3,
            name: 'Serie A',
            picture: SerieA,
        },
        price: 125000,
        weight: 0.25,
        type: 'Replika Top Quality',
        size: ["S", "M", "L", "XL", "XXL"],
        ready: true
    },
    {
        id: 4,
        name: 'LEICESTER CITY HOME 2018-2019',
        picture: [ LeicesterFront, LeicesterBehind ],
        liga: {
            id: 2,
            name: 'Premier League',
            picture: PremierLeague,
        },
        price: 125000,
        weight: 0.25,
        type: 'Replika Top Quality',
        size: ["S", "M", "L", "XL", "XXL"],
        ready: true
    },
    {
        id: 5,
        name: 'LIVERPOOL AWAY 2018-2019',
        picture: [ LiverpoolFront, LiverpoolBehind ],
        liga: {
            id: 2,
            name: 'Premier League',
            picture: PremierLeague,
        },
        price: 125000,
        weight: 0.25,
        type: 'Replika Top Quality',
        size: ["S", "M", "L", "XL", "XXL"],
        ready: true
    },
    {
        id: 6,
        name: 'REAL MADRID 3RD 2018-2019',
        picture: [ MadridFront, MadridBehind ],
        liga: {
            id: 1,
            name: 'La Liga',
            picture: LaLiga,
        },
        price: 125000,
        weight: 0.25,
        type: 'Replika Top Quality',
        size: ["S", "M", "L", "XL", "XXL"],
        ready: true
    },
    {
        id: 7,
        name: 'AC MILAN HOME 2018 2019',
        picture: [ MilanFront, MilanBehind ],
        liga: {
            id: 3,
            name: 'Serie A',
            picture: SerieA,
        },
        price: 125000,
        weight: 0.25,
        type: 'Replika Top Quality',
        size: ["S", "M", "L", "XL", "XXL"],
        ready: true
    },
    {
        id: 8,
        name: 'BAYERN MUNCHEN 3RD 2018 2019',
        picture: [ MunchenFront, MunchenBehind ],
        liga: {
            id: 4,
            name: 'Bundes liga',
            picture: BundesLiga,
        },
        price: 125000,
        weight: 0.25,
        type: 'Replika Top Quality',
        size: ["S", "M", "L", "XL", "XXL"],
        ready: true
    }
]