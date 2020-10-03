var plusOne = function(digits) {
    for(let i = digits.length - 1;i >= 0;i--){
        if(digits[i] == 9){
            digits[i] = 0;
        }else{
            digits[i]++;
            return digits;
        }
    }
    //如果数组长度为1，数组项为9，则数组unshift(1)
    digits.unshift(1);
    return digits;
};
