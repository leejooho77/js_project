const fs = require('fs');
if(process.argv.length != 3) console.log("USAGE: node print_file.js [file]")
else {
	const fileName = process.argv[2];

	if(fs.existsSync(fileName)) {
		const dataFromFile = fs.readFileSync(fileName);
		const convertedVersion = String(dataFromFile).toUpperCase();
		console.log(convertedVersion);
	} else {
		console.log(`ENOENT: no such file or directory, open '${fileName}'`);
	}
}