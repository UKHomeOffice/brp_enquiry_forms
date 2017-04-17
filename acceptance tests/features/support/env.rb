require 'rubygems'
require 'capybara'
require 'capybara/dsl'
require 'rspec'
require 'capybara/poltergeist'

require 'yaml'

Capybara.run_server = false
Capybara.default_driver = :poltergeist
Capybara.default_selector = :css

module Helpers
  def without_resynchronize
    page.driver.options[:resynchronize] = false
    yield
    page.driver.options[:resynchronize] = true
  end
end

World(Capybara::DSL, Helpers)

def config
  config_file = "#{File.dirname(__FILE__)}/config_test.yml"
  if  ENV['CONFIG_FILE']
    config_file = "#{File.dirname(__FILE__)}/" + ENV['CONFIG_FILE']
  end
  puts "config_file: " + config_file
  YAML.load_file(config_file)
end

def rest
  sleep config['sleep_time']
end

RSpec.configure do |config|
  config.run_all_when_everything_filtered = true
  config.filter_run :focus

  # Run specs in random order to surface order dependencies. If you find an
  # order dependency and want to debug it, you can fix the order by providing
  # the seed, which is printed after each run.
  #     --seed 1234
  config.order = 'random'
end