
const theme = document.getElementById("theme")
theme.addEventListener("click", thememode)


function thememode(){
    let clock = document.getElementById("clock")
    let theme = document.getElementById("theme").getAttribute("tema")

    switch (theme){
        case 'darkmode':
            document.body.style.backgroundColor="#ABD9FF";
            clock.style.backgroundColor= "#FFFFFF";
            clock.style.border= "2px solid #1C6DD0";
            clock.style.color="black";
            clock.style.textShadow="4px 2px white";
            document.getElementById("theme").setAttribute("tema", "lightmode")
            document.getElementById("theme_ico").setAttribute("src", "img/moon_ico.png")
            theme_ico.style.filter="invert(0)"
            break;

        case 'lightmode':
            document.body.style.backgroundColor="#000000d7";
            clock.style.backgroundColor= "#00000031";
            clock.style.border ="2px solid #00ff37";
            clock.style.color = "#00ff0d";
            clock.style.textShadow = "2px 2px #000000";
            document.getElementById("theme").setAttribute("tema", "darkmode")
            document.getElementById("theme_ico").setAttribute("src", "img/sun_ico.png")
            theme_ico.style.filter="invert(1)"
            break;
    }
}

function relogio (){
    let date = new Date();
    let hora = date.getHours();
    let min = date.getMinutes();
    let seg = date.getSeconds();

    let dia = date.getDate();
    let mes = date.getMonth()+1;
    let ano = date.getFullYear();

    if (hora < 10){
        hora = "0" + hora
    }
    
    if (min < 10){
        min = "0" + min
    }

    if (seg < 10){
        seg= "0" + seg
    }

    if (dia <10){
        dia = "0" + dia
    }

    if (mes <10){
        mes = "0" + mes
    }


    let relogio = `${hora}:${min}:${seg}`
    let data = `${dia}/${mes}/${ano}`
    let clock = document.getElementById("clock");

    clock.innerHTML = `<span>${relogio}</span> <span>${data}</span>`

}
setInterval (relogio, 1000);