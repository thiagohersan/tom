FactoryGirl.define do
  factory :occupation do
    sequence(:name) { |n| "Occupation#{n}" }
  end
end
