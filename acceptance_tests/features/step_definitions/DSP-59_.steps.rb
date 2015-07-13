When(/^I go to Step Two of the error form$/) do                               
  visit config['error_host']
  page.status_code.should == 200
  click_button('Start')
  click_button('Continue')
  page.status_code.should == 302
end                                                                          
                                                                             
Then(/^I am on Step Two of the error form$/) do                                                
  page.should have_content('Step 2 of 5')
end                                                                          