FactoryGirl.define do
  factory :user do
    name "MyString"
    email "MyString"
    company "MyString"
    completed false
    industry nil
    role nil

    factory :anonymous_user do
      anonymous true
    end
  end
end
