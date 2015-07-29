Given(/^that on step one I had selected that I am inside the UK$/) do                                                
  visit config['lost_host']
  # page.status_code.should == 200
  click_button('Start')
  choose('UK')
  click_button('Continue')
  fill_in('date-lost-day', :with => '17')
  fill_in('date-lost-month', :with => '08')
  fill_in('date-lost-year', :with => '1988')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'Chinese')
  click_button('Continue')
  fill_in('email', :with => 'alex.murphy@uk.sogeti.com')
  click_button('Continue')
  choose('org-help-no')
  click_button('Submit')
end

Then(/^I am on the inside the UK confirmation page$/) do
  page.should have_no_content('As you are outside the UK you may need to apply for a temporary ‘replacement BRP visa’ which you can use once to re-enter the UK. A replacement BRP visa costs £72.')

end

Then(/^I am on the outside the UK confirmation page$/) do
  page.should have_content('As you are outside the UK you may need to apply for a temporary ‘replacement BRP visa’ which you can use once to re-enter the UK. A replacement BRP visa costs £72.')
end

Given(/^that on step one I had selected that I am outside the UK$/) do                                                
  visit config['lost_host']
  # page.status_code.should == 200
  click_button('Start')
  choose('Outside UK')
  fill_in('country', :with =>'China')
  click_button('Continue')
  fill_in('date-lost-day', :with => '17')
  fill_in('date-lost-month', :with => '08')
  fill_in('date-lost-year', :with => '1988')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'Chinese')
  click_button('Continue')
  fill_in('email', :with => 'alex.murphy@uk.sogeti.com')
  click_button('Continue')
  choose('org-help-no')
  click_button('Submit') 
end