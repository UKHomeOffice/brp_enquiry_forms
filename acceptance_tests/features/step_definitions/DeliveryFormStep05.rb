When(/^I go to Step Five of the delivery form$/) do
  visit config['not_arrived_host']
  choose('received-yes')
  fill_in('delivery-date-day', :with => '17')
  fill_in('delivery-date-month', :with => '08')
  fill_in('delivery-date-year', :with => '1988')
  click_button('Continue')
  choose('address-match-yes')
  # fill_in('address-street', :with => '2 Marsham Street')
  # fill_in('address-town', :with => 'Westminster')
  # fill_in('address-county', :with => 'West Sussex')
  # fill_in('address-postcode', :with => 'SW1P 4DF')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'China')
  fill_in('passport', :with => '123456789')
  click_button('Continue')
  fill_in('email', :with => 'zero@forconduct.cr')
  fill_in('phone', :with => '07751710987')
  click_button('Continue')
end

Then(/^I am on Step Five of the delivery form$/) do
  page.should have_content('Check the details you have provided')
  page.should have_content("If any information is incorrect, you can change it here.")
  page.should have_content('Terms and conditions')
  page.should have_content('By sending this report you confirm the information provided is accurate, and you accept our terms and conditions.')
  find_button('Send')
  delete_cookie('hmbrp.sid')
end