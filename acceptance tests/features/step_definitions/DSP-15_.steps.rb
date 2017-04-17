When(/^I go to Step One$/) do                                                
  visit '' #Add the url
  page.status_code.should == 200
end                                                                          
                                                                             
Then(/^I am on Step One$/) do                                                
  page.status_code.should == 200
  page.should have_content('Step 1 of 5')
  page.should have_content('Have you received a letter from the Home Office telling you your biometric residence permit was being delivered to you by a courier?')
  page.should have_content('This letter would have explained your biometric permit is going to be delivered. ')
  page.should have_content('What is the date on the letter?')
  page.should have_content('For example, 11  6  2015')
  page.should have_content('Day')
  page.should have_content('Month')
  page.should have_content('Year')
  page.should have_content('Day')
  # page.should have_content('I don't have the letter anymore') how do you assert a string with an apostrophe
  page.should have_unchecked_field('Yes')
  page.should have_unchecked_field('No')
  page.should have_unchecked_field('') #What is the name of the checkbox
  find_button('Continue').click
end                                                                          