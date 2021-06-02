When(/^I go to Step Five of the someone else form$/) do
  visit config['someone_host']
  fill_in('someone-else-fullname', :with => 'Alex Murphy')
  fill_in('someone-else-date-day', :with => '01')
  fill_in('someone-else-date-month', :with => '02')
  fill_in('someone-else-date-year', :with => '1971')
  fill_in('someone-else-nationality', :with => 'China')
  choose('someone-else-id-type-passport')
  fill_in('someone-else-id-number', :with => '1234567890')
  click_button('Continue')
  choose('someone-else-reason-radio-incapable')
  fill_in('incapable-details', :with => 'General idiocy.')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'China')
  fill_in('passport', :with => '0987654321')
  click_button('Continue')
  fill_in('email', :with => 'zero@forconduct.cr')
  fill_in('phone', :with => '07751710987')
  click_button('Continue')
end

Then(/^I am on Step Five of the someone else form$/) do
  page.should have_content('Check the details you have provided')
  page.should have_content("If any information is incorrect, you can change it here.")
  page.should have_content('Terms and conditions')
  page.should have_content('By sending this report you confirm the information provided is accurate, and you accept our terms and conditions.')
  find_button('Send')
  delete_cookie('hmbrp.sid')
end
