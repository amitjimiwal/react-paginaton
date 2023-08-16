// function to convert the total pages into an array of integers so that it can be mapped through and displayed
export function setPages(totalpages:number) : number[]{
    const pages = [];
    for(let i = 1; i <= totalpages; i++){
        pages.push(i);
    }
    return pages;
}