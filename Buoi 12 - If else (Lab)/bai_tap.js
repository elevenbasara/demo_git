function changePositionBtn() {
    document.getElementById('no').style.left = Math.floor(Math.random() * 500) + 'px';
    document.getElementById('no').style.top = Math.floor(Math.random() * 500) + 'px';
}
//math.ramdom() để lất vị trí random
//math.floor() để làm tròn số xuống số nguyên gần nhất

function yes() {
    alert('YAY!!!')
}

function checkBox() {
    let good = document.getElementById('good').checked;
    let cheap = document.getElementById('cheap').checked;
    let fast = document.getElementById('fast').checked;

    if (good == true && cheap == true && fast == true) {
        let btnValue = Math.floor(Math.random() * 3);
        console.log(btnValue);
        if (btnValue == 0) {
            document.getElementById('good').checked = false
        } else if (btnValue == 1) {
            document.getElementById('cheap').checked = false
        } else {
            document.getElementById('fast').checked = false
        }
    }
}
