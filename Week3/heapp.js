function heapsort(array){
    let n=array.length
    for(let i=Math.floor(n/2)-1;i>=0;i--)
    heapify(array,n,i)
    for(let i=n-1;i>=0;i--)
    {
        let temp=array[0]
        array[0]=array[i]
        array[i]=temp
        heapify(array,i,0)
    }
    return array
}
function heapify(array,n,i){
    let largest=i
    let left=2*i+1
    let right=2*i+2
    if(left<n&&array[left]>array[largest])
    largest=left
    if(right<n&&array[right]>array[largest])
    largest=right
    if(largest!=i){
        let temp=array[i]
        array[i]=array[largest]
        array[largest]=temp
        heapify(array,n,largest)
    }

}
console.log(heapsort([3,2,7,-4,0]));
