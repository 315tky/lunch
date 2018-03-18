class User < ApplicationRecord
  has_many :pins
  has_many :restaurants, through: :pins
end
