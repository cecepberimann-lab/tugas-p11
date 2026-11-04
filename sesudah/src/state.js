// state.js

// Menyimpan state aplikasi secara terisolasi (tanpa DOM)
let state = {
  catatans: [],
  kategoriAktif: 'Semua',
  keywordPencarian: ''
};

// Fungsi utama untuk mengambil state saat ini
export function ambilState() {
  return state;
}

// Fungsi untuk memperbarui state
export function setCatatans(dataBaru) {
  state.catatans = dataBaru;
}

export function setKategoriAktif(kategori) {
  state.kategoriAktif = kategori;
}

export function setKeywordPencarian(keyword) {
  state.keywordPencarian = keyword;
}