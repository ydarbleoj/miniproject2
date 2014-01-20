require 'sinatra'
require 'sinatra/reloader'
require 'typhoeus'
require 'json'

get '/' do 
  redirect "/movie"
end 

# INDEX ROUTE
get '/movie' do 
  erb:index 
end 

post '/result' do
        
 search_str = params[:movie]
  response = Typhoeus.get("www.omdbapi.com", :params => {:s => "#{search_str}"})
  search_str = response.body
  @parsed = JSON.parse(search_str)

         erb :results

end

get "/movie/:id" do 
  id = params[:id]
  response = Typhoeus.get("www.omdbapi.com", :params => {:i => id})
  @search_id = JSON.parse(response.body)

        erb :show
end






