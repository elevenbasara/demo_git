function diem_trung_binh(){
    let vatly, hoa, sinh;
    vatly = +document.getElementById('vatly').value;
    hoa = +document.getElementById('hoa').value;
    sinh = +document.getElementById('sinh').value;
    diemtrungbinh = (vatly + hoa + sinh)/3;
    document.getElementById('diemtrungbinh').innerHTML = 'Điểm trung bình các môn là ' + diemtrungbinh;
}

function doi_don_vi_nhiet(){
    let doC;
    doC = +document.getElementById('doC').value;
    doF = (doC*1.8) + 3;
    document.getElementById('doF').innerHTML = 'Độ F là ' + doF;
}

function lai_kep(){
    let money, month, rate;
    money = +document.getElementById('money').value;
    month = +document.getElementById('month').value;
    rate = +document.getElementById('rate').value;
    result = money*Math.pow((1 + rate/(100*12)),month);
    document.getElementById('result').innerHTML = 'Tổng số tiền có được sau ' + month + ' tháng là ' + result + ' đồng';
}