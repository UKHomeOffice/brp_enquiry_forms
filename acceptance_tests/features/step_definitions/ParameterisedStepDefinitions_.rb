When(/^I click "([^"]*)"$/) do |arg1|                                        
  click_button arg1
end 

When(/^I check the "([^"]*)" radio button$/) do |arg1|
  choose arg1
end

When(/^I check the "([^"]*)" checkbox$/) do |arg1|                           
  check arg1
end

Then(/^I see the "([^"]*)" link in the "([^"]*)" xpath$/) do |arg1, arg2|
  expect(page).to have_xpath arg2, text: arg1
end

When(/^I type "([^"]*)" into the "([^"]*)" field$/) do |arg1, arg2|
  fill_in arg2 , :with => arg1
end