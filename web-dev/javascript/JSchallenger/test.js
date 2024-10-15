function fun (a, b) {
    let cnt = 0
    for (c of b)
    {
       if (a === c)
          cnt++;
    }
    return b.split(a).length - 1
     
}

const x = fun('m', 'how many times does the character occur in this sentence?');
console.log(x);
