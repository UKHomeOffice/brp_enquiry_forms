When(/^I go to Step One of the lost stolen damaged form$/) do                                             
  visit config['lost_stolen_host']
  # page.status_code.should == 200
end

Then(/^I am on Step One of the lost stolen damaged form$/) do                                             
  page.should have_content('Step 1 of 5')                                                
  page.should have_content('Where are you now?')
end

When(/^I click the "([^"]*)" radio button$/) do |arg1|
    choose arg1
end

When(/^I type something valid into the Country field$/) do
  fill_in('', :with => 'South Africa')
end