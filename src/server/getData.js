import State from '../../config/state.js'
import Fetch from '../../config/fetch.js'

var cityGuess = () => Fetch('GET', State.baseUrl + '/v1/cities', {
	type: 'guess'
});

// async abc = () => {
// 	return await $.get(url);
// }
// async cba = () => {
// 	return "cba";
// }


// export default {
//  async getUserName () {
//   return await abc()
//  }
//  async getUserApe () {
//   return await abc()
//  }
// }

