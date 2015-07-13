When(/^I fill in the first address field$/) do
  fill_in('address-street', :with => '2 Marsham Street')
end

When(/^I fill in the second address field$/) do
  fill_in('address-town', :with => 'Westminster')
end

When(/^I fill in the postcode field$/) do
  fill_in('address-postcode', :with => 'SW1P 4DF')
end

When(/^fill in the postcode field with numbers$/) do
  fill_in('address-postcode', :with => '123456')
end

When(/^I fill in the postcode field with special characters$/) do
  fill_in('address-postcode', :with => '!&^')
end                                                                       