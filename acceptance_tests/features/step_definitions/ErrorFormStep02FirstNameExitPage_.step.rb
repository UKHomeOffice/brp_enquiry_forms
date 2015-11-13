When(/^I check the First name checkbox$/) do
  check('first-name-error-checkbox')
end

When(/^I type thirty one characters into the First name field$/) do
  fill_in('first-name-error', :with => '1234567890123456789012345678901')
end

Then(/^I am on the first First name exit page$/) do
  page.should have_content('Long names on BRPs')
  page.should have_content('You typed in your first name as:')
  page.should have_content('1234567890123456789012345678901')
  page.should have_content('Your first name has 31 letters. Your BRP can only show a maximum of 30 letters, so it is shortened to this on your BRP:')
  page.should have_content('123456789012345678901234567890')
  page.should have_content('Is this how it looks on your BRP?')
end

Then(/^I am on the second First name exit page$/) do
  page.should have_content('Long names on BRPs')
  page.should have_content('Due to limitations, we can only print the first 30 characters of your name on your BRP.')
  page.should have_content('This is not an error and you will be able to use your BRP.')
  page.should have_content('You do not need to do anything else.')
  find_link('Close').visible?
  delete_cookie('hmbrp.sid')
end