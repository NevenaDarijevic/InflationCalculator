function izracunajInflaciju(){
    //vrednosti iz inputa su ovek tipa sring, iako je type number
    //zbog toga smo morali da parsiramo value iz svih input polja
    let stopa=document.querySelector('#stopa');
    stopa=parseFloat(stopa.value);

    let novac=document.querySelector('#novac');
    novac=parseFloat(novac.value);

    let godina=document.querySelector('#godina');
    godina=parseInt(godina.value);

    //Formula za izracunavanje inflacije za jednu godinu
    let vrednost=novac+(novac*(stopa/100));
 
    for(let i = 1; i < godina; i++){
        vrednost+=vrednost*(stopa/100);
    }
    vrednost=vrednost.toFixed(2);
   let rezultat=document.createElement('div');
   rezultat.className="rezultat";
   rezultat.innerHTML=`Danasnjih ${novac} eura vredi ${vrednost} eura za ${godina} godina.<br><br>`;
   document.querySelector('.container').appendChild(rezultat);
}