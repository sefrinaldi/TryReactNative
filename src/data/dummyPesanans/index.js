import {
    ChelseaBehind,
    ChelseaFront,
    DortmundBehind,
    DortmundFront,
    BundesLiga,
    PremierLeague,
    MilanFront,
    MilanBehind,
    SerieA,
    LiverpoolFront,
    LiverpoolBehind
  } from '../../assets';
  
  export const dummyPesanans = [
    {
      id: 1,
      tanggalPemesanan: 'Jumat, 18 September 2020',
      status: 'keranjang',
      totalHarga: 500000,
      berat: 1,
      pesanans: [
        {
          id: 1,
          product: {
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
          jumlahPesan: 1,
          totalHarga: 125000,
          keterangan: null,
          ukuran: "L"
        },
        {
          id: 2,
          product: {
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
          jumlahPesan: 3,
          totalHarga: 375000,
          keterangan: null,
          ukuran: "L"
        }
      ]
    },
    {
      id: 2,
      tanggalPemesanan: 'Sabtu, 19 September 2020',
      status: 'lunas',
      totalHarga: 375000,
      berat: 0.75,
      pesanans: [
        {
          id: 1,
          product: {
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
          jumlahPesan: 1,
          totalHarga: 125000,
          keterangan: "Nama Jersey : Eko Nomor Punggung : 9.",
          ukuran: "L"
        },
        {
          id: 2,
          product: {
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
          jumlahPesan: 2,
          totalHarga: 255000,
          keterangan: "Nama Jersey : Afif Nomor Punggung : 10.",
          ukuran: "M"
        }
      ]
    }
  ];
  