const expess = require("express");
const router = expess.Router();

const dataMhs = [
  {
    id: 101,
    nama: "Farel Naufal Azhari",
    kampus: "Universitas Teknologi Yogyakarta",
    nim: 5210411200,
    jurusan: "Informatika",
    angkatan: "2021",
    Image: "https://i.ibb.co/XJ9BLkK/Salinan-IMG-9921.jpg",
    maba: true,
  },
  {
    id: 102,
    nama: "Dimas Santoso",
    kampus: "Universitas Teknologi Yogyakarta",
    nim: 5210411168,
    jurusan: "Informatika",
    angkatan: "2021",
    Image: "https://i.ibb.co/vXrrcCD/Salinan-IMG-4665.jpg",
    maba: true,
  },
  {
    id: 103,
    nama: "Agus Budi Raharjo",
    kampus: "Universitas Teknologi Yogyakarta",
    nim: 5210411179,
    jurusan: "Informatika",
    angkatan: "2021",
    Image: "https://i.ibb.co/w0QdsCZ/Salinan-IMG-3472.jpg",
    maba: true,
  },
];

router.get("/kelompok", (req, res) => {
  res.send(dataMhs);
});

// Single product parameter

router.get("/kelompok/:id", (req, res) => {
  const kelompokId = parseInt(req.params.id);
  const singleKelompok = dataMhs.find((item) => item.id === kelompokId);
  if (!kelompokId) {
    return res.status(404).json({ message: "Data tidak ditemukan" });
  }
  res.json(singleKelompok);
});
module.exports = router;
