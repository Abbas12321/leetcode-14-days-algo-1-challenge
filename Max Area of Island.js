var maxAreaOfIsland = function(grid) {
let rows = grid.length;
let cols = grid[0].length;
let maxsum=0;

for(let row = 0;row<rows;row++){
    for(let col=0;col<cols;col++){
        let sum = DFS(grid,row,col);
        maxsum = Math.max(sum,maxsum);
    }
}
console.log(grid);
return maxsum;

};

var DFS = function (grid,row,col) {
if(row>= grid.length||row<0|| col<0 || col>= grid[0].length ||grid[row][col]!=1 ){
return 0;
}
if(grid[row][col]==1){
grid[row][col]=0;
}
let letfsum = DFS(grid,row,col-1);
let rightsum = DFS(grid,row,col+1);
let upsum = DFS(grid,row+1,col);
let downsum = DFS(grid,row-1,col);

return 1+letfsum+rightsum+upsum+downsum;

}
