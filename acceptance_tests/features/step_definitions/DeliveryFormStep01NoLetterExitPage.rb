Then(/^I am on the Delivery No Letter exit page$/) do
  page.should have_content('Contact us')
  page.should have_content('We need to know the date on your letter so we can look into why you haven\'t received your BRP. To find out when your letter was sent, call customer services on 0300 123 2241.')
  find_link('Close').visible?
  delete_cookie('hmbrp.sid')
end
