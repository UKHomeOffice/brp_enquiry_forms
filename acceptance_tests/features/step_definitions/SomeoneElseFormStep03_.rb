When(/^I go to Step Three of the someone else form$/) do
  visit config['someone_host']
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
end

When(/^I go to Step Three of the someone else form, selecting "incapable"$/) do
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
end

When(/^I go to Step Three of the someone else form, selecting "under-age"$/) do
  visit config['someone_host']
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
end

Then(/^I am on Step Three of the somone else form$/) do
  page.should have_content('Step 3 of 5')
  page.should have_content('What are your personal details?')
  page.should have_content('We need these details so we know which BRP to give to the person collecting on your behalf.')
  page.should have_content('Full name')
  page.should have_content('Date of birth')
  page.should have_content('For example, 31  3  1970')
  page.should have_content('Day')
  find_by_id('date-of-birth-day')
  page.should have_content('Month')
  find_by_id('date-of-birth-month')
  page.should have_content('Year')
  find_by_id('date-of-birth-year')
  page.should have_content('Country of nationality ')
  find_by_id('nationality')
  page.should have_content('Passport number')
  find_by_id('passport')
  delete_cookie('hmbrp.sid')
end
