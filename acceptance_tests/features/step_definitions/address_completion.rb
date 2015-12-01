def complete_address_fields_with_prefix(field_prefix)
  fill_in("#{field_prefix}address-house-number", :with => '2')
  fill_in("#{field_prefix}address-street", :with => 'Marsham Street')
  fill_in("#{field_prefix}address-town", :with => 'Westminster')
  fill_in("#{field_prefix}address-postcode", :with => 'SW1P 4DF')
end

def complete_house_number_field_with_prefix(field_prefix)
  fill_in("#{field_prefix}address-house-number", :with => '2')
end

def complete_street_field_with_prefix(field_prefix)
  fill_in("#{field_prefix}address-street", :with => 'Marsham Street')
end

def complete_town_field_with_prefix(field_prefix)
  fill_in("#{field_prefix}address-town", :with => 'Westminster')
end

def complete_postcode_field_with_prefix(field_prefix)
  fill_in("#{field_prefix}address-postcode", :with => 'SW1P 4DF')
end


def complete_address_fields
  complete_address_fields_with_prefix ""
end

def complete_house_number_field
  complete_house_number_field_with_prefix ""
end

def complete_street_field
  complete_street_field_with_prefix ""
end

def complete_town_field
  complete_town_field_with_prefix ""
end

def complete_postcode_field
  complete_postcode_field_with_prefix ""
end
