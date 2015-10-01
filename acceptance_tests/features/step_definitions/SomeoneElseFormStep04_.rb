When(/^I go to Step Four of the someone else form$/) do
  visit config['someone_host']
  choose('arrange-collection-radio-someone-else')
  fill_in('someone-else-fullname', :with => 'Alex Murphy')
  fill_in('someone-else-date-day', :with => '01')
  fill_in('someone-else-date-month', :with => '02')
  fill_in('someone-else-date-year', :with => '1971')
  fill_in('someone-else-nationality', :with => 'China')
  fill_in('someone-else-id-number', :with => '1234567890')
  click_button('Continue')
  choose('someone-else-reason-radio-under-age')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'China')
  fill_in('passport', :with => '0987654321')
  click_button('Continue')
end

Then(/^I am on Step Four of the somone else form$/) do
  page.should have_content('Where can we contact you to let you know about your BRP?')
  page.should have_content('Email address')
  find_by_id('email')
  find_by_id('no-email')
  page.should have_content('I do not have an email address')
  find_by_id('phone')
  find_button('Continue').click
  delete_cookie('hmbrp.sid')
end