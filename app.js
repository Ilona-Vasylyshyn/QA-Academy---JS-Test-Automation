console.log("\nNice work! Your first application have been launched.");
console.log("Now, I need to know your name, type it below: ");

let stdin = process.openStdin();

stdin.addListener("data", (txt) => {
    if(txt.toString().trim() === "quit") {
        console.log("\nHave a nice JS trip! Bye-bye");
        stdin.end();
    } else {
        //console.log(`\nHi ${txt.toString().trim()}, nice to meet you at Eleks QA Academy 2018. I am sure you'll become great in your job.`);
        //console.log(`${txt.toString().trim()}, to quit this application you can use 'Ctrl + C' keys, or type 'quit' and hit 'Enter'`); 
        let arr1 = [1, 2, 3, 4, 5, 6];
        let arr2 = [1, 2, 3, 4, 5];
        let thirdArray = [];

        let maxLenght = arr1.length;

        if (maxLenght < arr2.length) {
			maxLenght = arr2.length
        }

        for (let i = 0; i < maxLenght; i++) {
        	let sum = arr1[i];
        	if (arr1[i] && arr2[i]) {
        		sum = arr1[i] + arr2[i];
        	} else {
        		sum = arr1[i] || arr2[i];
        	}
        	thirdArray.push(sum);
        }

        console.log(thirdArray);
    }   
});