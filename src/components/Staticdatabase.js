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
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Elementum elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate vulputate nunc, tempus.',
  },
  {
    index: uuidv4(),
    number: 2,
    service: 'service2',
    img: waxing,
    title: 'waxing',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Elementum elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate vulputate nunc, tempus.',
  },
  {
    index: uuidv4(),
    number: 3,
    service: 'service3',
    img: lashBrow,
    title: 'lashes and brows',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Elementum elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate vulputate nunc, tempus.',
  },
  {
    index: uuidv4(),
    number: 4,
    service: 'service4',
    img: massages,
    title: 'massages',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Elementum elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate vulputate nunc, tempus.',
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
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
        ],
      },
      {
        title: 'toes',
        details: [
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
        ],
      },
      {
        title: 'extras',
        details: [
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    linkedinHandle: 'anchor-service2',
    service: 'waxing',
    image: placeholder,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        title: 'body',
        details: [
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
        ],
      },
      {
        title: 'arms',
        details: [
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
        ],
      },
      {
        title: 'facial',
        details: [
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
        ],
      },
      {
        title: 'men-body',
        details: [
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
        ],
      },
      {
        title: 'men-arms & legs',
        details: [
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    linkedinHandle: 'anchor-service3',
    service: 'lash & brow',
    image: placeholder,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        title: 'tinting',
        details: [
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
        ],
      },
      {
        title: 'lift',
        details: [
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
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
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
          { id: uuidv4(), serviceName: 'item name', price: 99.99 },
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
    className: 'wide',
    img: galleryPicture2,
    title: 'Picture Title',
    caption: 'Description placeholder',
    altText: 'picture2',
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
    className: 'tall',
    img: galleryPicture3,
    title: 'Picture Title',
    caption: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: uuidv4(),
    className: 'square',
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
    className: 'square',
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
    className: 'square',
    img: galleryPicture5,
    title: 'Picture Title',
    caption: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: uuidv4(),
    className: 'square',
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
    category: 'lash & brow',
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
