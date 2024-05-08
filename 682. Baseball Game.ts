function calPoints(operations: string[]): number {
    let score:number[]=[]
    for (let i:number =0 ;i<operations.length;i++){
        if (Number(operations[i])){
            score.push(Number(operations[i]))
        }
        switch (operations[i]){
            case '+':
                // console.log((score[-1]+score[-2]))
                score.push((score[score.length-1]+score[score.length-2]))
                break;
            case 'D':
                score.push((score[score.length-1]*2))

                break;
            case 'C':
                score.pop()
                break;
            default:
                break;
        }
    }
    return score.reduce((sum,current)=>sum+current,0)
}
console.log(calPoints(["5","2","C","D","+"]))