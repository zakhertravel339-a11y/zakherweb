const MAP_EMBED =
  'https://maps.google.com/maps?width=600&height=400&hl=en&q=Zakher+Travel+Baku&z=15&ie=UTF8&iwloc=B&output=embed'

const WHATSAPP_FLOAT =
  'https://api.whatsapp.com/send?phone=+994502532200&text=Salam%21%20M%C3%B6vcud%20tur%20paketlar%20haqq%C4%B1nda%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m.'

const DEFAULT_CONFIG = {
  page_title: 'Contact Us',
  map_embed_url: MAP_EMBED,
  offices_section_label: 'Office',
  office_phone_section_label: 'Office Phone',
  mobile_section_label: 'Mobile',
  whatsapp_section_label: 'Whatsapp',
  email_section_label: 'Email',
  whatsapp_float_url: WHATSAPP_FLOAT,
  form_enabled: true,
  form_name_label: 'Your Name',
  form_phone_label: 'Your Phone',
  form_email_label: 'Your Email',
  form_subject_label: 'Subject',
  form_message_label: 'Message',
  form_submit_label: 'Send Message',
}

const OFFICES = [
  { id: 'office-1', sort_order: 0, title: 'Head Office', address: '73 Huseyn Javid Ave, 16 floor, Baku 1073' },
  { id: 'office-2', sort_order: 1, title: 'Dubai Office', address: 'SAIF Zone, Gate 3 building Q1-09. Office 103\\A, Sharjah' },
]

const PHONES = [
  { id: 'ph-1', sort_order: 0, phone_type: 'office_phone', display_text: '+994 12 310 09 32', href: 'tel:+994123100932' },
  { id: 'ph-2', sort_order: 1, phone_type: 'mobile', display_text: '+994 50 253 22 00', href: 'tel:+994502532200' },
  { id: 'ph-3', sort_order: 2, phone_type: 'mobile', display_text: '+994 50 253 22 09', href: 'tel:+994502532209' },
  { id: 'ph-4', sort_order: 3, phone_type: 'mobile', display_text: '+994 50 253 22 08', href: 'tel:+994502532208' },
  { id: 'ph-5', sort_order: 4, phone_type: 'whatsapp', display_text: '+994 50 253 22 00', href: 'https://wa.me/994502532200' },
]

const EMAILS = [
  { id: 'em-1', sort_order: 0, email: 'info@zakher.travel' },
]

export function getContactFallback() {
  return {
    config: { ...DEFAULT_CONFIG },
    offices: OFFICES,
    phones: PHONES,
    emails: EMAILS,
  }
}

export function mergeContact(apiData) {
  const fallback = getContactFallback()
  if (!apiData) return fallback
  return {
    config: { ...fallback.config, ...(apiData.config || {}) },
    offices: apiData.offices?.length ? apiData.offices : fallback.offices,
    phones: apiData.phones?.length ? apiData.phones : fallback.phones,
    emails: apiData.emails?.length ? apiData.emails : fallback.emails,
  }
}
