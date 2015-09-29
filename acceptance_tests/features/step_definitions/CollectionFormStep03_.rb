When(/^I go to Step Three of the collection form$/) do
  visit config['collection_host']
  choose('collection-where-radio-Post office')
  click_button('Continue')
  choose('reason-radio-under-age')
  click_button('Continue')
end

Then(/^I am on Step Three of the collection form$/) do
  page.should have_content('Step 3 of 6')
  page.should have_content('Who was supposed to collect your BRP on your behalf?')
  page.should have_content('Provide details of the person who tried to collect the BRP on your behalf')
  page.should have_content('Full name')
  find_field('nominated-fullname')
  page.should have_content('Date of birth')
  page.should have_content('For example, 11 6 2015')
  page.should have_content('Day')
  find_field('nominated-date-day')
  page.should have_content('Month')
  find_field('nominated-date-month')
  page.should have_content('Year')
  find_field('nominated-date-year')
  page.should have_content('Country of nationality')
  find_field('nominated-nationality')
  page.should have_content('Identity document number')
  find_field('nominated-id-number')
  find_button('Continue')
  delete_cookie('hmbrp.sid')
end
