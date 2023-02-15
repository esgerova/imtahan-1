let numbers = [1,4,7,8,3,5,0,2,4,6,12,15,18,46,45,48,97,84]

function countEvensAndOdds() {
    const odds = (numbers.filter((num) => num % 2 === 0));
    let oddLeng= odds.length
    console.log(oddLeng);

    const evens = (number.filter((num) => num % 2 === 1));
    let evenLeng= evens.length
    console.log(evenLeng);

}

countEvensAndOdds