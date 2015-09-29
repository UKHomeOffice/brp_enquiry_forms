When(/^I check the I do not have an email address checkbox$/) do             
  check('no-email')
end                                                                          
                                                                             
When(/^I enter an email address without an @$/) do
  fill_in('email', :with => 'alex.murphyuksogeti.com')
end                                                                          
                                                                             
When(/^I fill the Phone number field with special characters$/) do
  fill_in('phone', :with => '^&^&^&^&')
end                                                                          
                                                                             
When(/^I fill the Phone number field with text$/) do
  fill_in('phone', :with => 'vghvmvmg')
end

When(/^I fill in the first contact address field$/) do
  fill_in('contact-address-street', :with => '2 Marsham Street')
end

When(/^I fill in the second contact address field$/) do
  fill_in('contact-address-town', :with => 'Westminster')
end

When(/^I fill in the contact postcode field$/) do
  fill_in('contact-address-postcode', :with => 'SW1P 4DF')
end