When(/^I go to Step Three of the error form$/) do                               
  visit config['error_host']
  page.should have_content('Step 1 of 6')
  choose('UK')
  click_button('Continue')
  # page.status_code.should == 200
  check('last-name-error-checkbox')
  fill_in('last-name-error', :with => 'reasonable')
  click_button('Continue')
  # page.status_code.should == 302
end                                                                          
                                                                             
Then(/^I am on Step Three of the error form$/) do                                                
  page.should have_content('Step 3 of 6')
  delete_cookie('hmbrp.sid')
end

When(/^I fill in the second address field on Step Four of the Error form$/) do
  fill_in('uk-address-street', :with => '2 Marsham Street')
end

When(/^I fill in the postcode field on Step Four of the Error form$/) do
  fill_in('uk-address-town', :with => 'Westminster')
end

When(/^I fill in the first address field on Step Four of the Error form$/) do
  fill_in('uk-address-postcode', :with => '123456')
end                                                                        