import Login from './pages/login/Login'
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/profileEdit/EditProfile';
import ChangePassword from './pages/profile/profileEdit/ChangePassword';
import Chat from './pages/chat/Chat';
import Error404 from './pages/error404/Error404';
import Error500 from './pages/error500/Error500';



const routes = [
	{ path: '/', component: Login, },
	{ path: '/register', component: Register, },
	{ path: '/profile', component: Profile, },
	{ path: '/profile-edit', component: ProfileEdit, },
	{ path: '/profile-change-password', component: ChangePassword, },
	{ path: '/chat', component: Chat, },
	{ path: '/error404', component: Error404, },
	{ path: '/error500', component: Error500, },


  ];

// const routes = [
// 	{
// 	  path: '/',
// 	  data: Auth
// 	},
// 	{ 
// 	  path: '/auth',
// 	  data: `
// 		<h1>Welcome to About page.</h1>
// 		<p>The About page is the section of a website where people go to find out about the website they're on.</p>
// 	  `
// 	},
// 	{ 
// 	  path: '/contact',
// 	  data: `
// 		<h1>Welcome to Contact page.</h1>
// 		<p>A contact page is a common web page on a website for visitors to contact the organization or individual providing the website.</p>
// 	  `
// 	}, 
// 	{
// 	  path: '/account',
// 	  data: `
// 	  <h1>Welcome to Contact page.</h1>
// 	  <p>A contact page is a common web page on a website for visitors to contact the organization or individual providing the website.</p>
// 	`
// 	}
//   ];
  



const parseLocation = () => location.hash.slice(0).toLowerCase() || '/';
const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || Error404;

export const router = () => {
	// Find the component based on the current path
	let root = document.getElementById('root');
	const path = parseLocation();

	console.log(path)

	// If there's no matching route, get the "Error" component
	// const { component = Error404 } = findComponentByPath(path, routes);
	// // const component = routes.find(route => route.path == window.location.pathname);
	// // Render the component in the "app" placeholder
	// document.getElementById('root').innerHTML = component.render();


	let route = routes.find(route => route.path == window.location.pathname);
	// Render the component in the "app" placeholder
	console.log(route)
	if (route && route.path) {
		root.innerHTML = route.component.render();
	} else {
		root.innerHTML = Error404.render();
	}
	
  };

window.addEventListener('hashchange', router);
window.addEventListener('load', router);















































































//   const root = document.querySelector('#root');
  
//   const router = (event) => {
// 	event?.preventDefault();
// 	history.pushState({}, 'newUrl', event?.target.href);
// 	let route = routes.find(route => route.path == window.location.pathname); //ищем нужный path
// 	console.log(route)
// 	if (route && route.path) {
// 		root.innerHTML = route?.component.render();
// 	} else {
// 		root.innerHTML = `<h1>404</h1>`
// 	}


// 	// navColorLink();
//   }
  
//   /** Перемещение с помощью НАЗАД/ВПЕРЕД. */
//   window.addEventListener('popstate', () => {
// 	let component = routes.find(route => route.path == window.location.pathname);
// 	root.innerHTML = component.component;
//   })
  
//   /** Обновление страницы в соответствии с path. */
//   window.addEventListener('DOMContentLoaded', () => {
// 	let route = routes.find(route => route.path == window.location.pathname);
// 	if (route) root.innerHTML = route.component;
// 	// navColorLink();
//   })
  
// //   const links = document.querySelectorAll('nav ul li a');
  
// //   function navColorLink() {
// // 	links.forEach(link => {
// // 	  if(link.href === window.location.href) {
// // 		link.classList.add('active');
// // 	  } else {
// // 		link.classList.remove('active');
// // 	  }
// // 	})
// //   }

//   export default router