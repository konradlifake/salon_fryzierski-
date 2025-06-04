function oblicz() {
    var krótkie = document.getElementById("krótkie").checked;
    var średnie = document.getElementById("Średnie").checked;
    var półdługie = document.getElementById("Półdługie").checked
    var długie = document.getElementById("Długie").checked
    
    var promocja = ""

    if (krótkie) {
        promocja == 15
        wynik.innerHTML = "Cena promocyjna : 15 zł"
    }
    if (średnie) {
        promocja == 20
        wynik.innerHTML = "Cena promocyjna : 20 zł"
    }
    if (półdługie) {
        promocja == 30 
        wynik.innerHTML = "Cena promocyjna : 30 zł"
    }
    if (długie) {
        promocja == 40
        wynik.innerHTML = "Cena promocyjna : 40 zł"
    }

};