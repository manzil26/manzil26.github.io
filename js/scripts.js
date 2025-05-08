/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function formValidation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value; 
    var message = document.getElementById("message").value;

    // Validasi nama gak boleh ada simbol
    var nameVal = name.trim();
    if (!/^[A-Za-z\s]+$/.test(nameVal)) {
        Swal.fire({
            title: "Pesan Kesalahan",
            text: "Nama tidak boleh mengandung angka atau simbol. Hanya huruf dan spasi yang diperbolehkan",
            icon: "error"
        });
        return false;
    }

    // Validasi email 
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        Swal.fire({
            title: "Pesan Kesalahan",
            text: "Email tidak valid",
            icon: "error"
        });
        return false;
    }

    // Validasi nomor telepon: hanya angka dan minimal 10 digit
    if (!/^\d{10,}$/.test(phone)) {
        Swal.fire({
            title: "Pesan Kesalahan",
            text: "Nomor telepon tidak valid. Hanya angka dan minimal 10 digit",
            icon: "error"
        });
        return false;
    }

   
    // Validasi pesan: minimal 10 karakter
    if (message.length < 10) {
        Swal.fire({
            title: "Pesan Kesalahan",
            text: "Pesan minimal 10 karakter",
            icon: "error"
        });
        return false;
    }

    Swal.fire({
        title: "Sukses!",
        text: "Pesan Anda telah terkirim",
        icon: "success",
        confirmButtonText: "OK"
    });
    return true;
}

