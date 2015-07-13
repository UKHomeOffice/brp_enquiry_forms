When(/^I enter a valid date of birth$/) do
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
end                                                                          
                                                                             
When(/^I type fill in the nationality field with something valid$/) do
  fill_in('nationality', :with => 'Mongolian')
end                                                                       
                                                                             
When(/^I enter something valid in the Full name field$/) do
  fill_in('fullname', :with => 'Alex Murphy')
end                                                                          
                                                                             
When(/^I enter numbers into the Full name field$/) do
  fill_in('fullname', :with => '1234567890')
end                                                                          
                                                                             
When(/^I enter special character values into the Passport number field$/) do
  fill_in('passport', :with => ')*^&&%&*')
end                                                                          
                                                                             
When(/^I enter text values into the Date of birth field$/) do
  fill_in('date-of-birth-day', :with => 'ad')
  fill_in('date-of-birth-month', :with => 'bc')
  fill_in('date-of-birth-year', :with => 'ao')
end                                                                          
                                                                             
When(/^I enter special character values into the Date of birth field$/) do
  fill_in('date-of-birth-day', :with => '^&')
  fill_in('date-of-birth-month', :with => '&^')
  fill_in('date-of-birth-year', :with => '^&^&')
end                                                                          