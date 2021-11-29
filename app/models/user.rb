class User < ApplicationRecord
    has_many :currencies
    has_secure_password
    
end
