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
    document.getElementById("hasil-" + i).style.display = "none";
  };
  document.getElementById("form-" + nomor).style.display = "block";

  return false;
}

function hitung(nomor) {
  switch (nomor) {
    case 1:
      document.getElementById("namafile").innerHTML = 'persegi-hitung.php'; 
      document.getElementById("hasil-1").style.display = "block";
      // Menghitung luas persegi
      var panjang = document.getElementsById("form-1-panjang").value;
      var lebar = document.getElementsById("form-1-lebar").value;
      var luas = panjang * lebar;
      document.getElementById("hasil-1").innerHTML =
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
      var panjang = document.getElementsByName("form-2-panjang")[0].value;
      var lebar = document.getElementsByName("form-2-lebar")[0].value;
      var tinggi = document.getElementsByName("form-2-tinggi")[0].value;
      var volume = panjang * lebar * tinggi;
      document.getElementById("hasil-2").innerHTML =
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
      var diameter = document.getElementsByName("form-3-diameter")[0].value;
      var jarijari = diameter / 2;
      var luas = 3.14159 * jarijari * jarijari;
      document.getElementById("hasil-3").innerHTML =
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
      var diameter = document.getElementsByName("form-4-diameter")[0].value;
      var jarijari = diameter / 2;
      var volume = (4/3) * 3.14159 * Math.pow(jarijari, 3);
      document.getElementById("hasil-4").innerHTML =
      "<p>Diketahui:<br>" +
      "Diameter = " + diameter + "<br>" +
      "Jari-jari = " + jarijari + "</p>" +
      "<p>Ditanyakan: Volume</p>" +
      "<p>Rumus volume = (3 / 4) x phi x (jari-jari ^ 3)</p>" +
      "<p>Volume = " + (3/4) + " x " + 3.14159 + " x " + Math.pow(jarijari, 3) + "<br>" +
      "Volume = " + volume + "</p>";
      break;
    default:
  }
}
