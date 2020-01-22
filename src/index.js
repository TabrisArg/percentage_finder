function per(numA, numB) {
  const p = (numB / numA) * 100;
  window.alert(numB + " represents" + p + " % persentage of" + numA);
}

var largeNum = window.prompt("Large number");
var smallNum = window.prompt("Small number");

per(largeNum, smallNum);
