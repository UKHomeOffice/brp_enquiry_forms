When(/^I go to Step One of the delivery form$/) do
  visit config['not_arrived_host']
end                                                                   
                                                                             
Then(/^I am on Step One of the delivery form$/) do                                              
  # puts page.body
  page.should have_content('Step 1 of 5')
  page.should have_content('Have you received a letter from the Home Office?')
  page.has_content?('This letter may tell you')
  page.should have_content('your biometric residence permit (BRP) is going to be delivered')
  page.should have_content('your application to stay in the UK was successful ')
  page.should have_content('your documents are being returned')
  page.should have_content('What is the date on the letter?')
  page.should have_content('               For example, 11  6  2015             ')
  page.should have_content('                  Day                       ')
  page.should have_content('                  Month                       ')
  page.should have_content('                  Year                       ')
  page.should have_content("I don't have the letter anymore")
  page.should have_unchecked_field('No')
  find_by_id('delivery-date-day')
	find_by_id('delivery-date-month')
  find_by_id('delivery-date-year')
  page.should have_unchecked_field('no-letter')
  find_button('Continue').click
  delete_cookie('hmbrp.sid')
end                                                                        