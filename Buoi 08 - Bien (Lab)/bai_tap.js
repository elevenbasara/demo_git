const PI = 3.14;
function chu_vi_hinh_tron(){
    let bankinh;
    bankinh = +document.getElementById('bankinh').value;
    chuvi = 2*bankinh*PI;
    document.getElementById('result-chuvi').innerHTML = chuvi;
}

function dien_tich_hinh_tron(){
    let bankinh;
    bankinh = +document.getElementById('bankinh').value;
    dientich = bankinh*bankinh*PI;
    document.getElementById('result-dientich').innerHTML = dientich;
}

function buc_thu(){
    let ten, diachi, ngay, thang, nam;
    ten = document.getElementById('ten').value;
    diachi = document.getElementById('diachi').value;
    ngay = document.getElementById('ngay').value;
    thang = document.getElementById('thang').value;
    nam = document.getElementById('nam').value;
    document.getElementById('modau').innerHTML = ten + ' thương nhớ,';
    document.getElementById('noidung').style.display = 'block';
    document.getElementById('cuoi').innerHTML = diachi +', ' + 'ngày ' + ngay + ' tháng ' + thang + ' năm ' + nam + '.'; 
}