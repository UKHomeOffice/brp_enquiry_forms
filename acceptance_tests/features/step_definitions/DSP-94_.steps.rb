When(/^I go to Step Four of the Lost\/Stolen form$/) do                                                
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
end

Then(/^I am on Step Four of the Lost\/Stolen form$/) do                                                
  page.should have_content('Where can we contact you to let you know about your BRP?')                                                
  page.should have_content('Step 4 of 5') 
end