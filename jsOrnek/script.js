document.getElementById("listeYillar").addEventListener("change", hesapla);

function hesapla(){
    let liste=document.getElementById("listeYillar");
    let secilenYilFiyat=liste.options[liste.selectedIndex].value;

    let sonuc=50/secilenYilFiyat;

    document.getElementById("sonuc").innerHTML="seçtiğiniz Yılda 50 TL ile "+ sonuc.toFixed(2)+"litre benzin alınabiliyordu";
}