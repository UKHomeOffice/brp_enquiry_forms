When(/^I go to Step Four of the delivery form$/) do                                              
  visit config['not_arrived_host']
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
                                                                             
Then(/^I am on Step Four of the delivery form$/) do
  page.should have_content('Where can we contact you to let you know about your BRP?')
  page.should have_content('Email address')
  find_by_id('email')
  find_by_id('no-email')
  page.should have_content('I do not have an email address')
  # page.should have_content('Provide your address so that we contact you by post')
  # page.should have_content('House name or number and street')
  # find_by_id('address-street')
  # page.should have_content('Town/City')
  # find_by_id('address-town')
  # page.should have_content('County (optional)')
  # find_by_id('address-county')
  # page.should have_content('Postcode')
  # find_by_id('address-postcode')
  # page.should have_content('Phone number (optional)')
  find_by_id('phone')
  find_button('Continue').click
  delete_cookie('hmbrp.sid')                             
end                                                                          