require 'HTTParty'

module Api
    class Base
        def request(type, url, opts = {})
            HTTParty.send(type, url, opts)
        end
    end
end