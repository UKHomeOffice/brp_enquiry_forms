When(/^I go to the Confirmation page of the delivery form$/) do
  visit config['not_arrived_host']

  choose('received-yes')
  fill_in('delivery-date-day', :with => '17')
  fill_in('delivery-date-month', :with => '08')
  fill_in('delivery-date-year', :with => '1988')
  click_button('Continue')
  choose('address-match-yes')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'China')
  fill_in('passport', :with => '123456789')
  click_button('Continue')
  fill_in('email', :with => 'zero@forconduct.cr')
  click_button('Continue')
  page.should have_content('Check the details you have provided')
  choose('org-help-no')

  # Submit the form (on Local and Dev only)
  if config['environment'] != 'prod' && config['submit'] == true
      puts 'Special actions whilst in Local or DEV'
      click_button('Send')
  end

end

Then(/^I am on Confirmation page of the delivery form$/) do
  page.should have_content('Thank you, we have received your information.')
  delete_cookie('hmbrp.sid')
end
