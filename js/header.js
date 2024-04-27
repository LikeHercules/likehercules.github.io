function fillNavBorder(character, charWidth)
{
	$('#nav-border span').empty();
	let navWidth = $('#nav-border').width();
	let numOfChars = parseInt(Math.ceil(navWidth/charWidth));
	if (numOfChars > 0) {
		let arrayOfChars = Array(numOfChars).join(character);

		$('#nav-border span').append(arrayOfChars);
		let spanWidth = $('#nav-border span').width();
		let remainder = navWidth - spanWidth;
		let additionalChars = parseInt(remainder/charWidth)
	
		$('#nav-border span').append(Array(additionalChars+1).join(character));
	}
}

function fillMobileNavBorder(character, charWidth)
{
	$('#mobile-nav-border span').empty();
	let navWidth = $('#mobile-nav-border').width();
	let numOfChars = parseInt(Math.ceil(navWidth/charWidth));
	if (numOfChars > 0) {
		let arrayOfChars = Array(numOfChars).join(character);

		$('#mobile-nav-border span').append(arrayOfChars);
		let spanWidth = $('#mobile-nav-border span').width();
		let remainder = navWidth - spanWidth;
		let additionalChars = parseInt(remainder/charWidth)
	
		$('#mobile-nav-border span').append(Array(additionalChars+1).join(character));
	}
}

function toggleMobileMenu()
{
	let mobileNav = $('div#mobile-nav');
	let display =  mobileNav.css('display') === 'none' ? 'flex' : 'none';
	mobileNav.css('display', display);

	$('div#menu-icon').toggleClass('selected');
}

function watchMenuIcon()
{
	$('div#menu-icon').on('click', () => 
		{
			toggleMobileMenu();
		});
}

function fillNavBorders(character, charWidth) {
	fillNavBorder(character, charWidth);
	fillMobileNavBorder(character, charWidth);
}

function mobileNavResize()
{
	if ($(window).width() > 750 && $('div#mobile-nav').css('display') === 'flex') 
	{
		toggleMobileMenu();
	}
}

$(document).ready(() => {
	let c = $('#nav-border span')[0].innerHTML;
	let charWidth = $('#nav-border span').width() > 0 ? $('#nav-border span').width() : $('#mobile-nav-border span').width();

	fillNavBorders(c, charWidth);
	$(window).resize(() => { 
		fillNavBorders(c, charWidth);
		mobileNavResize();
	})
	watchMenuIcon();
});
