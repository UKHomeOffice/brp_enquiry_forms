Then(/^I see the details I entered on Step One of the collection form$/) do
	find_field('collection-date-day').value.should == '03'
	find_field('collection-date-month').value.should == '04'
	find_field('collection-date-year').value.should == '1974'
end

When(/^I change the values in the Date of Collection fields$/) do
  fill_in('collection-date-day', :with => '04')
  fill_in('collection-date-month', :with => '03')
  fill_in('collection-date-year', :with => '1971')
end

When(/^I proceed back to Step Six of the collection form$/) do
  click_button('Continue')
  choose('reason-radio-others-identity')
  click_button('Continue')
  fill_in('nominated-fullname', :with => 'Mister Resonable')
  fill_in('nominated-date-day', :with => '17')
  fill_in('nominated-date-month', :with => '08')
  fill_in('nominated-date-year', :with => '1988')
  fill_in('nominated-nationality', :with => 'China')
  fill_in('nominated-id-number', :with => '1234567890')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'China')
  click_button('Continue')
  fill_in('email', :with => 'blockb@veryverygood.cr')
  fill_in('phone', :with => '077517194758')
  click_button('Continue')
end

When(/^I click the Change link for Step One of the collection form$/) do
  page.all(:link,"Change")[0].click
end

Then(/^I can see all the changed personal details from Step One of the collection form$/) do
  page.should have_content('Sponsor')
  page.should have_content('4 March 1971')
end

When(/^I click the Change link for Step Two of the collection form$/) do
  page.all(:link,"Change")[1].click
end

When(/^I select "([^"]*)" on the Step Two \- PO of the collection form$/) do |arg1|
  choose arg1
end

Then(/^I see the details I entered on the Step Two \- PO of the collection form$/) do
  page.should have_content('Step 2 of 6')
  find_field('reason-under-age').value.should == 'Born too late'
end

When(/^I fill in the "([^"]*)" with "([^"]*)" on the Step Two \- PO of the collection form$/) do |arg1, arg2|
  fill_in arg1, :with => arg2
end

Then(/^I can see "([^"]*)" and "([^"]*)" on Step Six on the collection form$/) do |arg1, arg2|
  page.should have_content arg1
  page.should have_content arg2
end

Then(/^I see the details I entered on the Step Three of the collection form$/) do
  find_field('nominated-fullname').value.should == 'Other CollectingPerson'
  find_field('nominated-date-day').value.should == '01'
  find_field('nominated-date-month').value.should == '11'
  find_field('nominated-date-year').value.should == '1977'
  find_field('nominated-nationality').value.should == 'China'
  find_field('nominated-id-number').value.should == 'MYIDNUMBER'
end

Then(/^I change the details entered in Step Three of the collection form$/) do
  fill_in('nominated-fullname', :with => 'Mister Unresonable')
  fill_in('nominated-date-day', :with => '24')
  fill_in('nominated-date-month', :with => '07')
  fill_in('nominated-date-year', :with => '1971')
  fill_in('nominated-nationality', :with => 'Japan')
  fill_in('nominated-id-number', :with => '0987654321')
end

Then(/^I see all the changes I made on Step (\d+) of the collection form$/) do |arg1|
  page.should have_content('Mister Unresonable')
  page.should have_content('24 July')
  page.should have_content('Japan')
  page.should have_content('0987654321')
end

Then(/^I see the personal details I entered on Step Four of the collection form$/) do
  find_field('fullname').value.should == 'Topp Dogg'
  find_field('date-of-birth-day').value.should == '17'
  find_field('date-of-birth-month').value.should == '08'
  find_field('date-of-birth-year').value.should == '1988'
  find_field('nationality').value.should == 'China'
end

Then(/^I can see all the changed personal details from step three of the collection form$/) do
  page.should have_content('Hans Zimmerman')
  page.should have_content('6 January 1971')
  page.should have_content('South Africa')
  page.should have_content('987654321')
end

Then(/^I see email address and phone number I entered on Step Five of the collection form$/) do
	find_field('email').value.should == 'bts@bullerproof.co.za'
	find_field('phone').value.should == '07751719873'
end

Then(/^I can see the changed email address and phone number from Step Five of the collection form$/) do
  page.should have_content('top@turnitup.cr')
  page.should have_content('02086682365')
end
