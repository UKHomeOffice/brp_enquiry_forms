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