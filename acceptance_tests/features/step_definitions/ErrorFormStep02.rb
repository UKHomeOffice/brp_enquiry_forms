When(/^I go to Step Two of the error form$/) do                               
  visit config['error_host']
  # page.status_code.should == 200
  page.should have_content('Step 1 of 6')
  choose('UK')
  # check('last-name-error-checkbox')
  # fill_in('last-name-error', :with => 'reasonable')
  click_button('Continue')
  # page.status_code.should == 302
end                                                                          
                                                                             
Then(/^I am on Step Two of the error form$/) do
  page.should have_content('Step 2 of 6')
  delete_cookie('hmbrp.sid')
end

Then(/^I delete the "([^"]*)" cookie$/) do |arg1|
  delete_cookie arg1 
end 

When(/^I expire the cookies$/) do
  expire_cookies
end                                                                       