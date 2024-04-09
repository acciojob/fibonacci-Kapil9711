function fibonacci(num) {
// your code here
	if(num === 1) return 0;
	if(num === 2) return 1;
	if(num ===3) return 1;
	let num1 = 1;
	let num2 = 2;
	let numNth;
	for(let i = 4; i <= num ; i++) {
		numNth = num1+num2;
		num1 = num2;
		num2 = numNth;	
	}
	return numNth;
	
}

module.exports = fibonacci;
