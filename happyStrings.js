
function a (n, k) {

  const elems = ["a", "b", "c"];
  const generateCad = (n, elems) => {
    const res = [];
    function backtrack(currentcad) {
      if (currentcad.length === n) {
        res.push(currentcad);
        return;
      }
      for (const el of elems) {
        if (currentcad.length === 0 || currentcad[currentcad.length - 1] !== el) {
          backtrack(currentcad + el);
        }
      }
    }
    backtrack("");
    return res;
  };
  if ( generateCad(n, elems).length < k) return ""
  return generateCad(n, elems)[k-1]
}

// Ejemplo de uso:
console.log(a(1, 3)); // ['a', 'b', 'c']
console.log(a(1, 4)); // ['ab', 'ac', 'ba', 'bc', 'ca', 'cb']
console.log(a(3, 9)); // ['aba', 'abc', 'aca', 'acb', 'bab', 'bac', 'bca', 'bcb', 'cab', 'cac', 'cba', 'cbc']
