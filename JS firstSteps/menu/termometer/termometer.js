    const tempInput = document.getElementById("temperature-input");
    const indicator = document.getElementById("termometer-indicator");

    function updateTermometer(){
        // Algoritmul functiei:
        // * sa se gaseasca campul "temperature-input"
        // * sa se gaseasca div-ul "termometer-indicator"
        // * sa se citeasca valoarea temperaturii din input
        // * sa se verifice daca valoarea este cuprinsa intre -20..+50 grade C
        // * sa se atribuie proprietatea .style.height indicatorului termometrului astfel incat fiecare grad mareste latimea cu 3px
        
        
        const data = tempInput.value;

        const width = 60;
        const unit = 3;
    

        if( data >= -20 && data <= 50 ){

            const newWidth = data * unit;
            indicator.style.width = (width + newWidth) + "px";
            console.log(indicator.style.width)

        }
    
    }

    function toggleTemp(){
        
        let digitEl = null;     // cream o variabila care va tine in ea numarul ID-ului pentru optiune
        let newDigit = null;    // noua valoare care va iesi dupa iteratie

        const tempSelectEl = document.getElementById("tempSelect");         // crearea unui link catre selector

        for( let i = 0; i <= 7; i++){    // ciclu pentru a parcurge fiecare id a optiunilo

            digitEl = document.getElementById("digit" + i)
            
            newDigit = tempSelectEl.value === 'Farenheit' ? toFarenheit(digitEl.innerHTML) : toCelsius(digitEl.innerHTML) 

            digitEl.innerHTML = Math.round(newDigit);
        } 

        if(tempInput.value != ""){
            tempInput.value = Math.round(tempSelectEl.value === 'Farenheit' ? toFarenheit(tempInput.value) : toCelsius(tempInput.value));
        }

    }

    function toFarenheit(celsius){

        return celsius * 1.8 + 32;
    }
    function toCelsius(farenheit){

        return (farenheit - 32) * 0.55555555555;
        
    }