// window.addEventListener('keyup', function (event) {
//     console.log(event);
//     let key = +event.key;
//     switch (key) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//         case 9:
//         case 10:
//             alert('Bạn đã nhập phím ' + key)
//             break;
//         default:
//             alert('Vui lòng nhập số từ 1 ~ 10')
//     }
// })

function nguyen_am() {
    let input = document.getElementById('input').value;
    let message = '';
    switch (input) {
        case 'a':
        case 'e':
        case 'o':
        case 'i':
        case 'u':
            message = input + ' là nguyên âm';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'p':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            message = input + ' là phụ âm';
            break;
        default:
            message = 'Vui lòng nhập chữ cái';

    }
    document.getElementById('result').innerHTML = message;
}

function diem_dai_hoc() {
    let toan = parseInt(document.getElementById('toan').value);
    let van = parseInt(document.getElementById('van').value);
    let anh = parseInt(document.getElementById('anh').value);
    let khuvuc = document.getElementById('khuvuc').value;
    let diemcong = 0;
    console.log(khuvuc);
    switch (khuvuc) {
        case 'KV1':
            diemcong = 0.75;
            break;
        case 'KV2':
            diemcong = 0.25;
            break;
        case 'KV2-NT':
            diemcong = 0.5;
            break;
        case 'KV3':
            diemcong = 0;
            break;
    }
    let tongdiem = toan + anh + van + diemcong
    document.getElementById('total-mark').innerHTML = 'Tổng điểm ĐH khối D của bạn là ' + tongdiem +' điểm'
}

function quiz() {
    let mot = document.getElementById('1D').checked;
    let hai = document.getElementById('2C').checked;
    let ba = document.getElementById('3D').checked;
    let message = '';
    switch (mot) {
        case true:
            message = 'Câu 1 đúng,';
            break;
        default:
            message = 'Câu 1 sai,'
    }
    switch (hai) {
        case true:
            message += ' câu 2 đúng,';
            break;
        default:
            message += ' câu 2 sai,'
    }
    switch (ba) {
        case true:
            message += ' câu 3 đúng.';
            break;
        default:
            message += ' câu 3 sai.'
    }
    document.getElementById('result-quiz').innerHTML = message;
}