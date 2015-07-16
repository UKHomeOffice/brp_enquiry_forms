Then(/^I am on the Delivery no decision page$/) do                                                
  page.should have_content('Contact us')                                                
  page.should have_content('received a letter from the Home Office saying your application to remain in the UK was successful it may mean a decision about your application to stay in the UK has not been made yet. Meaning a biometric residence permit would not have been sent out.')                                                
  page.should have_content('Call the contact centre 0300 123 2241 or email them at mail@contact-centre.co.uk.')                                                
  find_button('Close').click
end

Then(/^I am on the Start page$/) do
  find_button('Start').click
end