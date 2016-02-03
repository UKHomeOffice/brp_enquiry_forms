Given(/^I am on the home page of the Collections Form$/) do
  visit config['collection_host']
end

And(/^I select "(.*?)" as the option chosen for collecting my BRP$/) do |collection_option|
  page.choose(collection_option)
  page.click_button('Continue')
end

Given(/^I select "(.*?)" as the reason why I couldn't collect my BRP$/) do |reason|
  page.choose(reason)
  page.click_button('Continue')
end

Given(/^I enter my personal details$/) do
  page.fill_in('Full name', :with => 'Bob')
  page.fill_in('Day', :with => '12')
  page.fill_in('Month', :with => '04')
  page.fill_in('Year', :with => '1996')
  page.fill_in('Country of nationality', :with => 'Peru')
  page.click_button('Continue')
  page.fill_in('Email address', :with => 'test@gov.uk')
  page.click_button('Continue')
end

When(/^I submit the form$/) do
  page.choose('No')
  page.click_button('Send')
end

Then(/^the message "(.*?)" is displayed on the confirmation page$/) do |confirmation_message|
  page.should have_content(confirmation_message)
end
