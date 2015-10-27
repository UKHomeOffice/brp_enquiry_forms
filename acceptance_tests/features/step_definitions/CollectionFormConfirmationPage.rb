When(/^I go to the Confirmation page of the collection form$/) do
  visit config['collection_host']
  choose('collection-where-radio-Post office')
  click_button('Continue')
  choose('reason-radio-under-age')
  click_button('Continue')
  fill_in('nominated-fullname', :with => 'Mister Resonable')
  fill_in('nominated-date-day', :with => '17')
  fill_in('nominated-date-month', :with => '08')
  fill_in('nominated-date-year', :with => '1988')
  fill_in('nominated-nationality', :with => 'China')
  fill_in('nominated-id-number', :with => '1234567890')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'Chinese')
  click_button('Continue')
  fill_in('email', :with => 'bts@bullerproof.co.za')
  fill_in('phone', :with => '077517198545')
  click_button('Continue')
  choose('org-help-no')
  click_button('Send')
end

Then(/^I am on Confirmation page of the collection form$/) do
  page.should have_content('Thank you, we have received your information.')
  delete_cookie('hmbrp.sid')
end