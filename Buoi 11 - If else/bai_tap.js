/* xuất ra số ngày của tháng
let month = +prompt('Nhập tháng');
if (Number.isInteger(month)) {
    if (month > 12 || month < 0) {
        alert('Tháng không tồn tại');
    } else {
        if (month === 1 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            alert('Tháng có 31 ngày');
        } else if (month === 4 || month === 6 || month === 9 || month === 11) {
            alert('Tháng có 30 ngày');
        } else {
            alert('Tháng có 28 hoặc 29 ngày');
        }
    }
} else {
    alert('Vui lòng nhập số')
}
*/

// đổi năm âm lịch
function doi_nam_am_lich() {
    let birthday = document.getElementById('birthday').value;
    let date = new Date(birthday);
    let year = date.getFullYear();

    //tính Can
    let can = year % 10;
    let message = '';
    if (can == 0) {
        message = 'Canh';
    } else if (can == 1) {
        message = 'Tân';
    } else if (can == 2) {
        message = 'Nhâm';
    } else if (can == 3) {
        message = 'Quý';
    } else if (can == 4) {
        message = 'Giáp';
    } else if (can == 5) {
        message = 'Ất';
    } else if (can == 6) {
        message = 'Bính';
    } else if (can == 7) {
        message = 'Đinh';
    } else if (can == 8) {
        message = 'Mậu';
    } else {
        message = 'Kỷ';
    }
    // tính Chi
    let chi = year % 12;
    if (chi == 0) {
        message += ' Thân';
    } else if (chi == 1) {
        message += ' Dậu';
    } else if (chi == 2) {
        message += ' Tuất';
    } else if (chi == 3) {
        message += ' Hợi';
    } else if (chi == 4) {
        message += ' Tý';
    } else if (chi == 5) {
        message += ' Sửu';
    } else if (chi == 6) {
        message += ' Dần';
    } else if (chi == 7) {
        message += ' Mão';
    } else if (chi == 8) {
        message += ' Thìn';
    } else if (chi == 9) {
        message += ' Tỵ';
    } else if (chi == 10) {
        message += ' Ngọ';
    } else {
        message += ' Mùi';
    }
    document.getElementById('result').innerHTML = message;
}

//năm nhuận
function leapYear() {
    let date = document.getElementById('year').value;
    let dateY = new Date(date);
    let year = dateY.getFullYear();
    let isLeapYear = false;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                isLeapYear = true;
            } else {
                isLeapYear = false;
            }
        } else {
            isLeapYear = true;
        }
    } else {
        isLeapYear = false;
    }

    if(isLeapYear) {
        document.getElementById('result-year').innerHTML = 'Năm ' + year + ' là năm nhuận';
    } else {
        document.getElementById('result-year').innerHTML = 'Năm ' + year + ' là năm không nhuận';
    }
}

//xem bói
function xem_boi() {
    let birthdayMale = document.getElementById('birthday-male').value;
    let dateMale = new Date(birthdayMale);
    let yearMale = dateMale.getFullYear();
    let birthdayFemale = document.getElementById('birthday-female').value;
    let dateFemale = new Date(birthdayFemale);
    let yearFemale = dateFemale.getFullYear();
    year = yearMale - yearFemale;
    if (year % 6 == 0 && year % 12 != 0) {
        document.getElementById('result-xem-boi').innerHTML = 'Hai bạn tuổi tương xung ◑____________◑';
    } else if (year % 4 == 0 && year % 12 != 0) {
        document.getElementById('result-xem-boi').innerHTML = 'Hai bạn tuổi tam hợp ♡＼(￣▽￣)／♡ ';
    } else {
        document.getElementById('result-xem-boi').innerHTML = 'Hai bạn tuy không tam hợp nhưng may không tương xung (＾▽＾) '
    }
}

//xử lý hàm xem bói theo cách khác
function xem_boi_2 () {
    let message = '';
    let birthdayMale = document.getElementById('birthday-male').value;
    let birthdayFemale = document.getElementById('birthday-female').value;

    //tính Chi
    let chiMale = tinh_chi(birthdayMale);
    let chiFemale = tinh_chi(birthdayFemale);
    // xử lý độ phù hợp
    if(Math.abs(chiMale - chiFemale) == 6) {
        message = 'Tứ hành xung';
    } else if (Math.abs(chiMale - chiFemale) == 4) {
        message = 'Tam hợp';
    } else {
        message = 'Bình thường';
    }
    document.getElementById('result-xem-boi').innerHTML = message;
}

//hàm tính Chi
function tinh_chi(birthday) {
    let date = new Date(birthday);
    let year = date.getFullYear();
    let chi = year % 12;
    return chi;
}


