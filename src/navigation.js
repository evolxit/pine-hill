import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Rooms',
      links: [
        {
          text: 'Superior',
          href: getPermalink('/superior'),
        },
        {
          text: 'Deluxe',
          href: getPermalink('/deluxe'),
        },
        {
          text: 'Royal Suite',
          href: getPermalink('/royal-suite'),
        },
        {
          text: 'Royal Family',
          href: getPermalink('/royal-family'),
        },
      ],
    },
    {
      text: 'Facilities',
      href: getPermalink('/facilities'),
    },

    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Gallery',
          href: getPermalink('/gallery'),
        },
        {
          text: 'Reviews',
          href: getPermalink('/review'),
        },
        {
          text: 'Places',
          href: getPermalink('/places'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: '',
      links: [
        { text: 'Superior Room', href: getPermalink('/superior') },
        { text: 'Deluxe Room', href: getPermalink('/deluxe') },
        { text: 'Royal Suite', href: getPermalink('/royal-suite') },
        { text: 'Royal Family', href: getPermalink('/royal-family') },
      ],
    },
    // {
    //   title: '',
    //   links: [{ text: 'Facilities', href: getPermalink('/gallery') }],
    // },
    {
      title: '',
      links: [
        { text: 'Facilities', href: getPermalink('/facilities') },
        { text: 'Gallery', href: getPermalink('/gallery') },
        { text: 'Places', href: getPermalink('/places') },
        { text: 'Reviews', href: getPermalink('/review') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Gallery', href: getPermalink('/gallery') },
    { text: 'Reviews', href: getPermalink('/review') },
  ],
  socialLinks: [
    // {
    //   ariaLabel: 'Facebook',
    //   icon: 'tabler:brand-facebook',
    //   href: 'https://www.facebook.com/Pine-Hill-Resort-739814942807242',
    // },
  ],
  footNote:
    '<div class="flex md:-mt-20"><a href="https://www.tripadvisor.com/Hotel_Review-g1016308-d1600275-Reviews-Pine_Hill_Resort_Kalaw-Kalaw_Shan_State.html" target="_blank" class="inline-block mr-5"><img src="/icons/tripadvisor.jpg" class="w-12 h-auto rounded" /></a> <a href="https://www.agoda.com/pine-hill-resort/hotel/kalaw-mm.html" target="_blank"  class="inline-block mr-3 bg-white pt-5 px-3 rounded"><img src="/icons/agoda.png" class="w-12 h-auto rounded" /></a> <a href="http://www.booking.com/hotel/mm/pine-hill-resort.en-gb.html" target="_blank" class="inline-block mr-3 bg-white pt-5 px-3 rounded"><img src="/icons/booking.png" class="w-12 h-auto rounded" /></a> <a href="https://www.facebook.com/Pine-Hill-Resort-739814942807242" target="_blank"  class="inline-block mr-3 bg-white pt-5 px-3 rounded"><img src="/icons/facebook.png" class="w-12 h-auto rounded" /></a></div>',
};
