import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cataloghi from '@/views/Cataloghi.vue'
import Contact from '@/views/Contact.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Abbigliamento da Lavoro a Pisa | GSM',
      metaTags: [
        {
          name: 'description',
          content: 'Scopri il nostro abbigliamento da lavoro di alta qualità a Pisa. Trova divise, uniformi e abbigliamento professionale per ogni settore.'
        },
        {
          name: 'keywords',
          content: 'abbigliamento da lavoro, Pisa, divise da lavoro, uniformi, abbigliamento professionale'
        }
      ]
    }
  },
  {
    path: '/chi-siamo',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: 'Chi Siamo | GSM Abbigliamento da Lavoro',
      metaTags: [
        {
          name: 'description',
          content: 'Scopri chi siamo e cosa ci rende leader nel settore dell\'abbigliamento da lavoro a Pisa.'
        },
        {
          name: 'keywords',
          content: 'chi siamo, abbigliamento da lavoro, Pisa, divise da lavoro, uniformi'
        }
      ]
    }
  },
  {
    path: '/cataloghi',
    name: 'catalogs',
    component: Cataloghi,
    meta: {
      title: 'Cataloghi di Abbigliamento da Lavoro | GSM',
      metaTags: [
        {
          name: 'description',
          content: 'Sfoglia i nostri cataloghi per trovare l\'abbigliamento da lavoro ideale per ogni settore professionale a Pisa.'
        },
        {
          name: 'keywords',
          content: 'cataloghi, abbigliamento da lavoro, Pisa, divise, uniformi'
        }
      ]
    }
  },
  {
    path: '/contatti',
    name: 'contact',
    component: Contact,
    meta: {
      title: 'Contattaci | GSM Abbigliamento da Lavoro',
      metaTags: [
        {
          name: 'description',
          content: 'Contattaci per maggiori informazioni sui nostri prodotti di abbigliamento da lavoro a Pisa.'
        },
        {
          name: 'keywords',
          content: 'contatti, abbigliamento da lavoro, Pisa, divise, uniformi'
        }
      ]
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: HomeView,
    meta: {
      title: 'Abbigliamento da Lavoro a Pisa | GSM Abbigliamento da Lavoro',
      metaTags: [
        {
          name: 'description',
          content: 'La pagina che stai cercando non esiste. Torna alla home per esplorare i nostri prodotti di abbigliamento da lavoro a Pisa.'
        },
        {
          name: 'keywords',
          content: 'errore, pagina non trovata, abbigliamento da lavoro, Pisa'
        }
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
