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
		Promise.all([
			new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)), // 1
			new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)), // 2
			new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)), // 3
		]).then((results) => {
			console.log(results[0]);
			console.log(results[2]);
		});
    }   
});