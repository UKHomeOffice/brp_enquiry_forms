When(/^I go to Step Three of the lost stolen damaged form$/) do                                              
  visit config['lost_host']
  # page.status_code.should == 200

  choose('UK')
  click_button('Continue')
  fill_in('date-lost-day', :with => '17')
  fill_in('date-lost-month', :with => '08')
  fill_in('date-lost-year', :with => '1988')
  click_button('Continue')
end

Then(/^I am on Step Three of the lost stolen damaged form$/) do                                               
  page.should have_content('Step 3 of 5')                                               
  page.should have_content('What are your personal details?')
end