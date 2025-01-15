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

    selectPetEnemy()
}

function selectPetEnemy() {
    let randomAttack = random(1, 3)
    let spanPetEnemy = document.getElementById('mascot-enemy')

    if (randomAttack == 1) {
        // Hipodoge
        spanPetEnemy.innerHTML = 'Hipodoge'
    } else if (randomAttack == 2) {
        // Capipepo
        spanPetEnemy.innerHTML = 'Capipepo'
    } else {
        // Ratigueya
        spanPetEnemy.innerHTML = 'Ratigueya'
    }
}

function random(min , max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', startGame)
