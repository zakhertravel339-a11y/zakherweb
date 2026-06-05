const WHO_WE_ARE_TEASER_BODY = `Zakher Travel Group of Companies was established in 2016 and soon managed to makr an outstanding achievement in the travel industry. Over the years, we have welcomed thousands of visitors from the GCC region and beyond, crafting exceptional travel experiences across a diverse range of destinations — including Azerbaijan, Türkiye, Poland, Georgia, Kazakhstan, Kyrgyzstan, Uzbekistan, Russia, the Czech Republic, Ukraine, and the UAE.
Since our founding, we have expanded our presence by opening branches across several countries and building strong partnerships with more than 2,000 travel companies worldwide. Our team of over 50 experienced professionals specializes in designing tailor-made holidays and delivering high-quality travel services to meet the unique needs of every client.
As a fully licensed tour operator, we take pride in bringing international travelers to our handpicked destinations. We place particular emphasis on promoting Azerbaijan — the Pearl of the Caucasus — where ancient history meets vibrant modern life. From breathtaking natural landscapes and impressive architectural landmarks to a rich and diverse cultural heritage, Azerbaijan offers an unforgettable travel experience.
With four distinct seasons, each offering its own unique beauty and charm, our destinations can be enjoyed all year round. Travelers will always discover something new and inspiring, making the journey worth repeating.`

const emptyLocale = () => ({
  title: '',
  subtitle: '',
  body: '',
  body_2: '',
  body_3: '',
  exhibition_title: '',
  exhibition_body: '',
  quality_title: '',
  cta_label: '',
})

const emptyEventLocale = () => ({ title: '', description: '' })

export function getAboutFallback() {
  return {
    sections: {
      who_we_are_teaser: {
        section_key: 'who_we_are_teaser',
        image_url: 'https://www.zakher.travel/wp-content/uploads/2019/11/xabout-img.png',
        secondary_image_url: '',
        content: {
          title: 'Who We Are?',
          body: WHO_WE_ARE_TEASER_BODY,
          cta_label: 'Read More',
        },
      },
      who_we_are_page: {
        section_key: 'who_we_are_page',
        image_url: '',
        secondary_image_url: '',
        content: {
          subtitle: 'About Us',
          title: 'Who we are?',
          body: WHO_WE_ARE_TEASER_BODY,
          exhibition_title: 'Exhibition and representations',
          exhibition_body: '',
          quality_title: 'Quality Policy',
        },
      },
      charity: {
        section_key: 'charity',
        image_url: '',
        secondary_image_url: '',
        content: {
          title: 'Charity',
          body: 'We are a full service travel agency that provides customized excellence for the tourism needs of business and leisure clients.',
          body_2: 'Zakher Travel officially started its activity in 2016 and soon managed to make an outstanding achievement.',
          body_3: 'As a tour operator, we established our cooperation with more than 800 travel companies through official contracts.',
        },
      },
      events_teaser: {
        section_key: 'events_teaser',
        image_url: '',
        secondary_image_url: '',
        content: {
          title: 'Our Events',
          body: 'Zakher Travel represents our country at numerous large-scale international events.',
          cta_label: 'Read More',
        },
      },
    },
    events: {
      page_title: 'Our Events',
      events: [],
    },
  }
}

export function mergeAbout(apiData) {
  const fallback = getAboutFallback()
  if (!apiData?.sections) return fallback
  return {
    sections: { ...fallback.sections, ...apiData.sections },
    events: apiData.events || fallback.events,
  }
}

export { emptyLocale, emptyEventLocale }
