function isValid(s: string): boolean {

    let stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' ||
            s[i] === '{' ||
            s[i] === '[') {
            stack.push(s[i]);
        } else {
            const top = stack.pop();

            if (s[i] === ')' && top !== '(' ||
                s[i] === '}' && top !== '{' ||
                s[i] === ']' && top !== '[') {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid("()[{}"))