function processLogs(logs, threshold) {
    // Write your code here
    const obj = {};
    const l = logs.length;
    const miSet = new Set()
    for (let i = 0; i < l; i++) {
      const [sender, rec, amount] = logs[i].split(" ");
      for(let j = 0; j < 2; j++) {
        const key = j === 0 ? sender : rec;
        if (!obj[key]) {
          obj[key] = 1;
        } else {
          obj[key]++;
        }
      }
      if (obj[sender] >= threshold) miSet.add(sender);
      if (obj[rec] >= threshold) miSet.add(rec);
    }
    console.log(obj)
    console.log(Array.from(miSet).sort());
  }
  
  const arr = ["28 43 100", "28 78 100", "88 99 200", "88 99 300", "99 32 100", "12 12 15"];
  const arr2 = ["1 2 50", "1 7 70", "1 3 20", "2 2 17"];
  
  processLogs(arr, 2);
  processLogs(arr2, 2);