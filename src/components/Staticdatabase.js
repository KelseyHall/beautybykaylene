import React from 'react';

import { v4 as uuidv4 } from 'uuid';

//home page service blurb
import nails from '../images/nails.png';
import waxing from '../images/waxing.png';
import lashBrow from '../images/lash-brow.png';
import massages from '../images/massage.png';

//home page carousel
// import picture from '../images/square-img.jpg';
// import picture2 from '../images/vertical-img-2.jpg';
// import picture3 from '../images/horizonal-img-1.jpg';
// import picture4 from '../images/horizonal-img-2.jpg';
// import picture5 from '../images/vertical-img-1.jpg';

//services Nav
import nailIcon from '../images/nails.png';
import waxingIcon from '../images/waxing.png';
import lashBrowIcon from '../images/lash-brow.png';
import massageIcon from '../images/massage.png';

//servicesPagePlaceHolder
import placeholder from '../images/services-placeholder.jpg';

//services section photos
import massageService from '../images/massageblurbphoto.jpg';
import nailService from '../images/nailblurbphoto.jpg';
import lashbrowService from '../images/lashbrowblurbphoto.jpg';

//galleryPage
import galleryPicture1 from '../images/gallery/20211003_145523.jpg';
import galleryPicture2 from '../images/gallery/20211003_191507.jpg';
import galleryPicture3 from '../images/gallery/20211003_191547.jpg';
import galleryPicture4 from '../images/gallery/20211016_145438.jpg';
import galleryPicture5 from '../images/gallery/20211017_125401.jpg';
import galleryPicture6 from '../images/gallery/20211104_210319.jpg';
import galleryPicture7 from '../images/gallery/20211104_210337.jpg';
import galleryPicture8 from '../images/gallery/20211115_161519.jpg';
import galleryPicture9 from '../images/gallery/20211130_092216.jpg';
import galleryPicture10 from '../images/gallery/20211201_121704.jpg';
import galleryPicture11 from '../images/gallery/20211203_154033.jpg';
import galleryPicture12 from '../images/gallery/20211204_111132.jpg';

import placeholderPdf from '../pdfs/pdfplaceholder.pdf';

//Faq Nav Icons
import NailIcon from '../images/nails.png';
import WaxingIcon from '../images/waxing.png';
import LashBrowIcon from '../images/lash-brow.png';
import MassageIcon from '../images/massage.png';
import GeneralIcon from '../images/general.png';

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
  { key: uuidv4(), content: <img src={galleryPicture1} alt="1" /> },
  { key: uuidv4(), content: <img src={galleryPicture5} alt="2" /> },
  { key: uuidv4(), content: <img src={galleryPicture6} alt="3" /> },
  { key: uuidv4(), content: <img src={galleryPicture9} alt="4" /> },
  { key: uuidv4(), content: <img src={galleryPicture10} alt="5" /> },
];
//Services sorting Nav

export const servicesNav = [
  {
    id: 1,
    category: 'nails',
    img: nailIcon,
    altText: 'nails',
    title: 'nails',
  },
  {
    id: 2,
    category: 'lashes & brows',
    img: lashBrowIcon,
    altText: 'lashes and brows',
    title: 'lashes & brows',
  },
  {
    id: 3,
    category: 'waxing',
    img: waxingIcon,
    altText: 'waxing',
    title: 'waxing',
  },

  {
    id: 4,
    category: 'massage',
    img: massageIcon,
    altText: 'massage',
    title: 'massage',
  },
];

