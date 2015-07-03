When(/^I go to Step Four$/) do                                               
  visit config['dev_host']
  # page.status_code.should == 302
  click_button('Start')
  # page.status_code.should == 200
  click_button('Continue')
  # page.status_code.should == 200
  click_button('Continue')
  # page.status_code.should == 200
  click_button('Continue')
end                                                                          
                                                                             
Then(/^I am on Step Four$/) do
  page.should have_content('Provide your contact details')
  page.should have_content('Email address')
  page.has_css?('email')
  page.has_css?('no-email')
  page.should have_content('I do not have an email address')
  page.should have_content('Please provide your address so that we contact you by post')
  page.should have_content('House name or number and street')
  page.has_css?('address-street')
  page.should have_content('Town/City')
  page.has_css?('address-town')
  page.should have_content('County (optional)')
  page.has_css?('address-county')
  page.should have_content('Postcode')
  page.has_css?('address-postcode')
  page.should have_content('Phone number (optional)')
  page.has_css?('phone')
  find_button('Continue').click

end                                                                          