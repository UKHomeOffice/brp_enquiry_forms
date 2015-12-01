When(/^I check the Enrolment letter checkbox$/) do
  check('letter-error-checkbox')
end

When(/^I type something into the Enrolment letter field$/) do
  fill_in('letter-error', :with => "It's all wrong")
end

Then(/^I am on the Enrolment letter exit page$/) do
  page.should have_content('Enrolment letter problems')
  page.should have_content('As you have not received a BRP yet and have a problem with your enrolment, please follow our Enrolment letter process to enquire about your problem.')
  find_link('Close').visible?
  # FIXME: Edit and uncomment once we have something to link to
  #find_link('Enrolment letter')
  #click_link('Enrolment letter')
  #page.should have_content('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  delete_cookie('hmbrp.sid')
end
