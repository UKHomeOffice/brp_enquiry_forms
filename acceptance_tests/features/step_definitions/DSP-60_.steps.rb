When(/^I go to Step Three of the error form$/) do                               
  visit config['error_host']
  page.status_code.should == 200
  click_button('Start')
  page.should have_content('Step 1 of 5')
  check('last-name-error-checkbox')
  fill_in('last-name-error', :with => 'reasonable')
  click_button('Continue')
  choose('address-match-no')
  fill_in('address-street', :with => '2 Marsham Street')
  fill_in('address-town', :with => 'Westminster')
  fill_in('address-postcode', :with => 'SW1P 4DF')
  click_button('Continue')
  page.status_code.should == 302
end                                                                          
                                                                             
Then(/^I am on Step Three of the error form$/) do                                                
  page.should have_content('Step 3 of 5')
end                                                                          