//Services content
export const ServicesDescriptions = [
  {
    id: uuidv4(),
    linkedinHandle: 'anchor-service1',
    service: 'nails',
    image: nailService,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus. Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        title: 'fingers',
        details: [
          {
            id: uuidv4(),
            serviceName: 'spa mani',
            price: 40,
            time: '1h 30min',
            description: `hand soak, nail shaping and cuticle work followed with cuticle oil, a moisturizing hand and arm massage finished off with a polish! Polish is optional.`,
          },
          {
            id: uuidv4(),
            serviceName: 'gel mani',
            price: 45,
            time: '1h 30min',
            description: `dry manicure including a nail trim and file, cuticle care, gel polish finished off with a relaxing hand and arm massage. `,
          },
          {
            id: uuidv4(),
            serviceName: 'sculpted mani',
            price: '55+',
            time: '2h',
            description: `dry manicure including nail prep with a hard gel overlay on your natural nails`,
          },
        ],
      },
      {
        title: 'toes',
        details: [
          {
            id: uuidv4(),
            serviceName: 'spa pedi',
            price: 40,
            time: '1h 30min',
            description: `Dead Sea Salts foot soak, nail trim and file, cuticle and callus care, cuticle oil, a relaxing foot and leg massage using a sweet almond oil & dead sea salt scrub, finished off with a pretty polish. Polish is optional. `,
          },
          {
            id: uuidv4(),
            serviceName: 'gel pedi',
            price: 50,
            time: '1h 30min',
            description: `Dead Sea Salts foot soak, nail trim & file, cuticle & callus work, gel polish, finished off with a relaxing foot & leg massage`,
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
        title: 'packages',

        details: [
          {
            id: uuidv4(),
            serviceName: 'gel mani & spa pedi',
            price: 85,
            time: '3h',
            description: `enjoy a relaxing (or much needed) gel mani & pedi in the comfort of your own home. Sit back and watch your favourite show, or listen to your favourite music if you'd like!`,
          },
          {
            id: uuidv4(),
            serviceName: 'gel mani & gel pedi',
            price: 95,
            time: '3h',
            description: `enjoy a relaxing (or much needed) gel mani & gel pedi in the comfort of your own home. Sit back and watch your favourite show, or listen to your favourite music if you'd like!`,
          },
        ],
      },

      {
        title: 'mini menu',

        details: [
          {
            id: uuidv4(),
            serviceName: 'mini mani',
            price: 15,
            time: '45min',
            description: `includes a mini soak, nail prep, cuticle oil and a mini hand massage. Finished off with a pretty polish. To get a longer lasting polish, choose to upgrade to gel! `,
          },

          {
            id: uuidv4(),
            serviceName: 'mini pedi',
            price: 20,
            time: '45min',
            description: `includes a mini foot soak, nail prep, foot scrub, cuticle oil and a mini foot massage, finished off with a pretty polish.`,
          },
          {
            id: uuidv4(),
            serviceName: 'upgrade to gel polish - add on',
            price: 5,
            time: '5min',
            description: `to get a longer lasting polish`,
          },
          {
            id: uuidv4(),
            serviceName: 'gel polish w/ accent nail - add on',
            price: 10,
            time: '20min',
            description:
              'price includes 1 accent nail on each hand, price increases if more is wanted.',
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
    image: lashbrowService,
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
            description: `Make those natural lashes pop! No need for mascara anymore!`,
          },
          {
            id: uuidv4(),
            serviceName: 'lash lift',
            price: 60,
            time: '1h',
            description:
              'Lift those lashes without the need of a curler! Lift lasts up to 9 weeks, giving you the most effortless and maintenence free look, everyday!',
          },
          {
            id: uuidv4(),
            serviceName: 'brow tint',
            price: 20,
            time: '30min',
            description: 'Stain your brows for a bolder, more defined look',
          },
          {
            id: uuidv4(),
            serviceName: 'brow lamination',
            price: 70,
            time: '1h',
            description: `Creates volume and shape with your natural brows.`,
          },
        ],
      },
      {
        title: 'packages',
        details: [
          {
            id: uuidv4(),
            serviceName: 'lash & brow tint',
            price: 40,
            time: '45min',
            description:
              'Make those natural lashes and brows pop! No need for mascara or brow pencils, anymore! reg $45',
          },
          {
            id: uuidv4(),
            serviceName: 'lash lift & tint',
            price: 75,
            time: '1h 15min',
            description:
              'A semi permanent curl and darker lashes will make your mornings a breeze! reg $85',
          },
          {
            id: uuidv4(),
            serviceName: 'brow lami & tint',
            price: 80,
            time: '1h',
            description:
              'Sculpt and stain your brows for a bolder, more defined look. reg $90',
          },
          {
            id: uuidv4(),
            serviceName: 'brow tint & wax',
            price: 30,
            time: '45min',
            description:
              'The perfect duo for natural brows, if you are just looking for a clean up and a pop! reg $36',
          },
          {
            id: uuidv4(),
            serviceName: 'brow lami, tint & wax',
            price: 90,
            time: '1h 45min',
            description:
              'Creates volume and shape with your natural brows. Up your game with a brow lamination to lock those brows into place! reg $106',
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
    blurb: (
      <p>
        Booking every 4-6 weeks is recommended to keep on top of the hair growth
        cycles and make it the most comfortable experience for you! Facial
        waxing can be repeated prior to 4 weeks pending personal hair growth.
        Soft or hard wax available.
        <p>
          waxing cycles :
          <ul style={{ display: 'flex', flexDirection: 'column' }}>
            <li>intimates 3-6 weeks</li>
            <li>face 2-3 weeks</li>
            <li>underarms 2 weeks</li>
            <li>body 3-4 weeks</li>
          </ul>
        </p>
      </p>
    ),

    serviceDetails: [
      {
        title: 'intimates',
        details: [
          {
            id: uuidv4(),
            serviceName: 'bikini',
            price: 30,
            time: '30min',
            description: `clean up the sides and a little off the top, if you'd like!`,
          },
          {
            id: uuidv4(),
            serviceName: 'full bikini',
            price: 40,
            time: '45min',
            description: `everything off the front, leave a strip or triangle if desired`,
          },
          {
            id: uuidv4(),
            serviceName: 'bumkini',
            price: 50,
            time: '1h',
            description: `a little more than the underwear line, all the way around to the cheeks!`,
          },
          {
            id: uuidv4(),
            serviceName: 'brazilian',
            price: 65,
            time: '1h 45min',
            description: `everything from front to back! Choose to leave some in the front, just let me know at our appointment!\n*If its been over 3 months since your last appointment`,
          },
          {
            id: uuidv4(),
            serviceName: 'upkeep brazilian',
            price: 55,
            time: '1h 30min',
            description:
              'to be booked only if you have seen me for a Brazilian within the last 2 months.',
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
            description: ``,
          },
          {
            id: uuidv4(),
            serviceName: 'upper lip',
            price: 10,
            time: '15min',
            description: ``,
          },
          {
            id: uuidv4(),
            serviceName: 'nose',
            price: 18,
            time: '20min',
            description: ``,
          },
          {
            id: uuidv4(),
            serviceName: 'chin',
            price: 10,
            time: '15min',
            description: ``,
          },
          {
            id: uuidv4(),
            serviceName: 'sideburns/cheeks',
            price: 14,
            time: '15min',
            description: ``,
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
            serviceName: 'half leg',
            price: 40,
            time: '45min',
            description: `choice of upper or lower leg`,
          },

          {
            id: uuidv4(),
            serviceName: 'full leg',
            price: 65,
            time: '1h',
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
            price: 35,
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
            price: 32,
            time: '45min',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'navel',
            price: 25,
            time: '30min',
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
            description: ``,
          },
          {
            id: uuidv4(),
            serviceName: 'half arm',
            price: 30,
            time: '30min',
            description: ``,
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
      {
        title: 'packages',
        details: [
          {
            id: uuidv4(),
            serviceName: 'brazilian & underarms',
            price: 80,
            time: '2h',
            description: `a deal on the two best (IMO) body waxing services you can get! reg $85`,
          },
          {
            id: uuidv4(),
            serviceName: 'full leg & bikini line',
            price: 85,
            time: '2h',
            description: 'reg $95',
          },
          {
            id: uuidv4(),
            serviceName: 'brow & lip wax',
            price: 25,
            time: '45min',
            description: 'waxing of the eyebrows and upper lip. reg $26',
          },
          {
            id: uuidv4(),
            serviceName: 'brow, lip & chin wax',
            price: 33,
            time: '1h',
            description: `waxing of the eyebrows, upper lip and chin. reg $36`,
          },
          {
            id: uuidv4(),
            serviceName: 'the works',
            price: 45,
            time: '1h 15min',
            description: `waxing of the eyebrows, upper lip, chin, and sideburns/cheeks. reg $50`,
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
    image: massageService,
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
    className: 'tall wide',
    img: galleryPicture1,
    title: ' ',
    caption: ' ',
    altText: '',
  },
  {
    id: uuidv4(),
    className: 'tall ',
    img: galleryPicture2,
    title: ' ',
    caption: ' ',
    altText: '',
  },
  {
    id: uuidv4(),
    className: 'tall',
    img: galleryPicture3,
    title: ' ',
    caption: ' ',
    altText: '',
  },
  {
    id: uuidv4(),
    className: '',
    img: galleryPicture4,
    title: ' ',
    caption: ' ',
    altText: '',
  },
  {
    id: uuidv4(),
    className: 'tall wide',
    img: galleryPicture5,
    title: ' ',
    caption: ' ',
    altText: '',
  },
  {
    id: uuidv4(),
    className: 'tall',
    img: galleryPicture6,
    title: ' ',
    caption: ' ',
    altText: '',
  },
  {
    id: uuidv4(),
    className: '',
    img: galleryPicture7,
    title: ' ',
    caption: ' ',
    altText: '',
  },
  {
    id: uuidv4(),
    className: 'wide',
    img: galleryPicture8,
    title: ' ',
    caption: ' ',
    altText: '',
  },
  {
    id: uuidv4(),
    className: 'tall',
    img: galleryPicture9,
    title: ' ',
    caption: ' ',
    altText: '',
  },
  {
    id: uuidv4(),
    className: '',
    img: galleryPicture10,
    title: ' ',
    caption: '',
    altText: '',
  },
  {
    id: uuidv4(),
    className: '',
    img: galleryPicture11,
    title: '',
    caption: '',
    altText: '',
  },
  {
    id: uuidv4(),
    className: '',
    img: galleryPicture12,
    title: '',
    caption: '',
    altText: '',
  },
];

//FAQ sort Nav
export const faqSortbyNav = [
  {
    id: 1,
    category: 'nails',
    img: NailIcon,
    altText: 'nails',
    title: 'nails',
  },
  {
    id: 2,
    category: 'waxing',
    img: WaxingIcon,
    altText: 'waxing',
    title: 'waxing',
  },
  {
    id: 3,
    category: 'lashes & brows',
    img: LashBrowIcon,
    altText: 'lashes-brows',
    title: 'lashes & brows',
  },
  {
    id: 4,
    category: 'massage',
    img: MassageIcon,
    altText: 'massage',
    title: 'massage',
  },
  {
    id: 5,
    category: 'general',
    img: GeneralIcon,
    altText: 'general',
    title: 'general',
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
