function onClick(){
    let day = +document.getElementById('day').value;

    switch (day) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
        case 11:
            document.getElementById('result').innerHTML = "Tháng " + day + " có 31 ngày"
            break;
        case 4:
        case 6:
        case 8:
        case 10:
        case 12:
            document.getElementById('result').innerHTML = "Tháng " + day + " có 30 ngày";
            break;
        case 2:
            document.getElementById('result').innerHTML = "Tháng " + day + " có 28 ngày hoặc 29 ngày";
            break;
        default:
            document.getElementById('result').innerHTML = "Nhập tháng sai rồi";
            break;
    }
}