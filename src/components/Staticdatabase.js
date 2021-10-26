import React from 'react';

import { v4 as uuidv4 } from 'uuid';

//home page service blurb
import nails from '../images/nails.png';
import waxing from '../images/waxing.png';
import lashBrow from '../images/lash-brow.png';
import massages from '../images/massage.png';

//home page carousel
import picture from '../images/square-img.jpg';
import picture2 from '../images/vertical-img-2.jpg';
import picture3 from '../images/horizonal-img-1.jpg';
import picture4 from '../images/horizonal-img-2.jpg';
import picture5 from '../images/vertical-img-1.jpg';

//servicesPagePlaceHolder
import placeholder from '../images/services-placeholder.jpg';

//galleryPage
import galleryPicture from '../images/horizonal-img-1.jpg';
import galleryPicture2 from '../images/horizonal-img-2.jpg';
import galleryPicture3 from '../images/vertical-img-1.jpg';
import galleryPicture4 from '../images/vertical-img-2.jpg';
import galleryPicture5 from '../images/square-img.jpg';

import placeholderPdf from '../pdfs/pdfplaceholder.pdf';
//HomePage services
export const serviceBlurb = [
  {
    index: uuidv4(),
    number: 1,
    service: 'service1',
    img: nails,
    title: 'nails',
    blurb: `It's more then just a polish - it's self-care!`,
  },
  {
    index: uuidv4(),
    number: 2,
    service: 'service2',
    img: lashBrow,
    title: 'lashes & brows',
    blurb: `Get ready for low-maintenance mornings.`,
  },
  {
    index: uuidv4(),
    number: 3,
    service: 'service3',
    img: waxing,
    title: 'waxing',
    blurb: `You want it waxed, I've got you covered.`,
  },

  {
    index: uuidv4(),
    number: 4,
    service: 'service4',
    img: massages,
    title: 'massages',
    blurb: `Trust me. You need me to knead you!`,
  },
];

//HomePage carousel
export const CarouselSlides = [
  { key: uuidv4(), content: <img src={picture} alt="1" /> },
  { key: uuidv4(), content: <img src={picture2} alt="2" /> },
  { key: uuidv4(), content: <img src={picture3} alt="3" /> },
  { key: uuidv4(), content: <img src={picture4} alt="4" /> },
  { key: uuidv4(), content: <img src={picture5} alt="5" /> },
];

