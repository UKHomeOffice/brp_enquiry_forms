When(/^I go to Step Two of the delivery form$/) do                                                
  visit config['dev_host']
  choose('received-yes')
  fill_in('delivery-date-day', :with => '17')
  fill_in('delivery-date-month', :with => '08')
  fill_in('delivery-date-year', :with => '1988')
  click_button('Continue')
end                                                                          
                                                                             
Then(/^I am on Step Two of the delivery form$/) do                                         
  page.should have_content('Step 2 of 5')
  # page.should have_content('Is your address the same as on the Home Office letter saying your application to remain in the UK was successful?')
  # page.should have_content('House name or number and street')
  # find_by_id('address.street')
  # page.should have_content('Town/City')
  # find_by_id('address-town')
  # page.should have_content('County')
  # find_by_id('address-county')
  # page.should have_content('Postcode')
  # find_by_id('address-postcode')
  # page.should have_content('If you think the courier may have had a problem delivering items to this address (for example there is no number on the door) then let us know and we will contact the courier.')
  # find_by_id('delivery-details-label')
  # page.should have_unchecked_field('Yes')
  # page.should have_unchecked_field('No')
  find_button('Continue').click
  delete_cookie('hmbrp.sid')
end

Given /^I wait for (\d+) seconds?$/ do |n|
  sleep(n.to_i)
end                                                                       