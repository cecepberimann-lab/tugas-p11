export const KUNCI = 'catatan-kuliah:v1';

export function muat() {
  try {
    const dataMentah = localStorage.getItem(KUNCI);
    if (!dataMentah) return [];
    const parsed = JSON.parse(dataMentah);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item) => item && typeof item.judul === 'string');
  } catch (err) {
    return [];
  }
}

export function simpan(data) {
  try {
    localStorage.setItem(KUNCI, JSON.stringify(data));
  } catch (err) {
    console.warn('Penyimpanan penuh atau diblokir');
  }
}