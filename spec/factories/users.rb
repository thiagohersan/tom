FactoryGirl.define do
  factory :user do
    name "MyString"
    email "MyString"
    company "MyString"
    completed false
    industry nil
    occupation nil

    factory :anonymous_user do
      anonymous true
    end
  end
end
