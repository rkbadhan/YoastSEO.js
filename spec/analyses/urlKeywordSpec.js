var urlKeyword = require("../../js/analyses/countKeywordInUrl.js");

describe("test to check url for keyword", function(){
	it("returns matches", function(){
		expect( urlKeyword( "url-with-keyword", "keyword" ) ).toBe(1);
		expect( urlKeyword( "url-with-key-word", "key word" ) ).toBe(1);
		expect( urlKeyword( "url-with-key-word", "keyword" ) ).toBe(0);
		expect( urlKeyword( "url-with-key-word", "këyword" ) ).toBe(0);
		expect( urlKeyword( "url-with-yoast-seo-3", "yoast seo 3" ) ).toBe(1);

		expect( urlKeyword( "yoasts-analyzer", "Yoast's analyzer" ) ).toBe( 1 );
	});
});
