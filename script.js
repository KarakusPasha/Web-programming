const buton = document.getElementById("renkButonu");
const sayacEkrani = document.getElementById("sayac");

let tiklamaSayisi = 0;

function rastgeleRenkUret() {
    const karakterler = "0123456789ABCDEF";
    let renk = "#";
    for (let i = 0; i < 6; i++) {
        renk += karakterler[Math.floor(Math.random() * 16)];
    }
    return renk;
}

buton.addEventListener("click", () => {
    const yeniRenk = rastgeleRenkUret();
    document.body.style.backgroundColor = yeniRenk;

    tiklamaSayisi++;
    sayacEkrani.textContent = tiklamaSayisi;
});