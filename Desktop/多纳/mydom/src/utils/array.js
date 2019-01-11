export function randomArr(arr){
    let newArr = [...arr];
    newArr.sort((a,b)=>Math.random()>.5?-1: 1);
   // console.log('arr...', arr, 'newArrr...', newArr);
    return newArr;
  }
  