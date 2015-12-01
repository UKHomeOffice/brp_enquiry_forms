When(/^I go through to Step Six of the error form$/) do
  click_button('Continue')
  choose('uk-address-radio-yes')
  fill_in('uk-address-street', :with => '2 Marsham Street')
  fill_in('uk-address-town', :with => 'Westminster')
  fill_in('uk-address-postcode', :with => 'SW1P 4DF')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'Chinese')
  fill_in('brp-card', :with => 'ZR1000452')
  # page.status_code.should == 302
  click_button('Continue')
  fill_in('email', :with => 'brpapp15@gmail.com')
  fill_in('phone', :with => '02086687645')
  # page.status_code.should == 302
  click_button('Continue')
  # page.status_code.should == 302
end

When(/^I fill the "([^"]*)" with "([^"]*)"$/) do |arg1, arg2|
  fill_in(arg1, :with => arg2)
end

Then(/^I see "([^"]*)" on Step Six of the error form$/) do |arg1|
  page.should have_content(arg1)
  delete_cookie('hmbrp.sid')
end

Then(/^I see the personal details I entered on Step Four of the error form$/) do
  page.should have_content('Step 4 of 6')
end

When(/^I change the value in the BRP card number field$/) do
  fill_in('brp-card', :with => '0987654321')
end

Then(/^I can see all the changed personal details from Step Four of the error form$/) do
  page.should have_content('Step 6 of 6')
  page.should have_content('Hans Zimmerman')
  # page.should have_content('6 January 1971')
  page.should have_content('South Africa')
  page.should have_content('987654321')
  delete_cookie('hmbrp.sid')
end

Then(/^I see email address and phone number I entered on Step Five of the error form$/) do
  page.should have_content('Step 5 of 6')
  find_field('email').value.should == 'brpapp15@gmail.com'
  find_field('phone').value.should == '444444444444'
end

Then(/^I can see the changed email address and phone number from Step Five of the error form$/) do
  page.should have_content('Step 6 of 6')
  page.should have_content('top@turnitup.cr')
  page.should have_content('02086682365')
  delete_cookie('hmbrp.sid')
end

Given(/^I have provided a contact address and I am on Step Five of the error form$/) do                     
  visit config['correct_mistakes_host']
  page.should have_content('Step 1 of 6')
  choose('UK')
  click_button('Continue')
  # page.status_code.should == 200
  check('last-name-error-checkbox')
  fill_in('last-name-error', :with => 'Reasonable')
  click_button('Continue')
  choose('uk-address-radio-yes')
  fill_in('uk-address-street', :with => '2 Marsham Street')
  fill_in('uk-address-town', :with => 'Westminster')
  fill_in('uk-address-postcode', :with => 'SW1P 4DF')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'Chinese')
  fill_in('brp-card', :with => '1234567890')
  # page.status_code.should == 302
  click_button('Continue')
  check('no-email')
  fill_in('contact-address-street', :with => '2 Marsham Street')
  fill_in('contact-address-town', :with => 'Westminster')
  fill_in('contact-address-county', :with => 'West Sussex')
  fill_in('contact-address-postcode', :with => 'SW1P 4DF')
  click_button('Continue')
  # page.status_code.should == 302
end

Then(/^I see the contact address I entered on Step Five of the error form$/) do
  find_field('contact-address-street').value.should == '2 Marsham Street'
  find_field('contact-address-town').value.should == 'Westminster'
  find_field('contact-address-county').value.should == 'West Sussex'
  find_field('contact-address-postcode').value.should == 'SW1P 4DF'
end

When(/^I change the value in the House name field of Step Four of the error form$/) do
  fill_in('contact-address-street', :with => 'Metro-point, 49 Sydenham Road')
end

When(/^I change the value in the Town\/City field of Step Four of the error form$/) do
  fill_in('contact-address-town', :with => 'Croydon')
end

When(/^I change the value in the County field of Step Four of the error form$/) do
  fill_in('contact-address-county', :with => 'Greater London')
end

When(/^I change the value in the Postcode field of Step Four of the error form$/) do
  fill_in('contact-address-postcode', :with => 'CR0 2EU')
end

Then(/^I can see all the changed address from step four of the error form$/) do
  page.should have_content('Step 6 of 6')
  page.should have_content('Metro-point, 49 Sydenham Road')
  page.should have_content('Croydon')
  page.should have_content('Greater London')
  page.should have_content('CR0 2EU')
  delete_cookie('hmbrp.sid')
end
