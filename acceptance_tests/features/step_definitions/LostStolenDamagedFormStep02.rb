When(/^I go to Step Two of the lost stolen damaged form$/) do                                              
  visit config['lost_host']
  # page.status_code.should == 200

  choose('UK')
  click_button('Continue')
end

When(/^I enter valid values into the date lost fields$/) do
  fill_in('date-lost-day', :with => '17')
  fill_in('date-lost-month', :with => '08')
  fill_in('date-lost-year', :with => '1988')
end

When(/^I enter text values into the date lost field$/) do
  fill_in('date-lost-day', :with => 'qw')
  fill_in('date-lost-month', :with => 'qw')
  fill_in('date-lost-year', :with => 'qwer')
end

When(/^I enter special character values into the date lost field$/) do
  fill_in('date-lost-day', :with => '!@')
  fill_in('date-lost-month', :with => '@!')
  fill_in('date-lost-year', :with => '****')
end

When(/^I enter a future date into the date lost field$/) do
  fill_in('date-lost-day', :with => '17')
  fill_in('date-lost-month', :with => '08')
  fill_in('date-lost-year', :with => '2030')
end
Then(/^I am on Step Two of the lost stolen damaged form$/) do                                              
  page.should have_content('When did you realise you no longer had your BRP?')                                                
  page.should have_content('Step 2 of 5')     
end