
import authTemplate from "./auth.hbs";
import './auth.less';

const Auth = {
	render: () => {
		const context = {login: 'Авторизоваться', noAccount: 'Нет аккаунта?'};

		return authTemplate(context);
	//   return `
	// 	<section>
	// 	  <h1>Auth</h1>
	// 	  <p>Login</p>
	// 	</section>
	//   `;
	}
  } 

  export default Auth


// const login = () => {
//   const context = {};

//   return loginTemplate(context);
// };

// export default login;