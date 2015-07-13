When(/^I click Send$/) do                                                     
  click_button ('Send')
end                                                                           
                                                                                                                                                                                                                               
When(/^I enter something in the Organisation field$/) do                      
  fill_in('organisation', :with => 'sogeti')
end                                                                           