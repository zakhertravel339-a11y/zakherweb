import {createWebHistory, createRouter} from 'vue-router'

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
        component: () => import('@/views/ToursListView.vue'),
    },
    {
        path: '/shahdag',
        name: 'Gusar + Shahdag',
        component: () => import('@/views/Shahdag.vue'),
    },
    {
        path: '/about-branch',
        name: 'About Branch',
        component: () => import('@/views/AboutBranchView.vue'),
    },
    {
        path: '/azerbaijan',
        name: 'Azerbaijan',
        component: () => import('@/views/AzerbaijanView.vue'),
    },
    {
        path: '/turkiye',
        name: 'Turkiye',
        component: () => import('@/views/TurkiyeView.vue'),
    },
    {
        path: '/kazakhstan',
        name: 'Kazakhstan',
        component: () => import('@/views/KazakhstanView.vue'),
    },
    {
        path: '/kyrgyzstan',
        name: 'Kyrgyzstan',
        component: () => import('@/views/KyrgyzstanView.vue'),
    },
    {
        path: '/uzbekistan',
        name: 'Uzbekistan',
        component: () => import('@/views/UzbekistanView.vue'),
    },
    {
        path: '/georgia',
        name: 'Georgia',
        component: () => import('@/views/GeorgiaView.vue'),
    },
    {
        path: '/czech-republic',
        name: 'CzechRepublic',
        component: () => import('@/views/CzechRepublicView.vue'),
    },
    {
        path: '/poland',
        name: 'Poland',
        component: () => import('@/views/PolandView.vue'),
    },
    {
        path: '/russia',
        name: 'Russia',
        component: () => import('@/views/RussiaView.vue'),
    },
    {
        path: '/united-arab-emirates',
        name: 'Unoted Arab Emirates',
        component: () => import('@/views/UnitedArabEmiratesView.vue'),
    },
    {
        path: '/ukraine',
        name: 'Ukraine',
        component: () => import('@/views/UkraineView.vue'),
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
        component: () => import('@/views/GolfView.vue'),

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
        component: () => import('@/views/PolandToursView.vue'),

    }
    ,
    {
        path: '/krakow-tour',
        name: 'Krakow Tour',
        component: () => import('@/views/KrakowTourView.vue'),

    }
    ,
    {
        path: '/ukraine-tours',
        name: 'Ukraine Tours',
        component: () => import('@/views/UkraineToursView.vue'),

    }
    ,
    {
        path: '/kyiv-tour',
        name: 'Kyiv Tour',
        component: () => import('@/views/KiyevTourView.vue'),

    },
    {
        path: '/kyrgyzstan-tours',
        name: 'Kyrgyzstan Tours',
        component: () => import('@/views/KyrgyzstanToursView.vue'),

    }
    ,
    {
        path: '/bishkek-tour',
        name: 'Bishkek Tour',
        component: () => import('@/views/BishkekTourView.vue'),

    },
    {
        path: '/kazakhstan-tours',
        name: 'Kazakhstan Tours',
        component: () => import('@/views/KazakhstanToursView.vue'),

    }
    ,

    {
        path: '/almaty-tour',
        name: 'Almaty Tour',
        component: () => import('@/views/AlmatyTourView.vue'),

    },
    {
        path: '/turkiye-tour',
        name: 'Turkiye Tour',
        component: () => import('@/views/TurkiyetourView.vue'),

    },
    {
        path: '/turkiye-tours',
        name: 'Turkiye Tours',
        component: () => import('@/views/TurkiyeToursView.vue'),

    },
    {
        path: '/uzbekistan-tour',
        name: 'Uzbekistan Tour',
        component: () => import('@/views/UzbekistantourView.vue'),

    },
    {
        path: '/uzbekistan-tours',
        name: 'Uzbekistan Tours',
        component: () => import('@/views/UzbekistanToursView.vue'),

    },
    {
        path: '/georgia-tour',
        name: 'Georgia Tour',
        component: () => import('@/views/GeorgiaTourView.vue'),

    },
    {
        path: '/georgia-tours',
        name: 'Georgia Tours',
        component: () => import('@/views/GeorgiaToursView.vue'),

    },
    {
        path: '/russia-tour',
        name: 'Russia Tour',
        component: () => import('@/views/RussiaTourView.vue'),

    },
    {
        path: '/russia-tours',
        name: 'Russia Tours',
        component: () => import('@/views/RussiaToursView.vue'),

    },
    {
        path: '/absheron-tour',
        name: 'Absheron Tour',
        component: () => import('@/views/AbsheronTourView.vue'),

    }
    ,
    {
        path: '/baku-night-tour',
        name: 'Baku Nigth Tour',
        component: () => import('@/views/BakuNightTourView.vue'),

    }
    ,
    {
        path: '/jeep-safari-tour-1',
        name: 'Extreme Jeep Safari 1 Tour',
        component: () => import('@/views/JeepSafariTourView.vue'),

    },
    {
        path: '/jeep-safari-tour-2',
        name: 'Extreme Jeep Safari 2 Tour',
        component: () => import('@/views/JeepSafariTour2View.vue'),

    }
    ,
    {
        path: '/jeep-safari-on-the-gobustan-reserve-extreme',
        name: 'Jeep Safari on the Gobustan Reserve + Extreme',
        component: () => import('@/views/GobustanTourView.vue'),

    } ,
    {
        path: '/jeep-safari-on-the-gobustan-reserve',
        name: 'Jeep Safari on the Gobustan Reserve',
        component: () => import('@/views/GobustanTour2View.vue'),

    },
    {
        path: '/museum-gobustan-mud-volcano',
        name: 'Museum Gobustan and Mud Volcanos tour',
        component: () => import('@/views/MudVolcanoTourView.vue'),

    },
    {
        path: '/old-city-excursion',
        name: 'Old City Excursion (Walking Tour)',
        component: () => import('@/views/OldCityTourView.vue'),

    },
    {
        path: '/azerbaijani-cuisine',
        name: 'Tastes and flavors of Azerbaijani cuisine',
        component: () => import('@/views/AzerbaijaniCuisineView.vue'),

    },
    {
        path: '/gabala-tour',
        name: 'Tour to Gabala – the capital of Caucasian Albania',
        component: () => import('@/views/GabalaTourView.vue'),

    },
    {
        path: '/khinalig-tour',
        name: 'Tour to Khinalig – 2200 meters above sea level',
        component: () => import('@/views/KhinaligTourView.vue'),

    },
    {
        path: '/sheki-tour',
        name: 'Tour to Sheki – Ancient Khanate',
        component: () => import('@/views/ShekiTourView.vue'),

    },
    {
        path: '/quba-tour',
        name: 'Tour to the North part of Azerbaijan Forests and Mountatin Quba',
        component: () => import('@/views/QubaTourView.vue'),

    }
    ,
    {
        path: '/lahic-tour',
        name: 'Tour to village of artisans – Lahij',
        component: () => import('@/views/LahicTourView.vue'),

    }



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
