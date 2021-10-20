class Currency < ApplicationRecord

    def current_price
        url = "https://api.coinbase.com/v2/prices/"
        request = HTTParty.get(url + self.currency_symbol + "-usd/sell")
        response = JSON.parse(request.body)["data"]["amount"]
        # [0]["amount"]
    end
end
