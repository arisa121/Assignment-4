function resultReport(marks) {
  // You have to write your code here
  if(!Array.isArray(marks)){
    return 'Invalid'
  }
  let total = 0;
  let passCount = 0;
  let failCount = 0;
  for(let mark of marks){
    total = total + mark;
    if(mark >= 40){
        passCount++;
    }
    else{
        failCount++;
    }
  }
  let finalScore = Math.round(total / marks.length);
  return{
    finalScore: finalScore,
    pass: passCount,
    fail: failCount
  };

}
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]))