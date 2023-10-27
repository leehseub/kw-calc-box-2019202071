const { test, expect} = require("@jest/globals");
const { spawn } = require("child process");

test("Insufficient params", () => {
	const main = spawn("node", ["main.js","avg"]);
    const outputs = [];
    main.stdout.on("data",(output)=> {
        outputs.push(output);
    });

    main.std.on("end", () =>{
        const output = output.join("").trim();
        expect(output).toBe("Insufficient parameter!");
    });
});

