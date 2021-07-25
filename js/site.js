let sets = [];

function addNumber(){
    var num = document.getElementById('addNumber').value;
    console.log(num);
    if(num == null || num == "" || num == undefined){
        return;
    }
    var numbers = getNumbers();
    numbers.push(parseInt(num));
    localStorage.setItem('numbers', JSON.stringify(numbers));
    document.getElementById("numbersArray").textContent = numbers.toString();
}

function getNumbers(){
    var numbers = JSON.parse(localStorage.getItem('numbers')) || [10, 15, 3, 7, 1, 2, 4, 5];
    return numbers;
}

function loadData() {
    document.getElementById("numbersArray").textContent = getNumbers().toString();
}

function getData() {
    var numberToSearch = document.getElementById("numberToSearch").value;
    var numbers = getNumbers();
    if (numberToSearch == null || numberToSearch == "undefined") {
        numberToSearch = 0;
    }
    console.log(numberToSearch);
    let result = checkSum(numbers, numberToSearch);
    if (result) {
        document.getElementById("results").textContent = "Success : " + sets.toString();
    }else{
        document.getElementById("results").textContent = "Failed : No numbers in the list provided equaled your search number";
    }
}

function checkSum(numArray, totalSum) {
    sets = [];
    for (let i = 0; i < numArray.length; i++) {
        addSum(numArray, numArray[i], totalSum);
    }
    if (sets.length > 0) {
        return true;
    }
    return false;
}

function addSum(numArray, index, totalSum) {
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] + index == totalSum) {
            sets.push(`${numArray[i]} + ${index} = ${totalSum}`);
        }
    }
}