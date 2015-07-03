When(/^I go to Step Six$/) do                                              
  visit config['dev_host']
  # page.status_code.should == 302
  click_button('Start')
  # page.status_code.should == 200
  click_button('Continue')
  # page.status_code.should == 200
  click_button('Continue')
  # page.status_code.should == 200
  click_button('Continue')
  # page.status_code.should == 200
  click_button('Continue')
  # page.status_code.should == 200
  click_button('Submit')
end                                                                          
                                                                             
Then(/^I am on Step Six$/) do
  page.should have_content('Thank you, we have received the information you have provided. We are now looking into this.')
end                                                                          