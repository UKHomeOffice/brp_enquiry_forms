When(/^I go to Step Four of the error form and have not entered my address details in Step Two$/) do
  visit config['error_host']
  # page.status_code.should == 200
  page.should have_content('Step 1 of 6')
  choose('UK')
  click_button('Continue')
  check('last-name-error-checkbox')
  fill_in('last-name-error', :with => 'reasonable')
  click_button('Continue')
  choose('uk-address-radio-no')
  click_button('Continue')
  page.should have_content('Step 4 of 6')
end