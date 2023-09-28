import {createRouter, createWebHistory} from "vue-router";
import Preview from "../pages/Preview.vue";
import Form from "../pages/Form.vue";

const router =  createRouter({
	history: createWebHistory(),
	routes: [
		{path: "/", component: Form, name: "form"},
		{path: "/preview", component: Preview, name: "preview"},
	],

})

export default router;