// 

//items in containers
/*
 * Complete the 'numberOfItems' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY startIndices
 *  3. INTEGER_ARRAY endIndices
 */

// function numberOfItems(s, startIndices, endIndices) {
//   // Write your code here
//   const l = startIndices.length;
//   const subStrArr = []
//   for (let i = 0; i < l; i++) {
//     const [start, end] = [startIndices[i], endIndices[i]];
//     const subStr = s.slice(start - 1, end);
//     subStrArr.push(subStr);
//     console.log(subStr)
//     // let count = 0;
//     // for (let j = 0; j < subStr.length; j++) {
//     //   if (subStr[j] === '|') count++;
//     // }
//     // console.log(count);
//   }
//   const res = [];

//   for (let i = 0; i < subStrArr.length; i++) {
//     let count = 0;
//     let currStr = subStrArr[i];
//     if(currStr[0] === '|' && currStr[currStr.length - 1] === '|') {
//       currStr.split('').forEach(el => {
//         if(el === '*') count++;
//       })
//     }
//     if(currStr[0] === '|' && currStr[currStr.length - 1] !== '|') {
//       currStr = currStr.slice(0, currStr.length - (i + 2))
//       currStr.split('').forEach(el => {
//         if(el === '*') count++;
//       })
//     }
//     if(currStr[0] !== '|' && currStr[currStr.length - 1] !== '|') {
//       currStr = currStr.slice(i + 1, currStr.length - (i + 2))
//       currStr.split('').forEach(el => {
//         if(el === '*') count++;
//       })
//     }
//     if(currStr[0] !== '|' && currStr[currStr.length - 1] === '|') {
//       currStr = currStr.slice(i + 1, currStr.length - (i + 2))
//       currStr.split('').forEach(el => {
//         if(el === '*') count++;
//       })
//     }
//     res.push(count);
//   }
//   console.log(res)
// }

// numberOfItems("|**|*|*", [1, 1], [5, 6]);
// numberOfItems("*|*|", [1, 1], [1,3]);
// numberOfItems("*|*|*|", [1, 1], [1,6]);
// const cadena = "|*|**|*"
// const match = cadena.match(regex);
// console.log(match)
// function numberItems1(s, startInds, endInds) {
//   const regex = /^\|.*\|$/;
//   const arr = [];
//   for (let i = 0; i < startInds.length; i++) {
//     console.log("s: ", s);
//     if (startInds[i] === endInds[i]) {
//       continue;
//     }
//     let substr = s.slice(startInds[i] - 1, endInds[i]);
//     console.log("substr: ", substr);
//     if (substr.match(regex)) {
//       let cont = 0;
//       substr.split("").forEach((el) => {
//         if (el === "*") cont++;
//       });
//       arr.push(cont);
//       console.log(substr.match(regex));
//       console.log(regex.test(substr));
//     } else {
//       while (!regex.test(substr) && substr.length > 1) {
//         if (substr[0] !== "|") {
//           substr = substr.slice(1);
//         }
//         if (substr[substr.length - 1] !== "|") {
//           substr = substr.slice(0, substr.length - 1);
//         }
//       }
//       let cont = 0;
//       substr.split("").forEach((el) => {
//         if (el === "*") cont++;
//       });
//       if (cont > 0) arr.push(cont);
//     }
//   }
//   console.log(arr.length > 0 ? arr : 0);
//   return 0;
// }
