function moveUp(){
    let currentTop;
    //slice(start, end) :hàm cắt chuỗi '40px' -> '40'
    currentTop = +document.getElementById('tank').style.top.slice(0,2);
    document.getElementById('tank').style.top = currentTop - 5 + 'px';
}

function moveLeft(){
    //parseInt(): ép kiểu dữ liệu sang số, cái gì k chuyển đc thì bỏ
    let currentLeft = parseInt(document.getElementById('tank').style.left);
    document.getElementById('tank').style.left = currentLeft - 5 +'px';
}

function moveRight(){
    let currentRight = parseInt(document.getElementById('tank').style.left);
    document.getElementById('tank').style.left = currentRight + 5 +'px';
}

function moveDown(){
    let currentBottom = parseInt(document.getElementById('tank').style.top);
    document.getElementById('tank').style.top = currentBottom + 5 +'px';
}
