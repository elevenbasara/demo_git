function moveUp() {
    let currentTop;
    //slice(start, end) :hàm cắt chuỗi '40px' -> '40'
    currentTop = parseInt(document.getElementById('tank').style.top);
    document.getElementById('tank').style.top = currentTop - 10 + 'px';
    explosion();
}

function moveLeft() {
    //parseInt(): ép kiểu dữ liệu sang số, cái gì k chuyển đc thì bỏ
    let currentLeft = parseInt(document.getElementById('tank').style.left);
    document.getElementById('tank').style.left = currentLeft - 10 + 'px';
    explosion();
}

function moveRight() {
    let currentRight = parseInt(document.getElementById('tank').style.left);
    document.getElementById('tank').style.left = currentRight + 10 + 'px';
    explosion();
}

function moveDown() {
    let currentBottom = parseInt(document.getElementById('tank').style.top);
    document.getElementById('tank').style.top = currentBottom + 10 + 'px';
    explosion();
}

function explosion() {
    let tankWidth = parseInt(document.getElementById('tank').style.width);
    let tankTop = parseInt(document.getElementById('tank').style.top);
    let tankLeft = parseInt(document.getElementById('tank').style.left);
    let boomTop = parseInt(document.getElementById('boom').style.top);
    let boomLeft = parseInt(document.getElementById('boom').style.left);

    if (Math.abs(tankTop - boomTop) <= tankWidth && Math.abs(tankLeft - boomLeft) <= tankWidth) {
        document.getElementById('tank').src = 'images/explosion.png';
        document.getElementById('boom').style.display = 'none';
        alert('Game Over');
    }
}
