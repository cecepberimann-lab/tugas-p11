// main.js
import * as state from './state.js';
import { renderUI } from './ui.js';

let kataCari = '';

function perbaruiTampilan() {
  const hasilPencarian = state.cari(kataCari);
  renderUI({
    hasilPencarian,
    semuaCatatan: state.semua(),
    kataCari,
    onSematkan: (id) => {
      state.alihSemat(id);
      perbaruiTampilan();
    },
    onHapus: (id) => {
      if (!confirm('Hapus catatan ini?')) return;
      state.hapus(id);
      perbaruiTampilan();
    }
  });
}

// Event listener form tambah catatan
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const inputJudul = document.getElementById('judul');
  const selectMk = document.getElementById('mk');
  
  const judul = inputJudul.value.trim();
  if (!judul) return;

  state.tambah(judul, selectMk.value);
  inputJudul.value = '';
  perbaruiTampilan();
});

// Event listener kotak pencarian
document.getElementById('cari').addEventListener('input', (e) => {
  kataCari = e.target.value;
  perbaruiTampilan();
});

// Jalankan render pertama kali saat aplikasi dimuat
perbaruiTampilan();