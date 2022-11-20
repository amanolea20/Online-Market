function addtocart(pret){
    var ValTotala = Number(document.getElementById("ValTotala").innerHTML);
    ValTotala += pret;
    document.getElementById("ValTotala").innerHTML = ValTotala;
}
function deleteEsteGol(){
    var ValTotala = Number(document.getElementById("ValTotala").innerHTML);
    var prag = 100;
    if(ValTotala >= prag)
    {
    document.getElementById("gol").style.display = "none";
    }
    else
    {
        document.getElementById("gol").style.display = "gol";
    }   
}
function show(linie){
    document.getElementById("produs"+linie).style.display="block";
}

function deleteRow(linie){
    document.getElementById("produs"+linie).style.display="none";

    var ValTotala= Number(document.getElementById("valTotal").innerHTML);
    ValTotala-= Number(document.getElementById("total"+linie).innerHTML);
    document.getElementById("valTotal").innerHTML=ValTotala;
}

function upQty(linie, pret){
    var currentQty=Number(document.getElementById("qty"+linie).innerHTML);
    currentQty++;
    document.getElementById("qty"+linie).innerHTML=currentQty;
    
    
    var pretInitial=Number(document.getElementById("total"+linie).innerHTML);
    var pretTotal=Number(document.getElementById("pretInitial"+linie).innerHTML)*currentQty;
    document.getElementById("total"+linie).innerHTML=pretTotal;
    
    
    var ValTotala= Number(document.getElementById("ValTotala").innerHTML);
    ValTotala=Number(document.getElementById("total1").innerHTML)+Number(document.getElementById("total2").innerHTML);
    document.getElementById("ValTotala").innerHTML=ValTotala;
    }
    function downQty(linie, pret){
        var currentQty=Number(document.getElementById("qty"+linie).innerHTML);
        if(currentQty>0){
        currentQty--;
        document.getElementById("qty"+linie).innerHTML=currentQty;
        
        var pretTotal=Number(document.getElementById("total"+linie).innerHTML);
        pretTotal=Number(document.getElementById("pretInitial"+linie).innerHTML)*currentQty;
        document.getElementById("total"+linie).innerHTML=pretTotal;
        
        var ValTotala= Number(document.getElementById("ValTotala").innerHTML);
        ValTotala=Number(document.getElementById("total1").innerHTML)+Number(document.getElementById("total2").innerHTML);
        document.getElementById("ValTotala").innerHTML=ValTotala;
        }
        }
