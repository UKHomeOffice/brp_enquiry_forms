When(/^I go to Step Three$/) do                                              
  visit config['dev_host']
  click_button('Start')
  choose('received-yes')
  fill_in('delivery-date-day', :with => '17')
  fill_in('delivery-date-month', :with => '08')
  fill_in('delivery-date-year', :with => '1988')
  click_button('Continue')
  choose('address-match-no')
  fill_in('address-street', :with => '2 Marsham Street')
  fill_in('address-town', :with => 'Westminster')
  fill_in('address-postcode', :with => 'SW1P 4DF')
  click_button('Continue')
end                                                                          
                                                                             
Then(/^I am on Step Three$/) do
  page.should have_content('Step 3 of 5')
  page.should have_content('Provide your personal details')
  page.should have_content('Complete this section carefully as these details will help us to find your information.')
  page.should have_content('Full name')
  page.should have_content('Date of birth')
  page.should have_content('For example, 31  03  1970')
  page.should have_content('Day')
  page.has_css?('date-of-birth-day')
  page.should have_content('Month')
  page.has_css?('date-of-birth-month')
  page.should have_content('Year')
  page.has_css?('date-of-birth-year')
  page.should have_content('Nationality')
  page.has_css?('nationality')
  page.should have_content('Passport number (optional)')
  page.has_css?('passport')                                      
end                                                                          