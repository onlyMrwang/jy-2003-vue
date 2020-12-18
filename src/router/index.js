import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import FilmRouter from "@/router/routers/Film"
import CenterRouter from "@/router/routers/Center"
import CinemaRouter from "@/router/routers/Cinema"


const routes = [
  FilmRouter,
  CenterRouter,
  CinemaRouter,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
