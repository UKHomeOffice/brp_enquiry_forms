When(/^I go to Step Six of the collection form$/) do
  visit config['collection_host']

  choose('collection-where-radio-Post Office')
  fill_in('collection-date-day', :with => '03')
  fill_in('collection-date-month', :with => '04')
  fill_in('collection-date-year', :with => '1974')
  click_button('Continue')
  choose('reason-radio-under-age')
  fill_in('reason-under-age', :with => 'Born too late')
  click_button('Continue')

  fill_in('fullname', :with => 'Topp Dogg')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'China')
  click_button('Continue')
  fill_in('email', :with => 'bts@bullerproof.co.za')
  fill_in('phone', :with => '07751719873')
  click_button('Continue')
end

When(/^I go to Step Six of the collection form for reason-radio-others-identity$/) do
  visit config['collection_host']

  choose('collection-where-radio-Post Office')
  fill_in('collection-date-day', :with => '03')
  fill_in('collection-date-month', :with => '04')
  fill_in('collection-date-year', :with => '1974')
  click_button('Continue')
  choose('reason-radio-others-identity')
  fill_in('reason-others-identity', :with => 'The person did not have any ID')
  click_button('Continue')

  fill_in('nominated-fullname', :with => 'Other CollectingPerson')
  fill_in('nominated-date-day', :with => '01')
  fill_in('nominated-date-month', :with => '11')
  fill_in('nominated-date-year', :with => '1977')
  fill_in('nominated-nationality', :with => 'China')
  fill_in('nominated-id-number', :with => 'MYIDNUMBER')
  click_button('Continue')

  fill_in('fullname', :with => 'Topp Dogg')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'China')
  click_button('Continue')
  fill_in('email', :with => 'bts@bullerproof.co.za')
  fill_in('phone', :with => '07751719873')
  click_button('Continue')
end

Then(/^I am on Step Six of the collection form$/) do
  page.should have_content('Step 6 of 6')
  page.should have_content('Is the information you have given us correct?')
  page.should have_content("If any information is incorrect, you can change it here.")
  page.should have_content('Send us your details')
  page.should have_content('By sending us your details you confirm that the information you have provided is true and that you accept our terms and conditions.')
  page.should have_content('Has someone helped you fill in this form?')
  page.should have_content('This could be a friend, family member, immigartion lawyer or representative, a charity worker, an employer or a college or university official.')
  find_by_id('org-help-yes')
  find_by_id('org-help-no')
  page.should have_content('Send us your details')
  page.should have_content('By sending us your details you confirm that the information you have provided is true and that you accept our')
  find_link('terms and conditions').visible?
  find_button('Send')
  delete_cookie('hmbrp.sid')
end
