When(/^I go to Step Two$/) do                                                
  visit '' #Add the url
  page.status_code.should == 200
end                                                                          
                                                                             
Then(/^I am on Step Two$/) do                                                
  page.status_code.should == 200
  page.should have_content('Step 2 of 5')
  page.should have_content('Is your address the same as on the letter from the Home Office about your biometric residence permit?')
  page.should have_content('Placeholder content Placeholder content Placeholder content')
  page.should have_content('Your address')
  page.should have_content('Town / City')
  page.should have_content('County')
  page.should have_content('Postcode')
  page.should have_content('Please let us know if you know of any problems with deliveries before at your address')
  page.should have_unchecked_field('Yes')
  page.should have_unchecked_field('No')
  find_button('Continue').click
end                                                                          