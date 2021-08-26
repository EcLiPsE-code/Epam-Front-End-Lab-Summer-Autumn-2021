function *permute(str, n = str.length) {
    if (n < 2) yield str
    else {
        for (let i = 0; i < n; i++) {
            yield *permute(str, n - 1)
            const j = n % 2 ? 0 : i;
            [str[n-1], str[j]] = [str[j], str[n-1]]
        }
    }
}

for (let item of permute('A'.split(''))){
    console.log(item.join())
}