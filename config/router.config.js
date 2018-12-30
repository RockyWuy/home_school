export default [
	{
		path : '/user',
		//component : '../layouts/user/userLayout',
	},{
		path : '/',
		component : '../layouts/basic/index',
		routes : [
     		{
				path : '/home',
				component : '../pages/mainPage/index',
				routes : []
			}
		]
    },{
		path : '/404',
		component : '../layouts/statusPage/404',
	}
]
