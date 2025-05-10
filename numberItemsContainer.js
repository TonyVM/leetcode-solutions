function numberItems(s, startIndices, endIndices) {
  const regex = /^\|.*\|$/;
  const arr = []
  const l = startIndices.length;
  // console.log('Cadena: ', s)
  for (let i = 0; i < l; i++) {
    if(startIndices[i] === endIndices[i]) continue;
    let substr = s.slice(startIndices.at(i) - 1, endIndices.at(i));
    
    const firstPipe = substr.indexOf('|');
    const lastPipe = substr.lastIndexOf('|');
    if(firstPipe === -1 || lastPipe === firstPipe) continue;
    const regAst = /\*/g;

    const contentInPipes = substr.slice(firstPipe, lastPipe)
    
    const astCount = (contentInPipes.match(regAst) || []).length;
    if(astCount > 0) arr.push(astCount);
  }
  // console.log(arr.length > 0 ? arr.length > 1 ? arr : arr[0] : 0);
  return arr.length > 0 ? (arr.length > 1 ? arr : arr[0]) : 0
}
const juegos = [
  ["|**|*|*", [1, 1], [5, 6]], //[2,3]
  ["*|*|", [1, 1], [1, 3]], //[0]
  ["*|*|*|", [1, 1], [1, 6]], //[2]
];

// for (let i = 0; i < juegos.length; i++) {
//   console.log(numberItems(juegos[i][0], juegos[i][1], juegos[i][2]));
// }
// numberItems("|**|*|*", [1, 1], [5, 6])



