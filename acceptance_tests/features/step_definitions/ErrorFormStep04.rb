When(/^I go to Step Four of the error form$/) do                               
  visit config['correct_mistakes_host']
  # page.status_code.should == 200
  page.should have_content('Step 1 of 6')
  choose('UK')
  click_button('Continue')
  check('last-name-error-checkbox')
  fill_in('last-name-error', :with => 'reasonable')
  click_button('Continue')
  choose('uk-address-radio-yes')
  fill_in('uk-address-street', :with => '2 Marsham Street')
  fill_in('uk-address-town', :with => 'Westminster')
  fill_in('uk-address-postcode', :with => 'SW1P 4DF')
  click_button('Continue')
  # page.status_code.should == 302
end

Then(/^I am on Step Four of the error form$/) do                                                
  page.should have_content('Step 4 of 6')
  delete_cookie('hmbrp.sid')
end