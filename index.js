var fs = require('fs');
var prompt = require('prompt');
var cmd = require('node-command-line'),
	Promise = require('bluebird');
var colors = require('colors/safe');
prompt.message = colors.bgGreen(' ');
prompt.delimiter = colors.green(' ');
const ora = require('ora');
const spinner = ora('Loading Data');
var promisify = require('node-promisify');
var obj_temp = {};

// Configuration
const config = {
	login_URL_default: 'https://login.salesforce.com/',
	login_Alias_default: 'Prod',
};
// Function
function Head(value) {
	//return colors.inverse(colors.blackBG(' ' + colors.blue(colors.bold(value)) + ' '));
	return colors.bgBlue(' ' + colors.white(colors.bold(value)) + ' ');
}

function error(value) {
	return colors.yellow(value);
}

function success(value) {
	return colors.green(value);
}

function convertToJson(value) {
	return JSON.stringify(value);
}

function cmd_Exec(value, process) {
	spinner.start('Loading..');
	setTimeout(() => {
		spinner.color = 'yellow';
		spinner.text = 'process';
	}, 1000);
	Promise.coroutine(function*() {
		var response = yield cmd.run('npm -v');
		if (response.success) {
			spinner.stop();
			console.log(success('Connection Success'));
			prompt.start();
		} else {
			console.log(error('Invalid Comment, Please contact administrator'));
			spinner.stop();
		}
	})();
}

cmd_Exec();
prompt.start();
