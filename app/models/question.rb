class Question < ApplicationRecord
  belongs_to :user
  has_many :options, dependent: :destroy
  accepts_nested_attributes_for :options
end
