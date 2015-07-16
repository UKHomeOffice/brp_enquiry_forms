When(/^I type "([^"]*)" into the "([^"]*)" field$/) do |arg1, arg2|
  fill_in arg2 , :with => arg1
end