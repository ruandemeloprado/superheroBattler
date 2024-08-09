    
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function criarCard(){
    
    fetch('https://akabab.github.io/superhero-api/api/all.json')
  .then((resposta) => resposta.json())
  .then((dados) => {
    var cardHeroi1 = document.getElementById('heroi1') 
    var cardHeroi2 = document.getElementById('heroi2')
    var nomeHeroi1 = document.getElementById('nome1')
    var nomeHeroi2 = document.getElementById('nome2')
    var container = document.getElementById('container')
    console.log(dados)
    var numeroAleatorio1 = randomIntFromInterval(1, 563)
    var numeroAleatorio2 = randomIntFromInterval(1, 563)
    cardHeroi1.innerHTML+=`<img class="imagem"src=${dados[numeroAleatorio1].images.sm}> `
    cardHeroi2.innerHTML+=`<img class="imagem"src=${dados[numeroAleatorio2].images.sm}> `
    cardHeroi1.innerHTML +=`<h2 class="nome2">${dados[numeroAleatorio1].name}</h2>`
    cardHeroi2.innerHTML += `<h2 class="nome2">${dados[numeroAleatorio2].name}</h2>`

    cardHeroi1.innerHTML +=`<p class="nome1">Inteligência: ${dados[numeroAleatorio1].powerstats.intelligence}</p>`
    cardHeroi2.innerHTML += `<p class="nome1">Inteligência: ${dados[numeroAleatorio2].powerstats.intelligence}</p>`

    cardHeroi1.innerHTML +=`<p class="nome1">Força: ${dados[numeroAleatorio1].powerstats.strength}</p>`
    cardHeroi2.innerHTML += `<p class="nome1">Força: ${dados[numeroAleatorio2].powerstats.strength}</p>`

    cardHeroi1.innerHTML +=`<p class="nome1">Velocidade: ${dados[numeroAleatorio1].powerstats.speed}</p>`
    cardHeroi2.innerHTML += `<p class="nome1">Velocidade: ${dados[numeroAleatorio2].powerstats.speed}</p>`

    cardHeroi1.innerHTML +=`<p class="nome1">Durabilidade: ${dados[numeroAleatorio1].powerstats.durability}</p>`
    cardHeroi2.innerHTML += `<p class="nome1">Durabilidade: ${dados[numeroAleatorio2].powerstats.durability}</p>`
    
    cardHeroi1.innerHTML +=`<p class="nome1">Poder: ${dados[numeroAleatorio1].powerstats.power}</p>`
    cardHeroi2.innerHTML += `<p class="nome1">Poder: ${dados[numeroAleatorio2].powerstats.power}</p>`

    cardHeroi1.innerHTML +=`<p class="nome1">Combate: ${dados[numeroAleatorio1].powerstats.combat}</p>`
    cardHeroi2.innerHTML += `<p class="nome1">Combate: ${dados[numeroAleatorio2].powerstats.combat}</p>`

    var somaPoder1 = dados[numeroAleatorio1].powerstats.intelligence+dados[numeroAleatorio1].powerstats.strength+dados[numeroAleatorio1].powerstats.speed+dados[numeroAleatorio1].powerstats.durability+dados[numeroAleatorio1].powerstats.power+dados[numeroAleatorio1].powerstats.combat
    var somaPoder2 = dados[numeroAleatorio2].powerstats.intelligence+dados[numeroAleatorio2].powerstats.strength+dados[numeroAleatorio2].powerstats.speed+dados[numeroAleatorio2].powerstats.durability+dados[numeroAleatorio2].powerstats.power+dados[numeroAleatorio2].powerstats.combat
    
    if (somaPoder1 > somaPoder2){
        container.innerHTML+=`<h2 class="vencedor"> O vencedor é: ${dados[numeroAleatorio1].name}</h2>`
    }

    else {
        container.innerHTML+=`<h2 class="vencedor"> O vencedor é: ${dados[numeroAleatorio2].name}</h2>`
    }
  })

}

criarCard()
