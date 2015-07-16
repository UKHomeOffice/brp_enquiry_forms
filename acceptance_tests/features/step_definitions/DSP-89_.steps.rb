When(/^I go to Step One of the Lost\/Stolen form$/) do                                                
  visit config['lost_host']
  page.status_code.should == 200
  click_button('Start')
end

Then(/^I am on Step One of the Lost\/Stolen form$/) do                                                
  page.should have_content('Step 1 of 5')                                                
  page.should have_content('Where are you now?')
end

When(/^I click the "([^"]*)" radio button$/) do |arg1|
    choose arg1
end

When(/^I type something valid into the Country field$/) do
  fill_in('', :with => 'South Africa')
end

Then(/^I am on Step Two of the Lost\/Stolen form$/) do                                                
  page.should have_content('When did you realise you no longer had your BRP?')                                                
  page.should have_content('Step 2 of 5')     
end