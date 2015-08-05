When(/^I go to Step Six$/) do                                              
  visit config['dev_host']
  click_button('Start')
  choose('received-yes')
  fill_in('delivery-date-day', :with => '17')
  fill_in('delivery-date-month', :with => '08')
  fill_in('delivery-date-year', :with => '1988')
  click_button('Continue')
  choose('address-match-yes')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'Chinese')
  click_button('Continue')
  fill_in('email', :with => 'alex.murphy@uksogeti.com')
  click_button('Continue')
  page.should have_content('Is the information you have given us correct?')
  choose('org-help-no')
  click_button('Submit')
end                                                                          
                                                                             
Then(/^I am on Step Six$/) do
  page.should have_content('Thank you, we have received your information.')
end                                                                          