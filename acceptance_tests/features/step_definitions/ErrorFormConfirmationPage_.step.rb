When(/^I go to the Confirmation page of the error form$/) do
  visit config['correct_mistakes_host']
  # page.status_code.should == 200
  page.should have_content('Step 1 of 6')
  choose('UK')
  click_button('Continue')
  check('last-name-error-checkbox')
  fill_in('last-name-error', :with => 'Reasonable')
  click_button('Continue')
  choose('uk-address-radio-yes')
  fill_in('uk-address-street', :with => '2 Marsham Street')
  fill_in('uk-address-town', :with => 'Westminster')
  fill_in('uk-address-postcode', :with => 'SW1P 4DF')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'Chinese')
  # page.status_code.should == 302
  click_button('Continue')
  fill_in('email', :with => 'brpapp15@gmail.com')
  # page.status_code.should == 302
  click_button('Continue')
  # page.status_code.should == 302
  choose('org-help-no')
  
  # Submit the form (on Local and Dev only)
  if config['environment'] != 'prod' && config['submit'] == true
      puts 'Special actions whilst in Local or DEV'
      click_button('Send')
  end

end

Then(/^I am on Confirmation page of the error form$/) do
  page.should have_content('Thank you, we have received your information.')
  # page.should have_content('We keep your personal data secure according to our')
  # find_link('privacy policy.').visible?
  # page.should have_content('What happens next')
  # page.should have_content('We will review the information you have sent us and we will let you know if you need a new card.')
  # page.should have_content('We will get back to you within ')
  # page.should have_content('5 working days')
  # page.should have_content('. For example, if you contact us on a Monday you will hear back by the following Monday.')
  # page.should have_content('We will then advise you what to do next.')
  find_link('Close')
  delete_cookie('hmbrp.sid')
end

When(/^fill the "([^"]*)" with the value "([^"]*)"$/) do |arg1, arg2|
  fill_in(arg1, :with => arg2)
end

When(/^I select the "([^"]*)"$/) do |arg1|
  choose(arg1)
end

When(/^I check the date of bith checkbox$/) do
  check('date-of-birth-error-checkbox')
end

When(/^I fill in the date of birth fields$/) do
  fill_in('date-of-birth-error-day', :with => '17')
  fill_in('date-of-birth-error-month', :with => '08')
  fill_in('date-of-birth-error-year', :with => '1988')
end

Then(/^I go through the rest of the steps$/) do
  click_button('Continue')
  choose('uk-address-radio-yes')
  fill_in('uk-address-street', :with => '2 Marsham Street')
  fill_in('uk-address-town', :with => 'Westminster')
  fill_in('uk-address-postcode', :with => 'SW1P 4DF')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'Chinese')
  # page.status_code.should == 302
  click_button('Continue')
  fill_in('email', :with => 'brpapp15@gmail.com')
  # page.status_code.should == 302
  click_button('Continue')
  # page.status_code.should == 302
  choose('org-help-no')
  
  # Submit the form (on Local and Dev only)
  if config['environment'] != 'prod' && config['submit'] == true
      puts 'Special actions whilst in Local or DEV'
      click_button('Send')
  end

end