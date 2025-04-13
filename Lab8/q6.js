function calculate() {
    var ad = parseInt(document.getElementById("adult").value);
    var ch = parseInt(document.getElementById("children").value);
    var ans = ad * 10 + ch * 5;
    var fin = document.getElementById("Final");
    fin.value = ans;
}