#
# => DSP-22_.steps
#

When(/^I fill in all the address fields$/) do
  fill_in('address-street', :with => 'Outwood Ln')
  fill_in('address-town', :with => 'Coulsdon')
  fill_in('address-county', :with => 'Surrey')
  fill_in('address-postcode', :with => 'CR5 3NP')
end

When(/^I proceed to Step Four$/) do
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'China')
  fill_in('brp-card', :with => 'ZR1000452')
  click_button('Continue')
end

Then(/^I see all the values I entered in Step Two$/) do
  page.has_select?('my_select_box', :options =>['contact-address-street'])
	find_field('contact-address-street').value.should == 'Outwood Ln'
	page.has_select?('my_select_box', :options =>['contact-address-town'])
	find_field('contact-address-town').value.should == 'Coulsdon'
	page.has_select?('my_select_box', :options =>['contact-address-county'])
	find_field('contact-address-county').value.should == 'Surrey'
	page.has_select?('my_select_box', :options =>['contact-address-postcode'])
	find_field('contact-address-postcode').value.should == 'CR5 3NP'
end

When(/^I proceed to Step Three$/) do
  click_button('Continue')
end

When(/^I fill in all the fields$/) do
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'China')
  fill_in('passport', :with => '10000111111001010101')
  fill_in('brp-card', :with => 'ZR1000452')
end

When(/^I add an email address$/) do
  fill_in('email', :with => 'bts@bullerproof.cr')
end

When(/^I proceed to Step Five$/) do
  click_button('Continue')
end

Then(/^I see all the values I have entered in the previous steps$/) do
  page.should have_content('Is the information you have given us correct?')
  page.should have_content('Outwood Ln, Coulsdon, Surrey, CR5 3NP')
  page.should have_content('Alex Murphy')
  page.should have_content('17-08-1988')
  page.should have_content('China')
  page.should have_content('10000111111001010101')
  page.should have_content('bts@bullerproof.cr')
end

When(/^I click Continue$/) do
  click_button('Continue')
end

#
# => DSP-54_.steps
#
 When(/^I enter text values into the date field$/) do
  fill_in('delivery-date-day', :with => 'Te')
  fill_in('delivery-date-month', :with => 'Te')
  fill_in('delivery-date-year', :with => 'Text')
end

When(/^I enter special character values into the date field$/) do
  fill_in('delivery-date-day', :with => '!"')
  fill_in('delivery-date-month', :with => '&*')
  fill_in('delivery-date-year', :with => '%^&*')
end

When(/^I enter the correct values into the date field$/) do
  fill_in('delivery-date-day', :with => '17')
  fill_in('delivery-date-month', :with => '08')
  fill_in('delivery-date-year', :with => '1988')
end

When(/^I see the "([^"]*)" link$/) do |arg1|
  find_link arg1
end

When(/^I enter a future date into the date field$/) do
  fill_in('delivery-date-day', :with => '17')
  fill_in('delivery-date-month', :with => '08')
  fill_in('delivery-date-year', :with => '2030')
end

Then(/^I see "([^"]*)"$/) do |arg1|
  page.should have_content arg1
  delete_cookie('hmbrp.sid')
end

#
# => DSP-61_.steps
#
# TO BE DONE

#
# => DSP-65_.steps
#


When(/^I fill in all the address details$/) do
  complete_address_fields
end

When(/^I fill in the address street field$/) do
  complete_street_field
end

When(/^I fill in the second address field$/) do
  complete_town_field
end

When(/^I fill in the postcode field$/) do
  complete_postcode_field
end

When(/^fill in the postcode field with numbers$/) do
  fill_in('address-postcode', :with => '123456')
end

When(/^I fill in the postcode field with special characters$/) do
  fill_in('address-postcode', :with => '!&^')
end

#
# => DSP-66_.steps
#
When(/^I enter a valid date of birth$/) do
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
end

When(/^I type fill in the nationality field with something valid$/) do
  fill_in('nationality', :with => 'Mongolian')
end

When(/^I enter something valid in the Full name field$/) do
  fill_in('fullname', :with => 'Alex Murphy')
end

When(/^I enter something valid in the BRP card number field$/) do
  fill_in('brp-card', :with => 'ZR1000452')
end

When(/^I enter numbers into the Full name field$/) do
  fill_in('fullname', :with => '1234567890')
end

When(/^I enter special character values into the Passport number field$/) do
  fill_in('passport', :with => ')*^&&%&*')
end

When(/^I enter text values into the Date of birth field$/) do
  fill_in('date-of-birth-day', :with => 'ad')
  fill_in('date-of-birth-month', :with => 'bc')
  fill_in('date-of-birth-year', :with => 'ao')
end

When(/^I enter special character values into the Date of birth field$/) do
  fill_in('date-of-birth-day', :with => '^&')
  fill_in('date-of-birth-month', :with => '&^')
  fill_in('date-of-birth-year', :with => '^&^&')
end

#
# => DSP-67_.steps
#
When(/^I check the I do not have an email address checkbox$/) do
  check('no-email')
end

When(/^I enter an email address without an @$/) do
  fill_in('email', :with => 'btsbullerproof.cr')
end

When(/^I fill the Phone number field with special characters$/) do
  fill_in('phone', :with => '^&^&^&^&')
end

When(/^I fill the Phone number field with text$/) do
  fill_in('phone', :with => 'vghvmvmg')
end

When(/^I fill in the first contact address field$/) do
  complete_street_field_with_prefix "contact-"
end

When(/^I fill in the second contact address field$/) do
  complete_town_field_with_prefix "contact-"
end

When(/^I fill in the contact postcode field$/) do
  complete_postcode_field_with_prefix "contact-"
end

#
# => DSP-68_.steps
#
When(/^I click Send$/) do
  click_button ('Send')
end

When(/^I enter something in the Organisation field$/) do
  fill_in('organisation', :with => 'sogeti')
end

When(/^I enter something valid in the rep name field field$/) do
  fill_in('rep-name', :with => 'Alex')
end
