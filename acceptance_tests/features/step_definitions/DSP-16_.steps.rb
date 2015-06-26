When(/^I go to Step Two$/) do                                                
  visit('http://localhost:8080')
  # page.status_code.should == 302
  click_button('Start')
  # page.status_code.should == 200
  click_button('Continue')
  # page.status_code.should == 200
end                                                                          
                                                                             
Then(/^I am on Step Two$/) do                                                
  page.should have_content('Step 2 of 5')
  page.should have_content('Is your address the same as on the letter from the Home Office about your biometric residence permit?')
  # page.should have_content('') #Awaiting content
  page.should have_content('Your address')
  page.has_css?('address.street')
  page.should have_content('Town / City')
  page.has_css?('address-town')
  page.should have_content('County')
  page.has_css?('address-county')
  page.should have_content('Postcode')
  page.has_css?('address-postcode')
  page.should have_content('If you think the courier may have had a problem delivering items to this address (for example there is no number on the door) then let us know and we will contact the courier.')
  page.has_css?('delivery-details-label')
  page.should have_unchecked_field('Yes')
  page.should have_unchecked_field('No')
  find_button('Continue').click
end                                                                          