function year(){
    let birthday = document.getElementById('birthday').value;
    let date = new Date(birthday);
    birthdayYear = date.getFullYear();
    let now = new Date();
    nowYear = now.getFullYear();
    if(date.getMonth() == now.getMonth()){
        if(date.getDate() >= now.getDate()){
            document.getElementById('result-year').innerHTML = 'Số tuổi hiện tại là ' + (nowYear - birthdayYear - 1) + ' tuổi' 
        } else{
            document.getElementById('result-year').innerHTML = 'Số tuổi hiện tại là ' + (nowYear - birthdayYear) + ' tuổi' 
        }
    } if (date.getMonth() < now.getMonth()){
        document.getElementById('result-year').innerHTML = 'Số tuổi hiện tại là ' + (nowYear - birthdayYear) + ' tuổi' 
    } if (date.getMonth() > now.getMonth()){
        document.getElementById('result-year').innerHTML = 'Số tuổi hiện tại là ' + (nowYear - birthdayYear - 1) + ' tuổi' 
    }
}

function may_tinh_phen(){
    const PHEP_CHIA = '/';
    let so_thu_1, so_thu_2, toan_tu;
    so_thu_1 = document.getElementById('so_thu_1').value;
    so_thu_2 = document.getElementById('so_thu_2').value;
    toan_tu = document.getElementById('toan_tu').value;
    if(toan_tu == PHEP_CHIA){
        if(so_thu_2 == 0){
            alert('Không có phép chia cho 0');
            return; //kết thúc chương trình
        }
    }
    result = eval(so_thu_1 + toan_tu + so_thu_2);  // hàm eval tính toán biểu thức dạng string
    document.getElementById('result-may-tinh-phen').innerHTML = result;
}

//máy tính

function setInput(value){
    document.getElementById('input').value += value;
}

function calculator(){
    let input;
    input = document.getElementById('input').value;
    result = eval(input);
    document.getElementById('input').value = result;
}

function calculatorMinus(){
    let input;
    input = document.getElementById('input').value;
    result = eval(input * -1);
    document.getElementById('input').value = result;
}

function calculatorPercent(){
    let input;
    input = document.getElementById('input').value;
    result = eval(input * 0.01);
    document.getElementById('input').value = result;
}

function clearInput(){
    document.getElementById('input').value = '';
}

// hàm khi click btn del thì xóa 1 số ở cuối chuỗi input
// hàm slice(0, -1) cắt chữ số cuối cùng trong chuỗi
function Del(){
    let input = document.getElementById('input').value;
    let newInput = input.slice(0, -1);
    document.getElementById('input').value = newInput;
}

