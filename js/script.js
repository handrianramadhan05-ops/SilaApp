// daftar kode layanan

const LAYANAN = ['CAK','SKA','TNM','PDA']
function validasiForm() {
  const nama = document.getElementById("namalengkap").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const prodi = document.getElementById("prodi").value.trim();
  const layanan = document.getElementById("layanan").value.trim();
  const tanggal = document.getElementById("tanggal").value.trim();


  // Cek field kosong
  if (
    nama === "" || nim === "" || prodi === "" || layanan === "" || tanggal === ""
  ) {
    alert("❌ Semua field wajib diisi!");
    return false;

  }

}