When(/^I check the Conditions or lenth of stay checkbox$/) do
  check('conditions-error-checkbox')
end

When(/^I type something into the Conditions or length of the stay field$/) do
  fill_in('conditions-error', :with => "It's all wrong")
end

Then(/^I am on the Error Conditons or Length of stay exit page$/) do
  page.should have_content('Information about leave to remain in the UK')
  page.should have_content('As you think the conditions or length of your leave are incorrect you must apply for administrative review, where this will be considered.')                                             
  find_link('Close').visible?
  find_link('administrative review')
  click_link('administrative review')
  page.should have_content('Ask for a visa administrative review')
  delete_cookie('hmbrp.sid')
end