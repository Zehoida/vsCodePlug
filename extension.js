// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscodeplugindemo" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscodeplugindemo.helloWorld', function () {
		// The code you place here will be executed every time your command is executed
		console.log("这是一个vsCode插件");
		// Display a message box to the user
		const data = new Date;
		vscode.window.showWarningMessage('现在的时间是：' + data, '打开配置项').then(selection => {
			if (selection === '打开配置项') {
			  	vscode.commands.executeCommand('workbench.action.openSettings');
			}
		});		  
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
