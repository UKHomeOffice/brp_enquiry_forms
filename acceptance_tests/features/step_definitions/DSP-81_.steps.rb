When(/^I go to Step Four of the error form and have not entered my address details in Step Two$/) do
  visit config['error_host']
  page.status_code.should == 200
  click_button('Start')
  click_button('Continue')
  choose('address-match-yes')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'Chinese')
  click_button('Continue')
  page.status_code.should == 302
end