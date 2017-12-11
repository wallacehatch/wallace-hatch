import axios from 'axios';


export default function fetchInstagramPosts(success, fail) {
	axios({
	  method:'get',
	  url:'https://www.instagram.com/wallacehatch/?__a=1',
	})
	  .then(function(response) {
	  	 success && success(response)
	}).catch(function (err) {
		fail && fail(err);
  	});
}