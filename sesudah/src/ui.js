// ui.js
export function renderUI({ hasilPencarian, semuaCatatan, kataCari, onSematkan, onHapus }) {
  const sematanEl = document.getElementById('sematan');
  const semuaEl = document.getElementById('semua');
  const infoEl = document.getElementById('info');

  sematanEl.innerHTML = '';
  semuaEl.innerHTML = '';

  let jumlahSemat = 0;

  hasilPencarian.forEach(c => {
    // Render kartu disematkan
    if (c.disematkan) {
      jumlahSemat++;
      const divSemat = document.createElement('div');
      divSemat.className = 'kartu';
      divSemat.innerHTML = `
        <small>${c.mk}</small>
        <h3>${c.judul}</h3>
        <small>${new Date(c.dibuat).toLocaleDateString('id-ID')}</small>
        <div class="aksi">
          <button class="btn-semat" data-id="${c.id}">Lepas</button>
          <button class="btn-hapus" data-id="${c.id}">Hapus</button>
        </div>
      `;
      sematanEl.appendChild(divSemat);
    }

    // Render semua kartu hasil pencarian
    const divSemua = document.createElement('div');
    divSemua.className = 'kartu';
    divSemua.innerHTML = `
      <small>${c.mk}</small>
      <h3>${c.judul}</h3>
      <small>${new Date(c.dibuat).toLocaleDateString('id-ID')}</small>
      <div class="aksi">
        <button class="btn-semat" data-id="${c.id}">${c.disematkan ? 'Lepas' : 'Sematkan'}</button>
        <button class="btn-hapus" data-id="${c.id}">Hapus</button>
      </div>
    `;
    semuaEl.appendChild(divSemua);
  });

  if (jumlahSemat === 0) {
    sematanEl.innerHTML = '<p class="kosong">Belum ada catatan yang disematkan.</p>';
  }
  if (hasilPencarian.length === 0) {
    semuaEl.innerHTML = '<p class="kosong">Tidak ada catatan.</p>';
  }

  infoEl.textContent = `${hasilPencarian.length} catatan, ${jumlahSemat} disematkan`;

  // Pasang event listener ke tombol-tombol yang baru dibuat secara dinamis (menghindari onclick global)
  document.querySelectorAll('.btn-semat').forEach(btn => {
    btn.addEventListener('click', () => {
      onSematkan(Number(btn.dataset.id));
    });
  });

  document.querySelectorAll('.btn-hapus').forEach(btn => {
    btn.addEventListener('click', () => {
      onHapus(Number(btn.dataset.id));
    });
  });
}