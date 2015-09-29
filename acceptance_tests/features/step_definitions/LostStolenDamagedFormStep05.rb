When(/^I go to Step Five of the lost stolen damaged form$/) do                                                
  visit config['lost_host']
  # page.status_code.should == 200
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
  fill_in('nationality', :with => 'China')
  fill_in('brp-card', :with => '1234567890')
  click_button('Continue')
  fill_in('email', :with => 'alex.murphy@uk.sogeti.com')
  fill_in('phone', :with => '07751719872')
  click_button('Continue')	
end

Then(/^I am on Step Five of the lost stolen damaged form$/) do
  page.should have_content('Step 5 of 5')                                                                                            
end