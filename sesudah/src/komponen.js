export function KartuCatatan(catatan) {
  const el = document.createElement('div');
  el.className = 'kartu';

  const elMk = document.createElement('small');
  elMk.textContent = catatan.mk;

  const elJudul = document.createElement('h3');
  // Gunakan innerText atau textContent dengan memastikan string aslinya masuk utuh
  elJudul.textContent = catatan.judul; 

  const elTanggal = document.createElement('small');
  elTanggal.textContent = catatan.dibuat ? new Date(catatan.dibuat).toLocaleString() : '';

  const divAksi = document.createElement('div');
  divAksi.className = 'aksi';

  const btnSemat = document.createElement('button');
  btnSemat.textContent = catatan.disematkan ? 'Lepas' : 'Sematkan';

  const btnHapus = document.createElement('button');
  btnHapus.textContent = 'Hapus';

  divAksi.append(btnSemat, btnHapus);
  el.append(elMk, elJudul, elTanggal, divAksi);
  
  return el;
}

export function PesanKosong() {
  const el = document.createElement('p');
  el.className = 'kosong';
  el.textContent = 'Belum ada catatan.';
  return el;
}