const form = document.getElementById("dateForm");
form.addEventListener("sumbit", function(event){
    event.preventDefault();
    const day = Number(document.getElementById("inputDay").value);
    const month = Number(document.getElementById("inputMonth").value);
    const year = Number(document.getElementById("inputYear").value);
    if(
        !Number.isInteger(day) ||
        !Number.isInteger(month) ||
        !Number.isInteger(year) ||
        day < 1 || month < 1 || month > 12 ||
        year < 1 || year > 9999
    ){
        alert("Vui lòng nhập ngày, tháng , năm hợp lệ!");
        return;
    }
    const date = new Date(year, month -1, day);
    if(
        date.getFullYear() !== year ||
        date.getFullMonth() !== month -1 ||
        date.getFullDate() !== day
    ){
        alert("Ngày tháng năm không hợp lệ!");
        return;
    }
    document.getElementById("year").textContent = year;
    document.getElementById("month").textContent = month;
        "Tháng " + month;
    document.getElementById("day").textContent = day;
    const weekdays = [
        "Chủ nhật",
        "Thứ hai",
        "Thứ ba",
        "Thứ tư",
        "Thứ năm",
        "Thứ sáu",
        "Thứ bảy"
    ];
    document.getElementById("weekday").textContent =
        weekdays[date.getDay()];
    const now = new Date();
    let greeting = "";
    if (hour >= 5 && hour < 12){
        greeting = "Chào buổi sáng!";
    }else if(hour >=12 && hour < 18){
        greeting = "Chào buổi chiều!"
    }else if(hour >=18 && hour < 22){
        greeting = " Chào buổi tối!";
    }else{
        greeting = " Chúc bạn ngủ ngon!";
    }
    document.getElementById("greeting").textContent =
        greeting;
});