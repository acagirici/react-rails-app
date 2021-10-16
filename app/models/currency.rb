class Currency < ApplicationRecord
    def current_price
        url = "https://api.coinbase.com/v2/prices/#{:symbol}-usd/sell"
        request = HTTParty.get(url)
        response = JSON.parse(request.body)
    end
end
