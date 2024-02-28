function toBinary(n) {
    let arr = [];
    while (n != 0) {
        if (n % 2 == 0) arr.unshift(0);
        else arr.unshift(1);
        n = Math.floor(n / 2);
    }
    let str = '';
    for (let i of arr) {
        str += i;
    }


    return str;
}

function toDecimal(binStr) { // takes in a binary string
    let n = 0;
    let c = 1;
    for (let i of binStr) {
        n += i * Math.pow(2, binStr.length - c);
        c += 1;
    }
    return n;
}

function removeLeadingZeros(b) {
    let ret;
    for (let i = 0; i < b.length; i++) {
        if (b[i] === '1') {ret = b.slice(i);}
    }

    return ret;

}

function padRight(bin1, bin2) {
    let l1 = bin1.length;
    let l2 = bin2.length;

    if (l1 > l2) {
        bin2 = bin2 + '0'.repeat(l1 - l2);
    } else {
        bin1 = bin1 + '0'.repeat(l2 - l1);
    }
    return [bin1, bin2];
}