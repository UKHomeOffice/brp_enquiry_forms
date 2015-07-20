When(/^I go to Step Three of the Lost\/Stolen form$/) do                                                
  visit config['lost_host']
  # page.status_code.should == 200
  click_button('Start')
  choose('UK')
  click_button('Continue')
  fill_in('date-lost-day', :with => '17')
  fill_in('date-lost-month', :with => '08')
  fill_in('date-lost-year', :with => '1988')
  click_button('Continue')
end