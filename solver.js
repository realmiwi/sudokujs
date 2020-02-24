function target(grid, row, col) {
    for (row; row < 9; row++) {
        for (col; col < 9; col++) {
            if (grid[row][col] == 0) {
                return [row, col];
            }
        }
        col = 0;
    }
    return [-1, -1];
}
function solve(grid, row, col) {
    var cell = target(grid, row, col);

    row = cell[0];
    col = cell[1];

    if (row == -1) {
        return true;
    }

    for (var num = 1; num <= 9; num++) {
        if (test(grid, row, col, num)) {
            grid[row][col] = num;
            if (solve(grid, row, col)) {
                return true;
            }
            grid[row][col] = 0;
        }
    }
    return false;
}

function test(grid, y, x, n) {
    for (let i = 0; i < 9; i++) {
        if (grid[y][i] == n) {
            return false;
        }
        if (grid[i][x] == n) {
            return false;
        }
    }

    var xb = Math.floor(x / 3) * 3;
    var yb = Math.floor(y / 3) * 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[yb + i][xb + j] == n) {
                return false;
            }
        }
    }

    return true;
}