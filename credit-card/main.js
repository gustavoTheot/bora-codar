

function formatNumberCard(input) {
    const numberShownOnCard = document.querySelector('.numberCardThisInput')
    const cardNumberField = document.querySelector('.cardNumberField')
    let myNumberCard = cardNumberField.value.replace(/\D/g, '')

    // limita o campo em 16 dígitos
    myNumberCard = myNumberCard.substring(0, 16)

    // divide o número emg rupo de 4 dígitos
    const groups = myNumberCard.match(/.{1,4}/g)
    numberWithDot = groups.join('.')
    
    input.value = numberWithDot

    numberSpacehDot = groups.join('  ')
    numberShownOnCard.innerHTML = numberSpacehDot
    
}




