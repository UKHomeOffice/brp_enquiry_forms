When(/^I go to Step Three$/) do                                              
  visit('http://localhost:8080')
  # page.status_code.should == 302
  click_button('Start')
  # page.status_code.should == 200
  click_button('Continue')
  # page.status_code.should == 200
  click_button('Continue')
end                                                                          
                                                                             
Then(/^I am on Step Three$/) do
  page.should have_content('Step 3 of 5')
  page.should have_content('Provide your personal details')
  page.should have_content('Complete this section carefully as these details will help us to find your information.')
  page.should have_content('Full name')

  page.should have_content('Date of birth')
  page.should have_content('For example, 31  3  1970')
  page.should have_content('Day')
  page.has_css?('') #Await Name
  page.should have_content('Month')
  page.has_css?('') #Await Name
  page.should have_content('Year')
  page.has_css?('') #Await Name
  page.should have_content('Nationality')
  page.has_css?('') #Await Name
  page.should have_content('Passport number (optional)')
  page.has_css?('') #Await Name                                      
end                                                                          