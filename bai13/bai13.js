function hienthiDongHo(){
    const now = new Date();
    const gio = String(now.getHours()).padStart(2, "0");
    const phut = String(now.getMinutes()).padStart(2, "0");
    const giay = String(now.getSeconds()).padStart(2, "0");
    document.getElementById("dongho").textContent = 
        gio + " : " + phut + " : " + giay;
    const h = now.getHours();
    let loichao;
    if ( h>= 5 && h<12){
        loichao="Chào buổi sáng";
    }else if(h>=12 && h<18){
        loichao="Chào buổi chiều";
    }else {
        loichao="Chào buổi tối";
    }
    document.getElementById("loichao").textContent=loichao;
}
hienthiDongHo();
setInterval(hienthiDongHo, 1000);