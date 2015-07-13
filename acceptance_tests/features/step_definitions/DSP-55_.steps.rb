Then(/^I am on the error page$/) do
  page.should have_content('received a letter from the Home Office saying your application to remain in the UK was successful it may mean a decision about your application to stay in the UK has not been made yet. Meaning a biometric residence permit would not have been sent out.')
end