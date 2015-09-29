When(/^I go to Step Two \- PO of the collection form$/) do
  visit config['collection_host']
  choose('collection-where-radio-Post office')
  click_button('Continue')
end

Then(/^I am on Step Two \- PO of the collection form$/) do
  page.should have_content('Step 2 of 6')
  page.should have_content("Why couldn't you collect your BRP?")
  page.should have_content('Tell us the reason why you were unable to collect the BRP.')
  page.should have_content('I am under 18 and attempted collection without my Responsible Adult')
  find_by_id('reason-radio-under-age')
  page.should have_content('My identity could not be confirmed')
  find_by_id('reason-radio-non-identity')
  page.should have_content('The identity of someone collecting on my behalf could not be confirmed')
  find_by_id('reason-radio-others-identity')
  page.should have_content('The Home Office did not authorise someone else to collect on my behalf')
  find_by_id('reason-radio-others-auth')
  page.should have_content('The vingette in my passport is not linked to my family')
  find_by_id('reason-radio-passport-family')
  page.should have_content('I have lost my passport')
  find_by_id('reason-radio-passport-lost')
  page.should have_content('My passport does not contain a valid entry stamp')
  find_by_id('reason-radio-passport-stamp')
  page.should have_content('My BRP was not there')
  find_by_id('reason-radio-no-brp')
  page.should have_content('Other')
  find_by_id('reason-radio-other')
  find_button('Continue')
  delete_cookie('hmbrp.sid')
end

When(/^I go to Step Two \- Sponsor of the collection form$/) do
  visit config['collection_host']
  choose('collection-where-radio-Sponsor')
  click_button('Continue')
end

Then(/^I am on Step Two \- Sponsor of the collection form$/) do
  page.should have_content('Step 2 of 6')
  page.should have_content("Why couldn't you collect your BRP?")
  page.should have_content('Tell us the reason why you were unable to collect the BRP.')
  page.should have_content('My identity could not be confirmed')
  find_by_id('reason-radio-non-identity')
  page.should have_content('I have lost my passport')
  find_by_id('reason-radio-passport-lost')
  page.should have_content('My passport does not contain a valid entry stamp')
  find_by_id('reason-radio-passport-stamp')
  page.should have_content('My BRP was not there')
  find_by_id('reason-radio-no-brp')
  page.should have_content('Other')
  find_by_id('reason-radio-other')
  find_button('Continue')
  delete_cookie('hmbrp.sid')
end