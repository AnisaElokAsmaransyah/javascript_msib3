    function hitung(operasi){
        //tangkap id form
        var frm = document.getElementById('calcForm');
        var a1 = parseFloat(frm.angka1.value);
        var a2 = parseFloat(frm.angka2.value);
        if (isNaN(a1) || isNaN(a2)) return alert('Harap masukkan angka');

        switch (operasi) {
            case '+': total = a1 + a2; break;
            case '-': total = a1 - a2; break;
            case '*': total = a1 * a2; break;
            case '/': total = a1 / a2; break;
            case '^': total = Math.pow (a1,a2); break;
            default : total = 0;
        }
        frm.hasil.value = total;
    }
