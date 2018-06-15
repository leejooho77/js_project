const fs = require('fs');

if(process.argv.length !== 4) console.log("USAGE: node convert_file.js [file1] [file2]");
else {
	const read = process.argv[2];
	const write = process.argv[3];

	if(fs.existsSync(read)) {
		const dataFromReadFile = fs.readFileSync(read);
		fs.writeFileSync(write, String(dataFromReadFile).toUpperCase());
	} else {
		console.log(`ENOENT: no such file or directory, open '${read}'`);
	}
}