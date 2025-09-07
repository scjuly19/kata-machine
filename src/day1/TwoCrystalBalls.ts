export default function two_crystal_balls(breaks: boolean[]): number {
// Given two crystal balls that will break if dropped from high enough distance, dtermine the exact spot in which it will break in the most optimized way.
const jmpAmount=Math.floor(Math.sqrt(breaks.length))
let i=jmpAmount
for(;i<breaks.length;i+=jmpAmount){
    console.log('i===>',i)
    if(breaks[i]) break;
}
i-=jmpAmount
console.log('i-after==>',i)
for(let j=i;j<breaks.length;j++){
    if(breaks[j]) return j
}
return -1

}
