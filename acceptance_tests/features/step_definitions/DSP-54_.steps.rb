 When(/^I enter text values into the date field$/) do
  fill_in('delivery-date-day', :with => 'Te')
  fill_in('delivery-date-month', :with => 'Te')
  fill_in('delivery-date-year', :with => 'Text')
end                                                                          
                                                                             
When(/^I enter special character values into the date field$/) do
  fill_in('delivery-date-day', :with => '!"')
  fill_in('delivery-date-month', :with => '&*')
  fill_in('delivery-date-year', :with => '%^&*')
end                                                                          
                                                                             
When(/^I enter the correct values into the date field$/) do
  fill_in('delivery-date-day', :with => '17')
  fill_in('delivery-date-month', :with => '08')
  fill_in('delivery-date-year', :with => '1988')
end     

When(/^I see the "([^"]*)" link$/) do |arg1|
  find_link arg1
end     

When(/^I enter a future date into the date field$/) do
  fill_in('delivery-date-day', :with => '17')
  fill_in('delivery-date-month', :with => '08')
  fill_in('delivery-date-year', :with => '2030')
end

Then(/^I see "([^"]*)"$/) do |arg1|                                          
  page.should have_content arg1
  delete_cookie('hmbrp.sid')
end                                                                                                                                                                                                                                                                                      