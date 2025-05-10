/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function(arr1, arr2) {
  const frequency = {};
    for (const num of arr1) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    // Ordenar los elementos de arr1 según arr2
    const result = [];
    for (const num of arr2) {
        if (frequency[num]) {
            result.push(...Array(frequency[num]).fill(num));
            delete frequency[num]; // Eliminar el elemento para no procesarlo de nuevo
        }
    }

    // Agregar los elementos restantes en orden ascendente
    const remaining = Object.keys(frequency).map(Number).sort((a, b) => a - b);
    for (const num of remaining) {
        result.push(...Array(frequency[num]).fill(num));
    }

    return result;
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6])) // [2,2,2,1,4,3,3,9,6,7,19]