When(/^I go to Step One of the error form$/) do                                
  visit config['error_host']
  page.status_code.should == 200
  click_button('Start')
end                                                                          
                                                                             
Then(/^I am on Step One of the error form$/) do                                                
  page.should have_content('Step 1 of 5')
end                                                                          