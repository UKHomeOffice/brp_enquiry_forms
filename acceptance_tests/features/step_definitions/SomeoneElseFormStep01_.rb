When(/^I go to Step One of the someone else form$/) do
  visit config['someone_host']
end

Then(/^I am on Step One of the somone else form$/) do
  page.should have_content('Step 1 of 5')
  page.should have_content('What would you like to do?')
  page.should have_content('Tell us what would you like to do.')
  page.should have_content('Nominate someone else to collect my BRP')
  find_by_id('arrange-collection-radio-someone-else')
  page.should have_content('Change the person I nominated to collect my BRP')
  find_by_id('arrange-collection-radio-change-person')
  page.should have_content('Cancel the request for my nominated person to collect my BRP')
  find_by_id('arrange-collection-radio-cancel-request')
end

Then(/^I see all the related content related to the Nominate someone else to collect my BRP selection$/) do
  page.should have_content('Provide details of the person who you want to collect your BRP on your behalf')
  page.should have_content('Full name')
  find_field('someone-else-fullname')
  page.should have_content('Date of birth')
  page.should have_content('For example, 31 3 1970')
  page.should have_content('Day')
  find_field('someone-else-date-day')
  page.should have_content('Month')
  find_field('someone-else-date-month')
  page.should have_content('Year')
  find_field('someone-else-date-year')
  page.should have_content('Country of nationality')
  find_field('someone-else-nationality')
  page.should have_content('Identity document number')
  page.should have_content('(This could be UK/EU driving licence, passport or BRP)')
  find_field('someone-else-id-number')
  find_button('Continue')
  delete_cookie('hmbrp.sid')
end

Then(/^I see all the related content related to the Change the person I nominated to collect my BRP selection$/) do
  page.should have_content('Provide details of the new person you want to collect your BRP on your behalf')
  page.should have_content('Full name')
  find_field('change-person-fullname')
  page.should have_content('Date of birth')
  page.should have_content('For example, 31 3 1970')
  page.should have_content('Day')
  find_field('change-person-date-day')
  page.should have_content('Month')
  find_field('change-person-date-month')
  page.should have_content('Year')
  find_field('change-person-date-year')
  page.should have_content('Country of nationality')
  find_field('change-person-nationality')
  page.should have_content('Identity document number')
  page.should have_content('(This could be UK/EU driving licence, passport or BRP)')
  find_field('change-person-id-number')
  find_button('Continue')
  delete_cookie('hmbrp.sid')
end
