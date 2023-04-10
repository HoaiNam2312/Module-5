// happy coding 👻
function fibonacii(n) {
    var a = 1;
    var b = 1;
    var sum = 0;
    if (n == 1 || n == 2) {
        sum = 1;
        console.log(sum);
    }
    else if (n > 2) {
        for (var i = 2; i < n; i++) {
            sum = a + b;
            a = b;
            b = sum;
        }
        console.log(sum);
    }
    else {
        console.log("Vui lòng nhập số lớn hơn 0");
    }
}
fibonacii(15);
