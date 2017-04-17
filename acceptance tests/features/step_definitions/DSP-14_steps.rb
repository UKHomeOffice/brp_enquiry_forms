When(/^I go the Start page$/) do
  visit '' #Add the url
  page.status_code.should == 200
end

Then(/^I am on the Start page$/) do
  page.status_code.should == 200
  page.should have_content('Get a biometric residence permit (BRP)')
  find_button('Start').click
end