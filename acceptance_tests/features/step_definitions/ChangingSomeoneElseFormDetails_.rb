Then(/^I see the personal details I entered on Step One of the Someone Else form$/) do
  find_field('someone-else-fullname').value.should == 'Alex Murphy'
  find_field('someone-else-date-day').value.should == '01'
  find_field('someone-else-date-month').value.should == '02'
  find_field('someone-else-date-year').value.should == '1971'
  find_field('someone-else-nationality').value.should == 'China'
  find_field('someone-else-id-number').value.should == '1234567890'
end

When(/^I change the nominated person values$/) do
  fill_in('someone-else-fullname', :with => 'Mister Reasonable')
  fill_in('someone-else-date-day', :with => '02')
  fill_in('someone-else-date-month', :with => '03')
  fill_in('someone-else-date-year', :with => '1972')
  fill_in('someone-else-nationality', :with => 'South Africa')
  fill_in('someone-else-id-number', :with => '0987654321')
end

Then(/^I see the changes I made in Step one of the Someone Else form$/) do
  page.should have_content('Mister Reasonable')
  page.should have_content('02 March 1972')
  page.should have_content('South Africa')
  page.should have_content('0987654321')
end

Then(/^I see the details I entered on the Step Three of the Someone Else form$/) do
	find_field('fullname').value.should == 'Alex Murphy'
	find_field('date-of-birth-day').value.should == '17'
	find_field('date-of-birth-month').value.should == '08'
	find_field('date-of-birth-year').value.should == '1988'
	find_field('nationality').value.should == 'China'
	find_field('passport').value.should == '0987654321'
end

Then(/^I change the details entered in Step Three of the Someone Else form$/) do
  fill_in('fullname', :with => 'R Kelly')
  fill_in('date-of-birth-day', :with => '05')
  fill_in('date-of-birth-month', :with => '07')
  fill_in('date-of-birth-year', :with => '1987')
  fill_in('nationality', :with => 'Japan')
  fill_in('passport', :with => '1234567890')
end

Then(/^I see all the changes I made on Step Three of the Someone Else form$/) do
  page.should have_content('R Kelly')
  page.should have_content('5 July 1987')
  page.should have_content('Japan')
end

Then(/^I see email address and phone number I entered on Step Four of the Someone Else form$/) do
  fill_in('email', :with => 'zero@forconduct.cr')
  fill_in('phone', :with => '07751710987')
end

Then(/^I can see the changed email address and phone number from Step Five of the Someone Else form$/) do
  page.should have_content('top@turnitup.cr')
  page.should have_content('02086682365')
end