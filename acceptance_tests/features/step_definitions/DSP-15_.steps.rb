When(/^I go to Step One$/) do                                                
  visit config['dev_host']
  page.status_code.should == 200
  click_button('Start')

end                                                                          
                                                                             
Then(/^I am on Step One$/) do                                                
  # puts page.body
  page.should have_content('Step 1 of 5')
  page.should have_content('Have you received a letter from the Home Office telling you your biometrics residence permit was being delivered to you by a courier?')
  page.has_content?('This letter may tell you')
  page.should have_content('your biometric residence permit (BRP) is going to be delivered')
  page.should have_content('your application to stay in the UK was successful ')
  page.should have_content('your documents are being returned')
  page.should have_content('What is the date on the letter?')
  page.should have_content('               For example, 11  06  2015             ')
  page.should have_content('                  Day                       ')
  page.should have_content('                  Month                       ')
  page.should have_content('                  Year                       ')
  # page.should have_content('I don't have the letter anymore') how do you assert a string with an apostrophe
  page.should have_unchecked_field('Yes')
  page.should have_unchecked_field('No')
  page.has_css?('dated-day')
	page.has_css?('dated-month')
  page.has_css?('dated-year')
  page.should have_unchecked_field('no-letter')
  find_button('Continue').click
end                                                                          