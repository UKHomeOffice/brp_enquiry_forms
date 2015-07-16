When(/^I go to Step Two of the Lost\/Stolen form$/) do                                                
  visit config['lost_host']
  page.status_code.should == 200
  click_button('Start')
  choose('UK')
  click_button('Continue')
end

When(/^I enter valid vales into the date fields$/) do
  fill_in('', :with => '17')
  fill_in('', :with => '08')
  fill_in('', :with => '1988')
end

Then(/^I am on Step Three of the Lost\/Stolen form$/) do                                                
  page.should have_content('What’s your name, date of birth and nationality?')                                                
  page.should have_content('Step 3 of 5') 
end
