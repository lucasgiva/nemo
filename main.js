
// declarando variaveis
let btn = document.getElementById("btn");
let movie_box = document.getElementById("movie_box")
let text = document.getElementById("text")
let tentar = document.getElementById("tentar")
let container = document.getElementById("container")
let container_certo = document.getElementById("container_certo")

tentar.addEventListener("click", ()=>{
    let senha01 = document.getElementById("senha01")
    let senha02 = document.getElementById("senha02")
    let senha03 = document.getElementById("senha03")
    
    if(senha01.value == 5 && senha02.value == 5 && senha03.value == 5){

        alert("boa momo, guarda essa senha")

        movie_box.style.display = "flex"; 
        container_certo.style.display = "flex"
        text.innerHTML = "Eu te amo, feliz 2 anos. Continue a nadar comigo"
        btn.style.display = "none"
        container.style.display = "none"

    }else{
        alert("tenta dnvo aí que cê errou")
        senha01.value = ""
        senha02.value = ""
        senha03.value = ""
    }
})