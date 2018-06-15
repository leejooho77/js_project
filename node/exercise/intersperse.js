const fs = require('fs');

if(process.argv.length !== 5) console.log('USAGE: node intersperse.js [file1] [file2] [file3]');
else {
	const readFile1 = process.argv[2];
	const readFile2 = process.argv[3];
	let dataFromReadFile1;
	let dataFromReadFile2;

	if(!fs.existsSync(readFile1)) console.log(`ENOENT: no such file or directory, open '${readFile1}'`);
	else if(!fs.existsSync(readFile2)) console.log(`ENOENT: no such file or directory, open '${readFile2}'`);
	else {
		dataFromReadFile1 = fs.readFileSync(readFile1, 'utf-8').split('\n');
		dataFromReadFile2 = fs.readFileSync(readFile2, 'utf-8').split('\n');
	}
	const outFile = process.argv[4];
	let size;
	let data = '';
	if(dataFromReadFile2.length >= dataFromReadFile1.length) size = dataFromReadFile2.length;
	else size = dataFromReadFile1.length;

	for(let i = 0; i < size; i++) {
		if(i >= dataFromReadFile1.length) data += dataFromReadFile2[i] + '\n';
		else if(i >= dataFromReadFile2.length) data += dataFromReadFile1[i] + '\n';
		else data += dataFromReadFile1[i] + '\n' + dataFromReadFile2[i] + '\n';
	}
	fs.writeFileSync(outFile, data);
}