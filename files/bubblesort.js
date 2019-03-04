module.exports = function bubble_sort(arrayOfElements){
    var length = arrayOfElements.length;
    for(var i=0;i<length-1;i++){
        var swapDone = false;
        for(var j=0;j<length-i-1;j++){
            if(arrayOfElements[j] > arrayOfElements[j+1]){
                var temp = arrayOfElements[j];
                arrayOfElements[j] =arrayOfElements[j+1];
                arrayOfElements[j+1] = temp;
                swapDone = true;
            }
        }
        if(!swapDone){
            break;
        }
    }
    return arrayOfElements;
}
//console.log()