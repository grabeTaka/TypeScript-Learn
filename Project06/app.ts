type Combinable = number | string;

function combine(n1: Combinable, n2: Combinable) {
    let result: string |  number;
    if (typeof n1 === 'number' && typeof n2 === 'number')
        result = n1 + n2
    else 
        result = n1.toString() + n2.toString()
    
    return result
}

