When(/^I go to Step Two of the delivery form$/) do
  visit config['not_arrived_host']
  choose('received-yes')
  fill_in('delivery-date-day', :with => '17')
  fill_in('delivery-date-month', :with => '08')
  fill_in('delivery-date-year', :with => '1988')
  click_button('Continue')
end

Then(/^I am on the lost letter page of the delivery form delivery form$/) do
  page.should have_content('We need to know the date on your letter so we can look into why you haven\'t received your BRP. To find out when your letter was sent, call customer services on 0300 123 2241')
  find_button('Close').click
  delete_cookie('hmbrp.sid')
end

Given /^I wait for (\d+) seconds?$/ do |n|
  sleep(n.to_i)
end
