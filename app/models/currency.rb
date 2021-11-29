class Currency < ApplicationRecord
    belongs_to :user


    def calculate_value(amount)
        current_price.to_f * amount.to_f
    end

    def current_price
        url = "https://api.coinbase.com/v2/prices/"
        request = HTTParty.get(url + self.currency_symbol + "-usd/buy")
        response = JSON.parse(request.body)["data"]["amount"]
    end
end
