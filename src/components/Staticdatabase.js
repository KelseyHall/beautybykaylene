import React from 'react';
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

//home page service blurb
// import nails from '../images/nails.png';
// import waxing from '../images/waxing.png';
// import lashBrow from '../images/lash-brow.png';
// import massages from '../images/massage.png';

//home page carousel
// import picture from '../images/square-img.jpg';
// import picture2 from '../images/vertical-img-2.jpg';
// import picture3 from '../images/horizonal-img-1.jpg';
// import picture4 from '../images/horizonal-img-2.jpg';
// import picture5 from '../images/vertical-img-1.jpg';

//services Nav
// import nailIcon from '../images/nails.png';
// import waxingIcon from '../images/waxing.png';
// import lashBrowIcon from '../images/lash-brow.png';
// import massageIcon from '../images/massage.png';

//servicesPageplaceholder
// import placeholder from '../images/services-placeholder.jpg';

//services section photos
import massageServiceImg from '../images/services-massage-blurb.jpg';
// import massageService from '../images/massageblurbphoto.jpg';
import waxWomenService from '../images/waxing-service-blurb.jpg';
import waxMenService from '../images/mens-wax-blurb.jpg';
import nailService from '../images/nailblurbphoto.jpg';
import lashbrowService from '../images/lashbrowblurbphoto.jpg';
// import lashbrowService from '../images/lashes-service-img.jpeg';

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
// import NailIcon from '../images/nails.png';
// import WaxingIcon from '../images/waxing.png';
// import LashBrowIcon from '../images/lash-brow.png';
// import MassageIcon from '../images/massage.png';
// import GeneralIcon from '../images/general.png';

