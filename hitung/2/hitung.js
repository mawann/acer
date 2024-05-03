/* 
-------------------------------------
Script yang digunakan oleh index.html
(C) Mawan A. Nugroho.
-------------------------------------
*/

function beranda() {
  // Kembali ke index.php
  document.getElementById("namafile").innerHTML = 'index.php'; 
  document.getElementById("instruksi").style.display = "block";
  // Hitung 1 sampai 4.
  for (let i = 1; i <= 4; i++) {
    // pilihan-i disembunyikan.
    document.getElementById("form-" + i).style.display = "none";
  };  
  document.getElementById("hasil").style.display = "none";
}

function tampilkan(nomor) {
  // Informasi nama file.
  switch (nomor) {
    case 1: document.getElementById("namafile").innerHTML = 'persegi-form.php'; break; 
    case 2: document.getElementById("namafile").innerHTML = 'kotak-form.php'; break; 
    case 3: document.getElementById("namafile").innerHTML = 'lingkaran-form.php'; break; 
    case 4: document.getElementById("namafile").innerHTML = 'bola-form.php'; break; 
  };
  
  document.getElementById("instruksi").style.display = "none";
  // Hitung 1 sampai 4.
  for (let i = 1; i <= 4; i++) {
    // pilihan-i disembunyikan.
    document.getElementById("form-" + i).style.display = "none";
  };
  document.getElementById("form-" + nomor).style.display = "block";
  document.getElementById("hasil").style.display = "none";

  return false;
}

function hitung(nomor) {
  var hasil = "<h1>Hasil Perhitungan</h1>";
  switch (nomor) {
    case 1:
      document.getElementById("namafile").innerHTML = 'persegi-hitung.php'; 
      document.getElementById("hasil-1").style.display = "block";
      // Menghitung luas persegi
      var panjang = document.getElementById("form-1-panjang").value;
      var lebar   = document.getElementById("form-1-lebar").value;
      var luas    = panjang * lebar;
      hasil = hasil +
      "<p>Diketahui:<br>" +
      "Panjang = " + panjang + "<br>" +
      "Lebar = " + lebar + "</p>" +
      "<p>Ditanyakan: Luas</p>" +
      "<p>Rumus luas = panjang x lebar</p>" +
      "<p>Luas = " + panjang + " x " + lebar + "<br>" +
      "Luas = " + luas + "</p>";
      break;
    case 2:
      document.getElementById("namafile").innerHTML = 'kotak-hitung.php'; 
      document.getElementById("hasil-2").style.display = "block";
      // Menghitung volume persegi
      var panjang = document.getElementById("form-2-panjang").value;
      var lebar   = document.getElementById("form-2-lebar").value;
      var tinggi  = document.getElementById("form-2-tinggi").value;
      var volume  = panjang * lebar * tinggi;
      hasil = hasil +
      "<p>Diketahui:<br>" +
      "Panjang = " + panjang + "<br>" +
      "Lebar = " + lebar + "</br>" +
      "Tinggi = " + tinggi + "</p>" +
      "<p>Ditanyakan: Volume</p>" +
      "<p>Rumus volume = panjang x lebar x tinggi</p>" +
      "<p>Volume = " + panjang + " x " + lebar + " x " + tinggi + "<br>" +
      "Volume = " + volume + "</p>";
      break;
    case 3:
      document.getElementById("namafile").innerHTML = 'lingkaran-hitung.php'; 
      document.getElementById("hasil-3").style.display = "block";
      // Menghitung luas lingkaran
      var diameter = document.getElementById("form-3-diameter").value;
      var jarijari = diameter / 2;
      var luas     = 3.14159 * jarijari * jarijari;
      hasil = hasil +
      "<p>Diketahui:<br>" +
      "Diameter = " + diameter + "<br>" +
      "Jari-jari = " + jarijari + "</p>" +
      "<p>Ditanyakan: Luas</p>" +
      "<p>Rumus luas = phi x jari-jari x jari-jari</p>" +
      "<p>Luas = " + 3.14159 + " x " + jarijari + " x " + jarijari + "<br>" +
      "Luas = " + luas + "</p>";
      break;
    case 4:
      document.getElementById("namafile").innerHTML = 'bola-hitung.php'; 
      document.getElementById("hasil-4").style.display = "block";
      // Menghitung luas lingkaran
      var diameter = document.getElementById("form-4-diameter").value;
      var jarijari = diameter / 2;
      var volume   = (4/3) * 3.14159 * Math.pow(jarijari, 3);
      hasil = hasil +
      "<p>Diketahui:<br>" +
      "Diameter = " + diameter + "<br>" +
      "Jari-jari = " + jarijari + "</p>" +
      "<p>Ditanyakan: Volume</p>" +
      "<p>Rumus volume = (3 / 4) x phi x (jari-jari ^ 3)</p>" +
      "<p>Volume = " + (3/4) + " x " + 3.14159 + " x " + Math.pow(jarijari, 3) + "<br>" +
      "Volume = " + volume + "</p>";
      break;
    default:
      hasil = hasil + "<p>Ada bug!</p>";
  };
  document.getElementById("hasil").innerHTML = hasil;
}
