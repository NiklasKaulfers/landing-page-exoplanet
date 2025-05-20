document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const playground = document.getElementById('playground');
    const menuModal = document.getElementById('menu-modal');

    startButton.addEventListener('click', () => {
        startGame(4, 4);
    });

    function startGame(width, height) {
        playground.innerHTML = '';
        menuModal.style.display = 'none';
        const tiles = createTiles(width, height);
        renderTiles(tiles);
    }

    function createTiles(width, height) {
        const tiles = [];
        for (let x = 0; x < width; x++) {
            tiles[x] = [];
            for (let y = 0; y < height; y++) {
                tiles[x][y] = { active: false };
            }
        }
        return tiles;
    }

    function renderTiles(tiles) {
		playground.innerHTML = '';
        tiles.forEach((row, x) => {
            const rowElement = document.createElement('div');
            row.forEach((tile, y) => {
                const tileElement = document.createElement('div');
                tileElement.className = `tile ${tile.active ? 'tileActive' : 'tileInactive'}`;
                tileElement.addEventListener('click', () => onTileClick(x, y, tiles));
                rowElement.appendChild(tileElement);
            });
            playground.appendChild(rowElement);
        });
    }

    function onTileClick(x, y, tiles) {
        toggleTile(x, y, tiles);
        if (tiles[x - 1] && tiles[x - 1][y]) toggleTile(x - 1, y, tiles);
        if (tiles[x + 1] && tiles[x + 1][y]) toggleTile(x + 1, y, tiles);
        if (tiles[x][y - 1]) toggleTile(x, y - 1, tiles);
        if (tiles[x][y + 1]) toggleTile(x, y + 1, tiles);
        renderTiles(tiles);
    }

    function toggleTile(x, y, tiles) {
        tiles[x][y].active = !tiles[x][y].active;
    }
});