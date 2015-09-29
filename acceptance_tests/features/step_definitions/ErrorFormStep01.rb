When(/^I go to Step One of the error form$/) do                                
  visit config['error_host']
  page.should have_content('Step 1 of 6')
end                                                                          
                                                                             
Then(/^I am on Step One of the error form$/) do                                                
  page.should have_content('Step 1 of 6')
  delete_cookie('hmbrp.sid')
end                                                                          