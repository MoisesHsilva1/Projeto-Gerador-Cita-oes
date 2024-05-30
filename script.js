const citacoes = [
    "A vida é o que acontece enquanto você está ocupado fazendo outros planos. - John Lennon",
    "O segredo da vida não é ter tudo que você quer, mas amar tudo que você tem. - George Carlin",
    "Acredite que você pode, assim você já está no meio do caminho. - Theodore Roosevelt",
    "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo. - Winston Churchill",
    "A única maneira de fazer um excelente trabalho é amar o que você faz. - Steve Jobs",
    "A melhor maneira de prever o futuro é inventá-lo. - Alan Kay",
    "A sorte favorece a mente bem preparada. - Louis Pasteur",
    "Tudo o que você pode imaginar é real. - Pablo Picasso",
    "A persistência é o caminho do êxito. - Charles Chaplin"

]
// const botaoGerar = document.querySelector('.buttonGerar') 

function GerarCitacoes () {
    const randomCitacao = Math.floor(Math.random() * citacoes.length)
    const MudancaTextCitacao = document.querySelector('.Text-gerar-citacao')
    MudancaTextCitacao.textContent = citacoes[randomCitacao]
}

document.querySelector('.buttonGerar').addEventListener('click', GerarCitacoes);