//Services content
export const ServicesDescriptions = [
  {
    id: uuidv4(),
    linkedinHandle: 'anchor-service1',
    service: 'nails',
    image: placeholder,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus. Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        title: 'fingers',
        details: [
          {
            id: uuidv4(),
            serviceName: 'mini mani',
            price: 35,
            time: '1h',
            description: `hand soak, nail trim & file, cuticle care and finishing with a relaxing hand & arm massage`,
          },
          {
            id: uuidv4(),
            serviceName: 'standard mani',
            price: 45,
            time: '1h 30min',
            description: `nail trim & file, cuticle care, gel polish, finishing with a relaxing hand & arm massage`,
          },
          {
            id: uuidv4(),
            serviceName: 'spa mani',
            price: 60,
            time: '2h',
            description: `the standard care plus a paraffin treatment, finishing with a relaxing hand & arm massage`,
          },
          {
            id: uuidv4(),
            serviceName: 'sculpted mani',
            price: '50+',
            time: '2h',
            description: `the mini mani care plus a hard gel overlay on your natural nails`,
          },
        ],
      },
      {
        title: 'toes',
        details: [
          {
            id: uuidv4(),
            serviceName: 'standard pedi',
            price: 50,
            time: '1h 30min',
            description: `nail trim & file, cuticle & callus work, gel polish, finishing with a relaxing foot & leg massage`,
          },
          {
            id: uuidv4(),
            serviceName: 'spa pedi',
            price: 65,
            time: '2h',
            description: `the standard care, plus choice of paraffin treatment or sweet almond oil & dead sea salt scrub, finishing with a relaxing foot & leg massage`,
          },
          {
            id: uuidv4(),
            serviceName: 'deluxe pedi',
            price: 75,
            time: '2h 30min',
            description: `the standard care, a sweet almond oil & dead sea salt scrub & a relaxing paraffin treatment, finishing with a relaxing foot & leg massage`,
          },
        ],
      },
      {
        title: 'add ons',

        details: [
          {
            id: uuidv4(),
            serviceName: 'nail design',
            price: '5+',
            time: '15min+',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'extra callus care',
            price: 10,
            time: '15min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'paraffin treatment',
            price: 10,
            time: '25min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'gel removal',
            price: 20,
            time: '1h',
            description: `* already included in mani & pedi services for returning clients`,
          },
          {
            id: uuidv4(),
            serviceName: 'regular polish change',
            price: 30,
            time: '30min',
            description: `for clients who have had a mani or pedi within 2 weeks done by beauty by Kaylene. * excludes gel polish`,
          },
        ],
      },
      {
        title: 'for Guys',

        details: [
          {
            id: uuidv4(),
            serviceName: 'mani',
            price: '',
            time: '',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'pedi',
            price: '',
            time: '',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    linkedinHandle: 'anchor-service2',
    service: 'lashes & brows',
    image: placeholder,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        title: '',
        details: [
          {
            id: uuidv4(),
            serviceName: 'lash tint',
            price: 25,
            time: '30min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'lash lift',
            price: 60,
            time: '1h',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'brow tint',
            price: 20,
            time: '30min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'brow lamination',
            price: 70,
            time: '1h',
            description: '',
          },
        ],
      },
      {
        title: '',
        details: [
          {
            id: uuidv4(),
            serviceName: 'lash & brow tint',
            price: 40,
            time: '45min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'lash lift & tint',
            price: 75,
            time: '1h 15min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'brow lami & tint',
            price: 80,
            time: '1h',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'brow tint & wax',
            price: 30,
            time: '45min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'brow lami, tint & wax',
            price: 90,
            time: '1h 45min',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    linkedinHandle: 'anchor-service3',
    service: 'ladies waxing ',
    image: placeholder,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        title: 'kitty',
        details: [
          {
            id: uuidv4(),
            serviceName: 'bikini',
            price: 30,
            time: '30min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'full bikini',
            price: 40,
            time: '45min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'bumkini',
            price: 50,
            time: '1h',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'brazilian',
            price: 65,
            time: '1h 45min',
            description:
              'if its been over 3 months since your last appointment',
          },
          {
            id: uuidv4(),
            serviceName: 'upkeep brazilian',
            price: 55,
            time: '1h 30min',
            description: 'for my regular brazilian getters',
          },
        ],
      },
      {
        title: 'face',
        details: [
          {
            id: uuidv4(),
            serviceName: 'eyebrows',
            price: 16,
            time: '30min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'upper lip',
            price: 10,
            time: '15min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'nose',
            price: 18,
            time: '20mn',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'chin',
            price: 10,
            time: '15min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'cheeks',
            price: 14,
            time: '15min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'brow & lip',
            price: 22,
            time: '45min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'brow, lip & chin',
            price: 30,
            time: '1h',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'the works',
            price: 50,
            time: '1h 30min',
            description: '',
          },
        ],
      },

      {
        title: 'legs',
        details: [
          {
            id: uuidv4(),
            serviceName: 'feet & toes',
            price: 20,
            time: '15min',
            description: 'included free with leg wax or pedi when requested',
          },
          {
            id: uuidv4(),
            serviceName: 'lower leg',
            price: 35,
            time: '45min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'upper leg',
            price: 40,
            time: '45min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'full leg',
            price: 65,
            time: '1h',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'full leg & bikini line',
            price: 85,
            time: '2h',
            description: '',
          },
        ],
      },
      {
        title: 'body',
        details: [
          {
            id: uuidv4(),
            serviceName: 'lower back',
            price: 20,
            time: '45min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'full back',
            price: 55,
            time: '1h',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'glutes',
            price: 30,
            time: '45min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'stomach',
            price: 40,
            time: '1h',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'lower back & glutes',
            price: 40,
            time: '1h 30min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'full back & glutes',
            price: 75,
            time: '1h 45min',
            description: '',
          },
        ],
      },
      {
        title: 'arms',
        details: [
          {
            id: uuidv4(),
            serviceName: 'underarms',
            price: 20,
            time: '15min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'half arm',
            price: 30,
            time: '30min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'full arm',
            price: 50,
            time: '45min',
            description: '',
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    linkedinHandle: '',
    service: `men's waxing`,
    image: placeholder,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        title: 'body',
        details: [
          {
            id: uuidv4(),
            serviceName: 'shoulder',
            price: 25,
            time: '30min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'full back',
            price: 70,
            time: '1h 15min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'chest',
            price: 55,
            time: '1h',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'stomach',
            price: 50,
            time: '1h',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'glutes',
            price: 45,
            time: '1h',
            description: '',
          },
        ],
      },
      {
        title: 'arms & legs',
        details: [
          {
            id: uuidv4(),
            serviceName: 'half arm',
            price: 35,
            time: '30min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'full arm',
            price: 65,
            time: '1h',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'full leg',
            price: 85,
            time: '1h 30min',
            description: '',
          },
        ],
      },
    ],
  },

  {
    id: uuidv4(),
    linkedinHandle: 'anchor-service4',
    service: 'massage',
    image: placeholder,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        title: 'relaxation',
        details: [
          {
            id: uuidv4(),
            serviceName: 'neck & shoulder',
            price: 30,
            time: '20min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'neck, shoulder & back',
            price: 40,
            time: '30min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'neck, shoulder & back',
            price: 55,
            time: '45min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'full body',
            price: 70,
            time: '60min',
            description: '',
          },
        ],
      },
      {
        title: 'add ons',
        details: [
          {
            id: uuidv4(),
            serviceName: 'hot stones',
            price: 15,
            time: '15min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'dry brush',
            price: 20,
            time: '20min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'aromatherapy',
            price: 10,
            time: '',
            description: '',
          },
        ],
      },
    ],
  },
];
//Gallery page
export const GalleryDatabase = [
  {
    id: uuidv4(),
    className: 'wide',
    img: galleryPicture,
    title: 'Picture Title',
    caption: 'Description placeholder',
    altText: 'picture1',
  },
  {
    id: uuidv4(),
    className: 'tall wide',
    img: galleryPicture2,
    title: 'Picture Title',
    caption: 'Description placeholder',
    altText: 'picture2',
  },
  {
    id: uuidv4(),
    className: 'tall wide',
    img: galleryPicture4,
    title: 'Picture Title',
    caption: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: uuidv4(),
    className: '',
    img: galleryPicture3,
    title: 'Picture Title',
    caption: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: uuidv4(),
    className: 'tall wide',
    img: galleryPicture5,
    title: 'Picture Title',
    caption: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: uuidv4(),
    className: 'tall',
    img: galleryPicture4,
    title: 'Picture Title',
    caption: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: uuidv4(),
    className: '',
    img: galleryPicture5,
    title: 'Picture Title',
    caption: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: uuidv4(),
    className: 'wide',
    img: galleryPicture,
    title: 'Picture Title',
    caption: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: uuidv4(),
    className: 'tall',
    img: galleryPicture5,
    title: 'Picture Title',
    caption: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: uuidv4(),
    className: '',
    img: galleryPicture5,
    title: 'Picture Title',
    caption: 'Description placeholder',
    altText: 'picture',
  },
];

//FAQ Page
export const faqQuestions = [
  {
    id: uuidv4(),
    category: 'nails',
    question:
      'nails Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing eli?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsanfeugiat integer risus libero pulvinar tellus senectus sapien. Ultrices tellus odio nisl non nibh lacinia. Consectetur metus odio magna volutpatin. Rutrum adipiscing convallis facilisis vestibulum eleifend inullamcorper laoreet enim. Placerat quis donec dolor et at mattis atfeugiat nibh. Sit nibh faucibus at vitae quis eros, molestie luctus.Viverra mauris pulvinar sed volutpat. In viverra arcu purus sed purusvel amet vel.',
  },
  {
    id: uuidv4(),
    category: 'waxing',
    question: 'waxing Lorem ipsum dolor sit amet, consectetur adipiscing eli?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt inneque, sed quis arcu turpis gravida aliquam dignissim. Bibendum netussed amet id eleifend bibendum convallis. Dui odio purus, laoreet felismorbi nisi, tellus vitae. Ultricies urna porta est in tellus consecteturfaucibus convallis dictum. Risus hendrerit maecenas nec non cras egetelementum. Tellus phasellus nulla urna morbi. In tincidunt elit nullamaecenas. Neque, aliquam id aenean risus eget metus lectus felis in. Eudictum eu, ac quis sit non. Cursus sagittis et ullamcorper non pharetra,fringilla mauris. Ut et enim proin lectus purus. Cursus vulputate atfaucibus varius purus vitae fermentum. Lorem ullamcorper vitae volutpatsit consectetur faucibus suspendisse tortor integer. Rutrum venenatisquam leo in at vitae turpis pretium vitae. Pellentesque feugiat arcucras at. Nibh non pharetra donec egestas euismod purus vestibulum. Namfringilla dui varius nec ac morbi sollicitudin sit fermentum. Et congue',
  },
  {
    id: uuidv4(),
    category: 'lashes & brows',
    question:
      'lashbrow Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing eli?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsanfeugiat integer risus libero pulvinar tellus senectus sapien. Ultrices tellus odio nisl non nibh lacinia. Consectetur metus odio magna volutpatin. Rutrum adipiscing convallis facilisis vestibulum eleifend inullamcorper laoreet enim. Placerat quis donec dolor et at mattis atfeugiat nibh. Sit nibh faucibus at vitae quis eros, molestie luctus.Viverra mauris pulvinar sed volutpat. In viverra arcu purus sed purusvel amet vel.',
  },
  {
    id: uuidv4(),
    category: 'massage',
    question:
      'massage Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing eli?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsanfeugiat integer risus libero pulvinar tellus senectus sapien. Ultrices tellus odio nisl non nibh lacinia. Consectetur metus odio magna volutpatin. Rutrum adipiscing convallis facilisis vestibulum eleifend inullamcorper laoreet enim. Placerat quis donec dolor et at mattis atfeugiat nibh. Sit nibh faucibus at vitae quis eros, molestie luctus.Viverra mauris pulvinar sed volutpat. In viverra arcu purus sed purusvel amet vel.',
  },
  {
    id: uuidv4(),
    category: 'general',
    question:
      'general Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing eli?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsanfeugiat integer risus libero pulvinar tellus senectus sapien. Ultrices tellus odio nisl non nibh lacinia. Consectetur metus odio magna volutpatin. Rutrum adipiscing convallis facilisis vestibulum eleifend inullamcorper laoreet enim. Placerat quis donec dolor et at mattis atfeugiat nibh. Sit nibh faucibus at vitae quis eros, molestie luctus.Viverra mauris pulvinar sed volutpat. In viverra arcu purus sed purusvel amet vel.',
  },
  {
    id: uuidv4(),
    category: 'general',
    question:
      'general Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing eli?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsanfeugiat integer risus libero pulvinar tellus senectus sapien. Ultrices tellus odio nisl non nibh lacinia. Consectetur metus odio magna volutpatin. Rutrum adipiscing convallis facilisis vestibulum eleifend inullamcorper laoreet enim. Placerat quis donec dolor et at mattis atfeugiat nibh. Sit nibh faucibus at vitae quis eros, molestie luctus.Viverra mauris pulvinar sed volutpat. In viverra arcu purus sed purusvel amet vel.',
  },
];

//Downloadable PDFS Page
export const downloadablePdf = [
  {
    id: uuidv4(),
    label: 'this form name is',
    src: placeholderPdf,
  },
  { id: uuidv4(), label: 'this form name is 2', src: placeholderPdf },
  { id: uuidv4(), label: 'this form name is 3', src: placeholderPdf },
  { id: uuidv4(), label: 'this form name is 4', src: placeholderPdf },
];
