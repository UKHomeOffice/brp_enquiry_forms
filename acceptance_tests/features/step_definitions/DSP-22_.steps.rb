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
  fill_in('nationality', :with => 'Chinese')
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
  fill_in('nationality', :with => 'Chinese')
  fill_in('passport', :with => '10000111111001010101')
end                                                                          
                                                                             
When(/^I add an email address$/) do                                        
  fill_in('email', :with => 'alex.murphy@uk.sogeti.com')
end                                                                          
                                                                             
When(/^I proceed to Step Five$/) do
  click_button('Continue')                                                
  # puts page.body
end                                                                          
                                                                             
Then(/^I see all the values I have entered in the previous steps$/) do
  page.should have_content('Is the information you have given us correct?')
  page.should have_content('Outwood Ln, Coulsdon, Surrey, CR5 3NP')
  page.should have_content('Alex Murphy')
  page.should have_content('17-08-1988')
  page.should have_content('Chinese')
  page.should have_content('10000111111001010101')
  page.should have_content('alex.murphy@uk.sogeti.com')
end

When(/^I click Continue$/) do
  click_button('Continue')
end                                                                          