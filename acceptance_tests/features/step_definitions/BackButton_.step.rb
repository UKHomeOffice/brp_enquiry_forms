When(/^I click Back$/) do
  click_link('Back')
  # puts page.body
end

Then(/^I do not see Back$/) do
  has_no_link? ('Back')
end
