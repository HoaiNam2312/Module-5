// happy coding 👻

function fibonacii(n: number) {
    let a:number = 1;
    let b:number = 1;
    let sum:number = 0;
    if (n == 1 || n == 2) {
        sum =1;
        console.log(sum);
    } else if (n > 2) {
        for (let i = 2; i < n; i++) {
            sum=a+b;
            a=b;
            b=sum;
        }
        console.log(sum);
    }else {
        console.log("Vui lòng nhập số lớn hơn 0");
    }
}

fibonacii(15);
