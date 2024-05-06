export class practice {
    vowelCount() {
        let str = "Punit is an Automation engineer";
        let count = 0;

        let strNew = str.toLowerCase();
        console.log(strNew);
        let vowel = ["a", "e", "i", "o", "u"];
        strNew.split("").forEach((char) => {
            if (vowel.includes(char)) {
                console.log("inside if block");
                count++;
            }
            return count;

        })
        console.log(count);
    }

    reverseStr() {
        let str = "PUNEET";
        let newStr = [];
        // str.split("").forEach((char)=>{
        //     newStr.push(char);

        // })
        for (let a = str.length; a >= 0; a--) {
            newStr.push(str[a]);

        }
        console.log(newStr);
    }
    findLargestNumber() {
        let arr = ['2', '3', '1', '9', '7'];
        let higstNum = 0;
        for (let i in arr) {
            if (arr[i] > higstNum) {
                higstNum = arr[i]
            }
            // else{
            //     higstNum = arr[i+1]
            // }
        }
        console.log(higstNum);
    }
    charCount() {
        let word = "Hello Word";
        let newWORD = word.split("");
        let result = {};
        let count = 0;
        // for (let i = 0; i < word.length; i++) {
        //     let ch = word.charAt(i);
        //     if (!result[ch]) {
        //         result[ch] = 1;
        //     } else {
        //         result[ch] += 1;
        //     }
        // }
        let newArr = newWORD.reduce((prev , curr)=>{
           // prev[curr] = prev[curr]?prev[curr]+1:1;
           prev[curr] = (prev[curr] || 0) + 1;
            return prev;
            
        },{})
        console.log(newArr);
        /* let newArr = newWORD.reduce((prev , curr)=>{...}, {}): This line uses the reduce() method on the newWORD array. The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. In this case, the accumulator is an empty object {} initially.
(prev , curr) are parameters of the callback function used in the reduce() method. prev represents the accumulator (which is an object) and curr represents the current element being processed in the array, which is each individual character in the string.
Inside the callback function:
     prev[curr] = prev[curr] ? prev[curr] + 1 : 1;: This line checks if the current character curr already exists as a property in the prev object (the accumulator). If it does, it increments the count of that character by 1. If it doesn't, it initializes the count of that character to 1.
    return prev;: This line returns the updated accumulator object after each iteration. */
    }
    palindrome() {
        let word = "ABCCBA";
        //const newword = [...word];
        // for(let i =0;i <word.length/2; i++){

        //     if(word[i]== word[word.length-i]){
        //         //console.log("inside the block is >>>>  "+word[word.length-i]);
        //         return true;
        //     }else{
        //         return false;
        //     }

        // }
        let newWord = word.split('');
        let reverseWord = newWord.reverse().join('');
        if (newWord == reverseWord) {
            console.log("the word is palindrone");
        }
        console.log(newWord.reverse().join(''));

    }
    evenArray() {
        let arr = ['12', '14', '13', '19', '20'];
        let newArr = [];
        // for(let i in arr){
        //     if(arr[i]%2 ==0){
        //         newArr.push(arr[i]) 
        //     }else{
        //         console.log(arr[i]+" is not an even number");
        //     }
        // }
        let evenArr = arr.filter(evenFunction);
        function evenFunction(value) {
            return value % 2 == 0;
            console.log("inside block");
        }
        console.log(evenArr);
        evenArr
    }

    PerformMultiply(){
        let arra = [2,5,4,7];
        let arr = arra.map((value)=>{
            return value*2;
        })
        console.log(arr);

    }

    filterArray(){

        let arr = [34, 45, 32, 1, 6, 10, 6];

       let arr2= arr.filter((value)=>{
            return value <=10;
        })
        console.log(arr2);
    }
    reduceMethod(){
        let arr = [34, 45, 32, 1, 6, 10, 6];
        let arr2 = arr.reduce((a1, a2)=>{
            return a1+a2;
        })
        console.log(arr2);
    }


}