import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/MovieList'
import Movieshow from '@/components/movie/movieshow'
import MusicList from '@/components/music/MusicList'
import MusicShow from '@/components/music/Musicshow'
import ImageList from '@/components/image/imageList'
import BookList from '@/components/book/bookList'
import "@/assets/rem"
import "@/assets/common.css"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/movie/movielist'
    },
    {
      path: '/movie/movielist',
      component: MovieList
    },
    {
      path: '/book/booklist',
      component: BookList
    },
    {
      path: '/image/imagelist',
      component: ImageList
    },
    {
      path: '/music/musiclist',
      component: MusicList
    },
    {
      path: '/music/musicshow/:musicId',
      component: MusicShow
    },
    {
      path: '/movie/movieshow',
      component: Movieshow
    },
  ]
})
