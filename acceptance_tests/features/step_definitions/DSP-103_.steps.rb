Then(/^I am on the Delivery No Decision exit page$/) do                                             
  page.should have_content('Contact us')                                                
  page.should have_content('Call the contact centre 0300 123 2241 or email them at mail@contact-centre.co.uk.')
  find_link('Close').visible?
end