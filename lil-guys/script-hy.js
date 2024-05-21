getIceCold = () => {
    userInput = prompt('What\'s cooler than being cool?');
    if (userInput === 'Ice cold!') {
        console.log('What\'s cooler than being cool?');
        console.log('   Ice cold!');
    }
}

getIceColdLouder = () => {
    userInput = prompt('I said what\'s cooler than being cool?');
    if (userInput === 'ICE COLD!') {
        console.log('I said what\'s cooler than being cool?');
        console.log('   ICE COLD!');
    }
}

giveAlrights = () => {
    userInput = prompt('Alright');
    if (userInput === 'Alright') {
        console.log('Alright');
        console.log('   Alright');
    }
    userInput = prompt('Alright');
    if (userInput === 'Alright') {
        console.log('Alright');
        console.log('   Alright');
    }
    userInput = prompt('Alright');
    if (userInput === 'Alright') {
        console.log('Alright');
        console.log('   Alright');
    }
    userInput = prompt('Alright');
    if (userInput === 'Alright') {
        console.log('Alright');
        console.log('   Alright');
    }
    console.log('Alright, now LADIES!');    
}

singHeyYaFellas = () => {
    getIceCold();
    getIceColdLouder();
    giveAlrights();
}

console.log(singHeyYaFellas());

