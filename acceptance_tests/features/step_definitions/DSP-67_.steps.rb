Given(/^I go to Step Four and have not entered my address details in Step Two$/) do
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
end


When(/^I check the I do not have an email address checkbox$/) do             
  check('no-email')
end                                                                          
                                                                             
When(/^I enter an email address without an @$/) do
  fill_in('email', :with => 'alex.murphyuksogeti.com')
end                                                                          
                                                                             
When(/^I fill the Phone number field with special characters$/) do
  fill_in('phone', :with => '^&^&^&^&')
end                                                                          
                                                                             
When(/^I fill the Phone number field with text$/) do
  fill_in('phone', :with => 'vghvmvmg')
end                                                                          