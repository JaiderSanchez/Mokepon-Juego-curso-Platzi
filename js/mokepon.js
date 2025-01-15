function startGame() {
    let buttonPetPlayer = document.getElementById('button-pet')
    buttonPetPlayer.addEventListener('click', selectPetPlayer)
}

function selectPetPlayer() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanPetPlayer = document.getElementById('mascot-player');

    if (inputHipodoge.checked) {
        spanPetPlayer.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanPetPlayer.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanPetPlayer.innerHTML = 'Ratigueya'
    } else {
        alert('Select your pet first')
    }
}

window.addEventListener('load', startGame)
