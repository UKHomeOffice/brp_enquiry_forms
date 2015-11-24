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
  fill_in('nominated-fullname', :with => 'Mister Resonable')
  fill_in('nominated-date-day', :with => '17')
  fill_in('nominated-date-month', :with => '08')
  fill_in('nominated-date-year', :with => '1988')
  fill_in('nominated-nationality', :with => 'China')
  fill_in('nominated-id-number', :with => '1234567890')
  click_button('Continue')
  fill_in('fullname', :with => 'Topp Dogg')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'Chinese')
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
  page.should have_content('Has an organisation filled in this information on your behalf?')
  page.should have_content('This could be a friend, family member, immigartion lawyer or representative, a charity worker, an employer or a college or university official.')
  find_by_id('org-help-yes')
  find_by_id('org-help-no')
  page.should have_content('Send us your details')
  page.should have_content('By sending us your details you confirm that the information you have provided is true and that you accept our')
  find_link('terms and conditions').visible?
  find_button('Send')
  delete_cookie('hmbrp.sid')
end