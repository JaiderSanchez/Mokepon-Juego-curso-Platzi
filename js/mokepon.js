function startGame() {
    let buttonPetPlayer = document.getElementById('button-pet')
    buttonPetPlayer.addEventListener('click', selectPetPlayer)
}

function selectPetPlayer() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya');

    if (inputHipodoge.checked) {
        alert('You selected a Hipodoge')
    } else if (inputCapipepo.checked) {
        alert('You selected a Capipepo')
    } else if (inputRatigueya.checked) {
        alert('You selected a Ratigueya')
    } else {
        alert('Select your pet first')
    }
}

window.addEventListener('load', startGame)
