When(/^I go to Step Four of the lost stolen damaged form$/) do
  visit config['lost_stolen_host']
  # page.status_code.should == 200

  choose('UK')
  click_button('Continue')
  fill_in('date-lost-day', :with => '17')
  fill_in('date-lost-month', :with => '08')
  fill_in('date-lost-year', :with => '1988')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'China')
  click_button('Continue')
end

Then(/^I am on Step Four of the lost stolen damaged form$/) do
  page.should have_content('Step 4 of 5')
  page.should have_content('How should we contact you to tell you what to do next?')
end