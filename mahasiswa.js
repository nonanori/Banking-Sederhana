function Mahasiswa (nama,jurusan){
    this.nama = nama;
    this.jurusan = jurusan;
    this.sapa = function(){
        console.log("Halo, nama saya " + this.nama + "dari jurusan "+ this.jurusan)
    };
}

const mahasiswa1 = new Mahasiswa("Budi", "Sistem Informasi");
const mahasiswa2 = new Mahasiswa("Ani", "Bahasa Inggris");

mahasiswa1.sapa();
mahasiswa2.sapa();

