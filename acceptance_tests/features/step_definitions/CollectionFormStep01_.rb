When(/^I go to Step One of the collection form$/) do
  visit config['collection_host']
end

Then(/^I am on Step One of the collection form$/) do
  page.should have_content('Step 1 of 6')
  page.should have_content('From where were you asked to collect your BRP?')
  page.should have_content('This could have been from a Post Office branch or a sponsor, such as your legal representative, employer, university or school.')
  page.should have_content('If you have attempted to collect your BRP, when was it? (optional)')
  page.should have_content('For example, 11 6 2015')
  page.should have_content('Day')
  find_field('collection-date-day')
  page.should have_content('Month')
  find_field('collection-date-month')
  page.should have_content('Year')
  find_field('collection-date-year')
  find_button('Continue')
  delete_cookie('hmbrp.sid')
end

When(/^I enter a partial date into the collection date fields$/) do
  fill_in('collection-date-month', :with => '04')
  fill_in('collection-date-year', :with => '1974')
  click_button('Continue')
end