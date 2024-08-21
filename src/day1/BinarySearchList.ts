export default function bs_list(haystack: number[], needle: number): boolean {
    let found = false;

    let start = 0;
    let end = haystack.length-1;

    while (start <= end){
        const middle = start + Math.floor( (end-start) /2);
        if (haystack[middle] == needle){
            found = true;
            break;
        }
        if (haystack[middle] > needle){
            end = middle- 1;
        }else {
            start = middle +1;
        }
    }
    return found;
}