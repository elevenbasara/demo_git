function giai_phuong_trinh_bac_nhat(){
    var a, b;
    a = +document.getElementById('a').value;
    b = +document.getElementById('b').value;
    if(a == 0){
        if(b == 0){
            document.getElementById('result').innerHTML = 'PT vô số nghiệm';
        } else{
            document.getElementById('result').innerHTML = 'PT vô nghiệm';
        }
    } else{
        document.getElementById('result').innerHTML = 'Nghiệm x = '+ -b/a;
    }
}

function giai_phuong_trinh_bac_hai(){
    var a, b, c, d;
    a = +document.getElementById('a2').value;
    b = +document.getElementById('b2').value;
    c = +document.getElementById('c2').value;
    d = b*b - 4*a*c;
    if(a==0){
        document.getElementById('result2').innerHTML = 'PT bậc nhất';
    } else{
        if(d <= 0){
            if(d==0){
                document.getElementById('result2').innerHTML = 'PT có nghiệm khép x = '+ -b/2*a;
            } else{
                document.getElementById('result2').innerHTML = 'PT vô nghiệm';
            }
        } else{
            document.getElementById('result2').innerHTML = 'PT có 2 nghiệm x1 =' + (-b + Math.sqrt(d))/2*a + ' và x2 = ' + (-b - Math.sqrt(d))/2*a;
        }
    }
}