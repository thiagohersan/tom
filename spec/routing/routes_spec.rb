require 'rails_helper'

RSpec.describe "routes for Users", :type => :routing do
    it "routes /users to create user" do
        assert_routing({ method: 'post', path: '/users' }, { controller: "users", action: "create" })
    end

    it "routes /users to update user" do
        assert_routing({ method: 'patch', path: '/users' }, { controller: "users", action: "update" })
    end

    it "routes /users/:id to update user" do
        assert_routing({ method: 'patch', path: '/users/2' }, { controller: "users", action: "update", id: "2" })
    end

    it "routes /users/:id/image to add user image" do
        assert_routing({ method: 'patch', path: '/users/2/image' }, { controller: "users", action: "add_image", id: "2" })
    end
end
