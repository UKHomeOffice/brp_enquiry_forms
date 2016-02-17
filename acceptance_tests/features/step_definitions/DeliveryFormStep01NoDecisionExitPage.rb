Then(/^I am on the Delivery No Decision exit page$/) do
	page.should have_content('Contact us')
	page.should have_content('If you haven\'t yet received a letter, the Home Office may still be processing your application.')
 	find_link('Close').visible?
 	delete_cookie('hmbrp.sid')
end