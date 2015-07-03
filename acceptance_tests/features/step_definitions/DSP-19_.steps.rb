When(/^I go to Step Five$/) do                                              
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
  page.should have_content('Check your details')
end

Then(/^I am on Step Five$/) do
  page.should have_content('Check your details')
  page.should have_content('Check through the information that you have provided to make sure it is correct. If it is incorrect you can change it here.')
  page.should have_content('Address')
  page.should have_content('Full name')
  page.should have_content('Address')
  page.should have_content('Date of birth')
  page.should have_content('Nationality')
  page.should have_content('Passport')
  page.should have_content('Address')
  page.should have_content('Email')
  page.should have_content('Send your submission')
  page.should have_content('By sending us your details you confirm that the information you have provided is true and that you accept our terms and conditions and privacy policy.hared with other government departments.')
  find_button('Submit').click                             
end     