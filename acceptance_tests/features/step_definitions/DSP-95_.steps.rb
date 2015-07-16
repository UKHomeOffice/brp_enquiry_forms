When(/^I go to Step Five of the Lost\/Stolen form$/) do                                                
  visit config['lost_host']
  page.status_code.should == 200
  click_button('Start')
  choose('UK')
  click_button('Continue')
  fill_in('', :with => '17')
  fill_in('', :with => '08')
  fill_in('', :with => '1988')
  click_button('Continue')
  fill_in('', :with => 'Alex Murphy')
  fill_in('', :with => '17')
  fill_in('', :with => '08')
  fill_in('', :with => '1988')
  fill_in('', :with => 'Chinese')
  click_button('Continue')
  fill_in('', :with => 'alex.murphy"uk.sogeti.com')
  click_button('Continue')	
end

Then(/^I am on Step Five of the Lost\/Stolen form$/) do                                                
  page.should have_content('Is the information you gave us correct?')                                                
  page.should have_content('Step 5 of 5') 
end