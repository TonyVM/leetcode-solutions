var numIslands = function(grid) {
    const rows = grid.length;
    const cols = grid.at(0).length
    const visited = new Set();
    let res = 0;
    const dfs = (r, c) => {
      if(visited.has(`${r},${c}`)) {
        return
      };
      visited.add(`${r},${c}`);
  
      const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      for ( const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        if(nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === '1'){
          dfs(nr, nc);
        }
      }
    }
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if(grid[r][c] === '1' && !visited.has(`${r},${c}`)) {
            dfs(r, c);
            res++;
          }
        }
      }
    
    return res;
  };
  
  
  const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];
  
  console.log(numIslands(grid));
  
  