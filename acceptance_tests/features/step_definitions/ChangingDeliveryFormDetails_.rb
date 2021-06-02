When(/^I click the "([^"]*)" link in the "([^"]*)"$/) do |arg1, arg2|
find(:xpath, arg2).click(arg1)
end

Then(/^I see the personal details I entered on Step Three of the delivery form$/) do
	find_field('fullname').value.should == 'Alex Murphy'
	find_field('date-of-birth-day').value.should == '17'
	find_field('date-of-birth-month').value.should == '08'
	find_field('date-of-birth-year').value.should == '1988'
	find_field('nationality').value.should == 'China'
	find_field('passport').value.should == '123456789'
end

When(/^I change the value in the Full name field$/) do
  fill_in('fullname', :with => 'Hans Zimmerman')
end

When(/^I change the values in the Date of birth fields$/) do
  fill_in('date-of-birth-day', :with => '06')
  fill_in('date-of-birth-month', :with => '01')
  fill_in('date-of-birth-year', :with => '2011')
end

When(/^I change the value in the Nationality field$/) do
  fill_in('nationality', :with => 'South Africa')
end

When(/^I change the value in the Passport number field$/) do
  fill_in('passport', :with => '987654321')
end

When(/^I can see all the changed personal details from step three of the delivery form$/) do
  page.should have_content('Step 5 of 5')
  page.should have_content('Hans Zimmerman')
  # page.should have_content('6 January 1971')
  page.should have_content('South Africa')
  page.should have_content('987654321')
  delete_cookie('hmbrp.sid')
end

Then(/^I see email address and phone number I entered on Step Four of the delivery form$/) do
	find_field('email').value.should == 'zero@forconduct.cr'
	find_field('phone').value.should == '07751710987'
end

When(/^I change the value in the Email field$/) do
  fill_in('email', :with => 'top@turnitup.cr')
end

When(/^I change the value in the Phone field$/) do
  fill_in('phone', :with => '02086682365')
end

Then(/^I can see the changed email address and phone number from step four of the delivery form$/) do
  page.should have_content('Step 5 of 5')
  page.should have_content('top@turnitup.cr')
  page.should have_content('02086682365')
  delete_cookie('hmbrp.sid')
end

Given(/^I have provided a contact address and I am on Step Five of the delivery form$/) do
  visit config['not_arrived_host']
  choose('received-yes')
  fill_in('delivery-date-day', :with => '17')
  fill_in('delivery-date-month', :with => '08')
  fill_in('delivery-date-year', :with => '1988')
  click_button('Continue')
  choose('address-match-yes')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'China')
  fill_in('passport', :with => '123456789')
  click_button('Continue')
  check('use-address')
  fill_in('contact-address-house-number', :with => '2')
  fill_in('contact-address-street', :with => 'Marsham Street')
  fill_in('contact-address-town', :with => 'Westminster')
  fill_in('contact-address-county', :with => 'West Sussex')
  fill_in('contact-address-postcode', :with => 'SW1P 4DF')
  click_button('Continue')
end

Then(/^I see the contact address I entered on Step Four of the delivery form$/) do
	find_field('contact-address-house-number').value.should == '2'
	find_field('contact-address-street').value.should == 'Marsham Street'
	find_field('contact-address-town').value.should == 'Westminster'
	find_field('contact-address-county').value.should == 'West Sussex'
	find_field('contact-address-postcode').value.should == 'SW1P 4DF'
end

When(/^I change the value in the House name field of Step Four of the delivery form$/) do
  fill_in('contact-address-street', :with => 'Metro-point, 49 Sydenham Road')
end

When(/^I change the value in the Town\/City field of Step Four of the delivery form$/) do
  fill_in('contact-address-town', :with => 'Croydon')
end

When(/^I change the value in the County field of Step Four of the delivery form$/) do
  fill_in('contact-address-county', :with => 'Greater London')
end

When(/^I change the value in the Postcode field of Step Four of the delivery form$/) do
  fill_in('contact-address-postcode', :with => 'CR0 2EU')
end

Then(/^I can see all the changed address from step four of the delivery form$/) do
  page.should have_content('Step 5 of 5')
  page.should have_content('Metro-point, 49 Sydenham Road')
  page.should have_content('Croydon')
  page.should have_content('Greater London')
  page.should have_content('CR0 2EU')
  delete_cookie('hmbrp.sid')
end
