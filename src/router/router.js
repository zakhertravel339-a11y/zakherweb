import {createWebHistory, createRouter} from 'vue-router'
const tourDetailRoute = {
    component: () => import('@/views/TourDetailView.vue'),
}

const packageListRoute = {
    component: () => import('@/views/PackageToursListView.vue'),
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/about-us',
        name: 'About us',
        component: () => import('@/views/AboutUsView.vue'),
    },
    {
        path: '/ourbranches',
        name: 'Our Branches',
        component: () => import('@/views/OurBranchesView.vue'),
    },
    {
        path: '/ourservices',
        name: 'Services',
        component: () => import('@/views/ServiceView.vue'),
    },
    {
        path: '/tour-packages',
        name: 'Tour Packages',
        component: () => import('@/views/TourPackagesView.vue'),
    },
    {
        path: '/contact-us',
        name: 'Contact Us',
        component: () => import('@/views/ContactUsView.vue'),
    },
    {
        path: '/about-events',
        name: 'About Events',
        component: () => import('@/views/AboutEventsView.vue'),
    },
    {
        path: '/social-media',
        name: 'Social Media',
        component: () => import('@/views/SocialMediaView.vue'),
    },
    {
        path: '/who-we-are',
        name: 'Who We are',
        component: () => import('@/views/WhoWeAreView.vue'),
    },
    {
        path: '/azerbaijan-tours',
        name: 'Azerbaijan Tours',
        ...packageListRoute,
    },
    {
        path: '/shahdag',
        name: 'Gusar + Shahdag',
        ...tourDetailRoute,
    },
    {
        path: '/about-branch',
        name: 'About Branch',
        component: () => import('@/views/AboutBranchView.vue'),
    },
    {
        path: '/reservation',
        name: 'Reservation',
        component: () => import('@/views/ReservationView.vue'),
    }
    ,
    {
        path: '/confirm',
        name: 'Confirm',
        component: () => import('@/views/ConfirmView.vue'),

    }
    ,
    {
        path: '/golf-azerbaijan',
        name: 'Golf',
        ...tourDetailRoute,
    }
    ,
    {
        path: '/special-golf-package-1',
        name: 'Special Golf',
        component: () => import('@/views/SpecialGolfView.vue'),

    }

    ,
    {
        path: '/special-golf-package-2',
        name: 'Special Golf',
        component: () => import('@/views/SpecialGolf_2View.vue'),

    }
    ,
    {
        path: '/poland-tours',
        name: 'Poland Tours',
        ...packageListRoute,

    }
    ,
    {
        path: '/krakow-tour',
        name: 'Krakow Tour',
        ...tourDetailRoute,

    }
    ,
    {
        path: '/ukraine-tours',
        name: 'Ukraine Tours',
        ...packageListRoute,

    }
    ,
    {
        path: '/kyiv-tour',
        name: 'Kyiv Tour',
        ...tourDetailRoute,

    },
    {
        path: '/kyrgyzstan-tours',
        name: 'Kyrgyzstan Tours',
        ...packageListRoute,

    }
    ,
    {
        path: '/bishkek-tour',
        name: 'Bishkek Tour',
        ...tourDetailRoute,

    },
    {
        path: '/kazakhstan-tours',
        name: 'Kazakhstan Tours',
        ...packageListRoute,

    }
    ,

    {
        path: '/almaty-tour',
        name: 'Almaty Tour',
        ...tourDetailRoute,

    },
    {
        path: '/turkiye-tour',
        name: 'Turkiye Tour',
        ...tourDetailRoute,

    },
    {
        path: '/turkiye-tours',
        name: 'Turkiye Tours',
        ...packageListRoute,

    },
    {
        path: '/uzbekistan-tour',
        name: 'Uzbekistan Tour',
        ...tourDetailRoute,

    },
    {
        path: '/uzbekistan-tours',
        name: 'Uzbekistan Tours',
        ...packageListRoute,

    },
    {
        path: '/georgia-tour',
        name: 'Georgia Tour',
        ...tourDetailRoute,

    },
    {
        path: '/georgia-tours',
        name: 'Georgia Tours',
        ...packageListRoute,

    },
    {
        path: '/russia-tour',
        name: 'Russia Tour',
        ...tourDetailRoute,

    },
    {
        path: '/russia-tours',
        name: 'Russia Tours',
        ...packageListRoute,

    },
    {
        path: '/absheron-tour',
        name: 'Absheron Tour',
        ...tourDetailRoute,

    }
    ,
    {
        path: '/baku-night-tour',
        name: 'Baku Nigth Tour',
        ...tourDetailRoute,

    }
    ,
    {
        path: '/jeep-safari-tour-1',
        name: 'Extreme Jeep Safari 1 Tour',
        ...tourDetailRoute,

    },
    {
        path: '/jeep-safari-tour-2',
        name: 'Extreme Jeep Safari 2 Tour',
        ...tourDetailRoute,

    }
    ,
    {
        path: '/jeep-safari-on-the-gobustan-reserve-extreme',
        name: 'Jeep Safari on the Gobustan Reserve + Extreme',
        ...tourDetailRoute,

    } ,
    {
        path: '/jeep-safari-on-the-gobustan-reserve',
        name: 'Jeep Safari on the Gobustan Reserve',
        ...tourDetailRoute,

    },
    {
        path: '/museum-gobustan-mud-volcano',
        name: 'Museum Gobustan and Mud Volcanos tour',
        ...tourDetailRoute,

    },
    {
        path: '/old-city-excursion',
        name: 'Old City Excursion (Walking Tour)',
        ...tourDetailRoute,

    },
    {
        path: '/azerbaijani-cuisine',
        name: 'Tastes and flavors of Azerbaijani cuisine',
        ...tourDetailRoute,
    },
    {
        path: '/gabala-tour',
        name: 'Tour to Gabala – the capital of Caucasian Albania',
        ...tourDetailRoute,

    },
    {
        path: '/khinalig-tour',
        name: 'Tour to Khinalig – 2200 meters above sea level',
        ...tourDetailRoute,

    },
    {
        path: '/sheki-tour',
        name: 'Tour to Sheki – Ancient Khanate',
        ...tourDetailRoute,

    },
    {
        path: '/quba-tour',
        name: 'Tour to the North part of Azerbaijan Forests and Mountatin Quba',
        ...tourDetailRoute,

    }
    ,
    {
        path: '/lahic-tour',
        name: 'Tour to village of artisans – Lahij',
        ...tourDetailRoute,

    },
    {
        path: '/:branchSlug',
        name: 'BranchDetail',
        component: () => import('@/views/BranchDetailView.vue'),
    },



]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router
