// HTML elemanlarını seçiyoruz
const buton = document.getElementById("renkButonu");
const sayacEkrani = document.getElementById("sayac");

let tiklamaSayisi = 0;

// Rastgele HEX renk kodu üreten fonksiyon
function rastgeleRenkUret() {
    const karakterler = "0123456789ABCDEF";
    let renk = "#";
    for (let i = 0; i < 6; i++) {
        renk += karakterler[Math.floor(Math.random() * 16)];
    }
    return renk;
}

// Butona tıklama olayı (Event Listener) ekliyoruz
buton.addEventListener("click", () => {
    // 1. Arka plan rengini değiştir
    const yeniRenk = rastgeleRenkUret();
    document.body.style.backgroundColor = yeniRenk;

    // 2. Tıklama sayacını artır ve ekrana yaz
    tiklamaSayisi++;
    sayacEkrani.textContent = tiklamaSayisi;
});