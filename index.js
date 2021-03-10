// Code your solutions in this file

function writeCards(nameArr, event) {
    let newArr = []
    for (let i = 0; i < nameArr.length; i++) {
    newArr.push(`Thank you, ${nameArr[i]}, for the wonderful ${event} gift!`);
    
  }

  return newArr;
}

function countDown(num) {
    let i = 0
    while (num >= 0){
        console.log(num--)
    }
}