//HomePage services
export const serviceBlurb = [
  {
    index: uuidv4(),
    number: 1,
    service: 'service1',
    // img: nails,
    title: 'nails',
    blurb: `It's more then just a polish - it's self-care!`,
  },
  {
    index: uuidv4(),
    number: 2,
    service: 'service2',
    // img: lashBrow,
    title: 'lashes & brows',
    blurb: `Get ready for low-maintenance mornings.`,
  },
  {
    index: uuidv4(),
    number: 3,
    service: 'service3',
    // img: waxing,
    title: 'waxing',
    blurb: `You want it waxed, I've got you covered.`,
  },

  {
    index: uuidv4(),
    number: 4,
    service: 'service4',
    // img: massages,
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
    // img: nailIcon,
    altText: 'nails',
    title: 'nails',
  },
  {
    id: 2,
    category: 'lashes & brows',
    // img: lashBrowIcon,
    altText: 'lashes and brows',
    title: 'lashes & brows',
  },
  {
    id: 3,
    category: 'waxing',
    // img: waxingIcon,
    altText: 'waxing',
    title: 'waxing',
  },

  {
    id: 4,
    category: 'massage',
    // img: massageIcon,
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
    blurb: (
      <span>
        Get your attitude back with a fresh polish! Enjoy a relaxing (or much
        needed) manicure or pedicure in the comfort of your own home. Sit back
        and watch your favorite show, listen to some music, or dive into that
        book you’ve been meaning to finish up!
        <br />
        <br />
        Manicures include a hand soak, nail shaping and cuticle work, followed
        with cuticle oil, a moisturizing hand and arm massage, finished off with
        a polish.
        <br />
        <br />
        Pedicures include a foot soak with Dead Sea Salts, a nail trim and file,
        cuticle and callus care, cuticle oil, an exfoliating foot and leg
        massage using a sweet almond oil & dead sea salt scrub, finished off
        with a polish.
        <br />
        <br />
        Polish is optional. Please select Gel Manicure/Pedicure or French
        Manicure/Pedicure if you wish for gel polish and/or French Tips. The Gel
        Manicure is a dry manicure. The Gel Pedicure includes a massage with
        lotion after polishing, in lieu of the salt scrub.
        <br />
        <br />
        *If you currently have on gel polish, please book the “gel polish
        removal” add-on along with your appointment. Additional fees may apply.
        <br />
        <br />
        Please visit our {<Link to="/faq">{`FAQ’s`}</Link>}
      </span>
    ),
    serviceDetails: [
      {
        title: 'fingers',
        details: [
          {
            id: uuidv4(),
            serviceName: 'spa manicure',
            price: 40,
            time: '1h 30min',
            description: `Hand soak, nail shaping and cuticle work followed with cuticle oil, a moisturizing hand and arm massage finished off with a polish! Polish is optional.`,
          },
          {
            id: uuidv4(),
            serviceName: 'gel manicure',
            price: 45,
            time: '1h 30min',
            description: `Dry manicure including a nail trim and file, cuticle care, gel polish finished off with a relaxing hand and arm massage. `,
          },
          {
            id: uuidv4(),
            serviceName: 'sculpted manicure',
            price: '55+',
            time: '2h',
            description: `Dry manicure including nail prep with a hard gel overlay on your natural nails`,
          },
          {
            id: uuidv4(),
            serviceName: 'french manicure',
            price: '55',
            time: '2h',
            description: ``,
          },
        ],
      },
      {
        title: 'toes',
        details: [
          {
            id: uuidv4(),
            serviceName: 'salt glow pedicure',
            price: 40,
            time: '1h 30min',
            description: `Dead Sea Salts foot soak, nail trim and file, cuticle and callus care, cuticle oil, a relaxing foot and leg massage using a sweet almond oil & dead sea salt scrub, finished off with a pretty polish. Polish is optional. `,
          },
          {
            id: uuidv4(),
            serviceName: 'gel pedicure',
            price: 50,
            time: '1h 30min',
            description: `Dead Sea Salts foot soak, nail trim & file, cuticle & callus work, gel polish, finished off with a relaxing foot & leg massage`,
          },
          {
            id: uuidv4(),
            serviceName: 'french pedicure',
            price: 60,
            time: '1h 30min',
            description: ``,
          },
        ],
      },

      {
        title: 'add ons',

        details: [
          {
            id: uuidv4(),
            serviceName: 'nail art',
            price: '5+',
            time: '15min+',
            description: 'Can only be added onto gel polish manicure/pedicure',
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
            description:
              'Envelop your skin in a delicious peach oil paraffin wrap that will leave your skin feeling silky smooth! ',
          },
          {
            id: uuidv4(),
            serviceName: 'gel polish removal',
            price: 20,
            time: '30min',
            description: `* Gel polish removal is FREE if I have applied your current gel polish for you and you are booking another manicure/pedicure experience.`,
          },
          {
            id: uuidv4(),
            serviceName: 'sculpting gel removal',
            price: 25,
            time: '1h',
            description: `* I will not fill another artist's work. Please book a full removal along with your sculpted manicure if it is your first time seeing me and you have another product on your nails.`,
          },

          {
            id: uuidv4(),
            serviceName: 'regular polish change',
            price: 30,
            time: '30min',
            description: `For clients who have had a manicure or pedicure within 2 weeks done by beauty by Kaylene. * excludes gel polish`,
          },
        ],
      },
      {
        title: 'packages',

        details: [
          {
            id: uuidv4(),
            serviceName: 'french manicure & french pedicure',
            price: 60,
            time: '3h',
            description: ``,
          },
          {
            id: uuidv4(),
            serviceName: 'salt glow pedicure',
            price: 85,
            time: '3h',
            description: `Enjoy a relaxing (or much needed) gel manicure & pedicure in the comfort of your own home. Sit back and watch your favourite show, or listen to your favourite music if you'd like!`,
          },
          {
            id: uuidv4(),
            serviceName: 'gel manicure & gel pedicure',
            price: 95,
            time: '3h',
            description: `Enjoy a relaxing (or much needed) gel manicure & gel pedicure in the comfort of your own home. Sit back and watch your favourite show, or listen to your favourite music if you'd like!`,
          },
        ],
      },

      {
        title: 'mini menu',

        details: [
          {
            id: uuidv4(),
            serviceName: 'mini manicure',
            price: 15,
            time: '45min',
            description: `Includes a mini soak, nail prep, cuticle oil and a mini hand massage. Finished off with a pretty polish. To get a longer lasting polish, choose to upgrade to gel! `,
          },

          {
            id: uuidv4(),
            serviceName: 'mini pedicure',
            price: 20,
            time: '45min',
            description: `Includes a mini foot soak, nail prep, foot scrub, cuticle oil and a mini foot massage, finished off with a pretty polish.`,
          },
          {
            id: uuidv4(),
            serviceName: 'upgrade to gel polish - add on',
            price: 5,
            time: '5min',
            description: `To get a longer lasting polish`,
          },
          {
            id: uuidv4(),
            serviceName: 'gel polish w/ accent nail - add on',
            price: 10,
            time: '20min',
            description:
              'Price includes 1 accent nail on each hand, price increases if more is wanted.',
          },
        ],
      },
      {
        title: 'for Guys',

        details: [
          {
            id: uuidv4(),
            serviceName: 'manicure',
            price: '',
            time: '',
            description: '',
          },
          {
            id: uuidv4(),
            serviceName: 'pedicure',
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
    blurb: (
      <span>
        Wake up ready to take on the day! Your mornings are about to be a
        breeze.
        <br /> <br />
        Lift those lashes with a semi-permanent curl that lasts up to 9 weeks,
        and add a tint to make them pop, giving you the most effortless and
        maintenance free look, everyday!
        <br /> <br />
        Have unruly brows that wont stay in place, or want them to be fuller
        looking? <br />
        Then a brow lamination might be just what you need. With a consultation
        we will discuss the end goal and what is needed to achieve the brows of
        your dreams. <br /> <br /> Please visit our{' '}
        {<Link to="/faq">{`FAQ’s`}</Link>}
      </span>
    ),
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
    image: waxWomenService,
    blurb: (
      <span>
        Get your skin feeling fresh and smooth, for longer with waxing!
        <br />
        It’s time to put the razor down and treat your skin right.
        <br />
        <br />
        Both hard and soft wax are used, if you have a preference please contact
        us before booking.
        <br />
        <br />
        Please visit our {<Link to="/faq">{`FAQ’s`}</Link>}
        <br />
        <br />
        Booking every 4-6 weeks is recommended to keep on top of the hair growth
        cycles and make it the most comfortable experience for you! Facial
        waxing can be repeated prior to 4 weeks pending personal hair growth.
        Soft or hard wax available.
        <span className="ul">
          waxing cycles :<br />
          <span className="li">intimates 3-6 weeks</span>
          <span className="li">face 2-3 weeks</span>
          <span className="li">underarms 2 weeks</span>
          <span className="li">body 3-4 weeks</span>
        </span>
      </span>
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
            description: `Clean up the sides and a little off the top, if you'd like!`,
          },
          {
            id: uuidv4(),
            serviceName: 'full bikini',
            price: 40,
            time: '45min',
            description: `Everything off the front, leave a strip or triangle if desired`,
          },
          {
            id: uuidv4(),
            serviceName: 'bumkini',
            price: 50,
            time: '1h',
            description: `A little more than the bikini line, all the way around to the cheeks!`,
          },
          {
            id: uuidv4(),
            serviceName: 'brazilian',
            price: 65,
            time: '1h 45min',
            description: `Everything from front to back! Choose to leave some in the front, just let me know at our appointment!\n*If its been over 3 months since your last appointment`,
          },
          {
            id: uuidv4(),
            serviceName: 'upkeep brazilian',
            price: 55,
            time: '1h 30min',
            description:
              'To be booked only if you have seen me for a Brazilian within the last 2 months.',
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
          {
            id: uuidv4(),
            serviceName: 'full face',
            price: 50,
            time: '1h',
            description: ``,
          },
        ],
        disclaimer: '* Add On Services Only',
      },

      {
        title: 'legs',
        details: [
          {
            id: uuidv4(),
            serviceName: 'feet & toes',
            price: 20,
            time: '15min',
            description:
              'Included free with leg wax or pedicure when requested',
          },
          {
            id: uuidv4(),
            serviceName: 'half leg',
            price: 40,
            time: '45min',
            description: `Choice of upper or lower leg`,
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
            description: `A deal on the two best (IMO) body waxing services you can get! reg $85`,
          },
          {
            id: uuidv4(),
            serviceName: 'full leg & bikini line',
            price: 85,
            time: '2h',
            description: 'Reg $95',
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    linkedinHandle: '',
    service: `men's waxing`,
    image: waxMenService,
    blurb: (
      <span>
        Get your skin feeling fresh and smooth, for longer with waxing!
        <br />
        It’s time to put the razor down and treat your skin right.
        <br />
        <br />
        Both hard and soft wax are used, if you have a preference please contact
        us before booking.
        <br />
        <br />
        Please visit our {<Link to="/faq">{`FAQ’s`}</Link>}
        <br />
        <br />
        Booking every 4-6 weeks is recommended to keep on top of the hair growth
        cycles and make it the most comfortable experience for you! Facial
        waxing can be repeated prior to 4 weeks pending personal hair growth.
        Soft or hard wax available.
        <span className="ul">
          waxing cycles :<br />
          <span className="li">intimates 3-6 weeks</span>
          <span className="li">face 2-3 weeks</span>
          <span className="li">underarms 2 weeks</span>
          <span className="li">body 3-4 weeks</span>
        </span>
      </span>
    ),
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
    image: massageServiceImg,
    blurb: (
      <span>
        A soothing warm oil massage to bring peace and mindfulness to your day.
        <br />
        <br />
        Aromatherapy available to add at time of booking.
        <br />
        <br />
        Option of one add-on to elevate your massage: <br />
        Soothing Hot Stones or Exfoliating Dry Brush (you get to take it home!)
        <br />
        <br />
        *Relaxation massages are performed by a skilled Esthetician, therefore
        do not qualify for insurance reimbursement.
        <br />
        <br /> Please visit our {<Link to="/faq">{`FAQ’s`}</Link>}
      </span>
    ),
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
            price: 30,
            time: '20min',
            description: 'Clients get to keep brush',
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
    // img: NailIcon,
    altText: 'nails',
    title: 'nails',
  },
  {
    id: 2,
    category: 'waxing',
    // img: WaxingIcon,
    altText: 'waxing',
    title: 'waxing',
  },
  {
    id: 3,
    category: 'lashes & brows',
    // img: LashBrowIcon,
    altText: 'lashes-brows',
    title: 'lashes & brows',
  },
  {
    id: 4,
    category: 'massage',
    // img: MassageIcon,
    altText: 'massage',
    title: 'massage',
  },
  {
    id: 5,
    category: 'general',
    // img: GeneralIcon,
    altText: 'general',
    title: 'general',
  },
];

//FAQ Page
export const faqQuestions = [
  //nails
  {
    id: uuidv4(),
    category: 'nails',
    question: `How long does gel polish last?`,
    answer: (
      <span>
        Gel is expected to last for up to 2 weeks on fingers and can last from
        2-4 weeks on toes, with chip free wear!
        <br />
        I've had clients that can get up to 4 weeks on their fingers, it just
        depends on lifestyle and how good you can follow the aftercare! I also
        do my best and take my time to ensure that I do a proper prep of the
        nail plate, ensuring the strongest bond possible.
      </span>
    ),
  },
  {
    id: uuidv4(),
    category: 'nails',
    question: `How often should I have a Structured Manicure?`,
    answer: `This one varies from person to person, but for someone trying to grow their nails out to a desired length, a hard gel overlay fill should be done every 2-3 weeks. This prevents breakage of the nails that can't support the length and weight, while keeping the Matrix of the nail safe from damage (that is where the nail plate grows from). `,
  },
  {
    id: uuidv4(),
    category: 'nails',
    question: `My gel is lifting, why is that?`,
    answer: (
      <span>
        <span>
          While gel polish is definitely stronger than regular polish, you still
          have to be careful with it - especially for the first 24 hours!
          <br />
        </span>

        <span className="ul">
          That means:
          <span className="li">
            no soaking in water! Wear gloves to do the dishes!
          </span>
          <span className="li">
            no filing your nails or gel polish AT ALL! This breaks the seal and
            allows water and oils in between the free edge, and the bond will
            likely lift
          </span>
          <span className="li">
            no opening boxes/cans with your new nails, a knife works for both of
            those beautifully
          </span>
          <span className="li">
            use cuticle oil daily to help keep your nails healthy and strong,
            also helping your nails to not dry out or lift away from the gel
            polish/overlay
          </span>
        </span>
      </span>
    ),
  },
  {
    id: uuidv4(),
    category: 'nails',
    question: `How long does gel polish last?`,
    answer: ` Polishes used are vegan friendly and Big5-Free from Bio Seaweed Gel Canada.
    BeBio Nail Lacquer gets up to 7+ days of wear, traditional polish, good for frequent changes in color.
    Gel Polish gets 2+ weeks of no-chip wear, promotes natural nail growth and strengthens nails.
    Sculpting Gel gets 2+ weeks of wear with all the benefits of Gel polish, just with added strength for your growing nails.`,
  },
  //waxing
  {
    id: uuidv4(),
    category: 'waxing',
    question: 'How do I prepare for a Brazilian Wax?',
    answer: `Please have a minimum of 3 weeks of hair growth after shaving. This allows for all 3 cycles of hair growth to be grown out so you will get the best wax possible. Avoid caffeine the day of your wax. Caffeine restricts blood vessels so skin does not get as much blood flow; which in turn will increase sensitivity. Taking an Ibuprofen 30 minutes before your wax will help with sensitivity and inflammation.`,
  },
  {
    id: uuidv4(),
    category: 'waxing',
    question: 'How often should I make an appointment?',
    answer: `It is recommended to wait 4-6 weeks in between appointments.
      Please do not shave in between your appointments, this can irritate the hair follicle and cause ingrown hairs.`,
  },
  {
    id: uuidv4(),
    category: 'waxing',
    question: 'What are the benefits of waxing?',
    answer: `Waxing any hair on your body you will experience softer, finer and more sparse hair growth over time. The best benefit of consistent waxing is it get's easier! Instead of waxing hair with deep roots, we will be waxing baby hair, so it should get less painful with every appointment!`,
  },
  {
    id: uuidv4(),
    category: 'waxing',
    question: `Is waxing sanitary?`,
    answer: `Yes!! I never double dip wax sticks whether it's for facial or body waxing. This is to protect your health and prevent spreading harmful bacteria. No double dipping is the number one thing you need to look for - wherever you get waxed!`,
  },
  {
    id: uuidv4(),
    category: 'waxing',
    question: `Can I tan before or after my wax?`,
    answer: (
      <span>
        Please wait 3-5 days after tanning to get waxed. This is so your skin
        will not "lift" during your waxing appointment. You should wait about
        2-3 days after your wax to tan. Waxing takes dead skin off so you will
        be more photosensitive and prone to burning.
        <br />
        <br />
        If you are spray tanning, I recommend to wax first then wait a minimum
        of 24 hours before spray tanning.
      </span>
    ),
  },
  {
    id: uuidv4(),
    category: 'waxing',
    question: `Do I need to trim before I come in for my wax? `,
    answer: (
      <span>
        Here's the thing. I've seen it all; the long, the short, the
        unexfoliated. There is no need to try to make your body hair look
        "presentable" before I rip it out of you! And truth be told, it is SO
        MUCH EASIER to wax hair that is too long than to risk an uneven wax
        because you trimmed parts to short.
        <br />
        <br />
        So, no. Please do not trim before seeing me. I'll take care of it all.
      </span>
    ),
  },
  //lash and brows
  {
    id: uuidv4(),
    category: 'lashes & brows',
    question:
      'lashbrow Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing eli?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsanfeugiat integer risus libero pulvinar tellus senectus sapien. Ultrices tellus odio nisl non nibh lacinia. Consectetur metus odio magna volutpatin. Rutrum adipiscing convallis facilisis vestibulum eleifend inullamcorper laoreet enim. Placerat quis donec dolor et at mattis atfeugiat nibh. Sit nibh faucibus at vitae quis eros, molestie luctus.Viverra mauris pulvinar sed volutpat. In viverra arcu purus sed purusvel amet vel.',
  },
  //massage
  {
    id: uuidv4(),
    category: 'massage',
    question:
      'massage Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing eli?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsanfeugiat integer risus libero pulvinar tellus senectus sapien. Ultrices tellus odio nisl non nibh lacinia. Consectetur metus odio magna volutpatin. Rutrum adipiscing convallis facilisis vestibulum eleifend inullamcorper laoreet enim. Placerat quis donec dolor et at mattis atfeugiat nibh. Sit nibh faucibus at vitae quis eros, molestie luctus.Viverra mauris pulvinar sed volutpat. In viverra arcu purus sed purusvel amet vel.',
  },
  //general
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

//Policies
export const policies = [
  {
    id: uuidv4(),
    title: 'Cancellation Policy  ',
    body: (
      <span>
        <p>
          I love all of my clients, and when you’re not there when I show up, or
          you cancel or change your appointment at the last minute – I seriously
          cry! Usually because I’m super pumped about seeing you, but also
          because now someone else might miss their opportunity for some
          self-care time.
        </p>
        <p>
          With this in mind there is one small rule I enforce and ask that you
          honor:{' '}
        </p>
        <p>
          {' '}
          Please give Beauty by Kaylene no less than 24 hours' notice to cancel
          or change your appointment. Guests who do not, will be required to pay
          50% of the cost of the service booked, payable on or before your next
          appointment.{' '}
        </p>
        <p>
          Thank you for understanding and your kindness,
          <span className="signature"> Kay xo</span>{' '}
        </p>
      </span>
    ),
  },
  {
    id: uuidv4(),
    title: 'Menstruation Policy ',
    body: (
      <span>
        <p>
          With Beauty by Kaylene you are able to wax while you are menstruating.{' '}
        </p>
        <p>
          All that is asked is that you kindly insert a clean tampon or utilize
          a menstruation cup prior to your service to ensure that proper
          sanitation is maintained.{' '}
        </p>
        <p>
          It is understandable that not every client will be comfortable with
          this, so please plan ahead and book accordingly.{' '}
        </p>
        <p>
          Canceling due to menstruation will still need to be mindful of our
          *cancellation policy* to avoid any fees.{' '}
          <span className="signature"> Kay xo</span>
        </p>
      </span>
    ),
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
