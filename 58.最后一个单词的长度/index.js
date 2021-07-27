/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let isAbc = /[a-zA-Z]/.test(s);
    let length;
    if (isAbc) {
        let arr = s.split(" ");
        if (arr.length) {
            arr.forEach((v, i) => {
                if (!v) {
                    if (arr[i - 1]) {
                        length = arr[i - 1].length
                    }
                } else {
                    if (i == arr.length - 1) {
                        length = arr[i].length
                    }
                }
            })
        } else {
            return 0;
        }
        return length;
    } else {
        return 0;
    }

};