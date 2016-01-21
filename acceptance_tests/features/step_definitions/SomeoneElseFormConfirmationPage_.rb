When(/^I go to the Confirmation page of the someone else form$/) do
  visit config['someone_host']
  choose('arrange-collection-radio-someone-else')
  fill_in('someone-else-fullname', :with => 'Alex Murphy')
  fill_in('someone-else-date-day', :with => '01')
  fill_in('someone-else-date-month', :with => '02')
  fill_in('someone-else-date-year', :with => '1971')
  fill_in('someone-else-nationality', :with => 'China')
  choose('someone-else-id-type-passport')
  fill_in('someone-else-id-number', :with => '1234567890')
  click_button('Continue')
  choose('someone-else-reason-radio-under-age')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'China')
  click_button('Continue')
  fill_in('email', :with => 'zero@forconduct.cr')
  fill_in('phone', :with => '07751710987')
  click_button('Continue')
  page.should have_content('Check the details you have provided')
  choose('org-help-no')

  # Submit the form (on Local and Dev only)
  if config['environment'] != 'prod' && config['submit'] == true
      puts 'Special actions whilst in Local or DEV'
      click_button('Send')
  end

end

Then(/^I am on Confirmation page of the someone else form$/) do
  page.should have_content('Thank you, we have received your information.')
  delete_cookie('hmbrp.sid')
end