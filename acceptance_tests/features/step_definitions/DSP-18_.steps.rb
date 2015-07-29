When(/^I go to Step Four$/) do                                               
  visit config['dev_host']
  click_button('Start')
  choose('received-yes')
  fill_in('delivery-date-day', :with => '17')
  fill_in('delivery-date-month', :with => '08')
  fill_in('delivery-date-year', :with => '1988')
  click_button('Continue')
  choose('address-match-no')
  fill_in('address-street', :with => '2 Marsham Street')
  fill_in('address-town', :with => 'Westminster')
  fill_in('address-postcode', :with => 'SW1P 4DF')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'Chinese')
  click_button('Continue')                                                
  # puts page.body
end                                                                          
                                                                             
Then(/^I am on Step Four$/) do
  page.should have_content('Where can we contact you to let you know about your BRP?')
  page.should have_content('Email address')
  page.has_css?('email')
  page.has_css?('no-email')
  page.should have_content('I do not have an email address')
  # page.should have_content('Please provide your address so that we contact you by post')
  # page.should have_content('House name or number and street')
  # page.has_css?('address-street')
  # page.should have_content('Town/City')
  # page.has_css?('address-town')
  # page.should have_content('County (optional)')
  # page.has_css?('address-county')
  # page.should have_content('Postcode')
  # page.has_css?('address-postcode')
  # page.should have_content('Phone number (optional)')
  page.has_css?('phone')
  find_button('Continue').click                                
end                                                                          