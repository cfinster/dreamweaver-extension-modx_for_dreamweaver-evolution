/*
function displayHelp() {
	var _help = dw.loadString('insertbar/modx/snippet/');

	dw.browseDocument(_help);
}
*/



function objectTag() {
	// Strings for localize
	// var msg = dw.loadString('insertbar/modx/snippet/');

	var _name = 'GetField';	// Snippet's name

	var _form = document.SnippetForm;
	var _params = getSnippetParameters(_form, DefaultParams);

	return generateSnippetTag(_name, _params, _form._cache.checked);
}
