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

        function sortThreeNumbers (a, b, c) {
        	if (a > b) {
        		if (b > c) {
        			console.log(a, b, c);
        		} else {
					if (a > c) {
						console.log(a, c, b);
					} else {
						console.log(c, a, b);
					}
        		}
        	} else {
				if (a > c) {
        			console.log(b, a, c);
        		} else {
					if (b > c) {
						console.log(b, c, a);
					} else {
						console.log(c, b, a);
					}
        		}
        	}
        }

        sortThreeNumbers(5, 6, 7);
    }   
});