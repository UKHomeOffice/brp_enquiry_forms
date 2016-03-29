When(/^I go to Step Two of the someone else form$/) do
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
end

Then(/^I am on Step Two of the somone else form$/) do
  page.should have_content('Step 2 of 5')
  page.should have_content('Why do you need someone else to collect your BRP?')
  page.should have_content('I have a medical condition')
  find_by_id('someone-else-reason-radio-incapable')
  page.should have_content('I am under 18')
  find_by_id('someone-else-reason-radio-under-age')
  page.should have_content('None of the above')
  find_by_id('someone-else-reason-radio-other')
end

Then(/^I see the related content$/) do
  page.should have_content('Describe your situation')
end