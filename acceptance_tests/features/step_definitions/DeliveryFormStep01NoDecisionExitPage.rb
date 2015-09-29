Then(/^I am on the Delivery No Decision exit page$/) do                                             
	page.should have_content('Contact us')
	# page.should have_content("If you haven't received a letter from the Home Office saying your application to remain in the UK was successful it may mean a decision about your application to stay in the UK has not been made yet.")
	page.should have_content('Call the contact centre 0300 123 2241.')
 	find_link('Close').visible?
 	delete_cookie('hmbrp.sid')
end