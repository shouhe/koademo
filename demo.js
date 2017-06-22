var mockServer = require('mockserver-client');
var MockServerClient = mockServer.mockServerClient; // MockServer client 
var proxyClient = mockServer.proxyClient; // proxy client 
client = MockServerClient.new('localhost', 3000)