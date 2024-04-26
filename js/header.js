function fillNav(character, charWidth) {
	$('#nav-border span').empty();
	let navWidth = $('#nav-border').width();
	let numOfChars = parseInt(Math.ceil(navWidth/charWidth));
	let arrayOfChars = Array(numOfChars).join(character);

	$('#nav-border span').append(arrayOfChars);
	let spanWidth = $('#nav-border span').width();
	let remainder = navWidth - spanWidth;
	let additionalChars = parseInt(remainder/charWidth)
	
	$('#nav-border span').append(Array(additionalChars+1).join(character));
}

$(document).ready(() => {
	let c = $('#nav-border span')[0].innerHTML;
	let charWidth = $('#nav-border span').width();

	fillNav(c, charWidth);
	$(window).resize(() => { fillNav(c, charWidth) })
});
