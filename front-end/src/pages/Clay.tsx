import React, { useState, useEffect } from 'react';

import { ClayStaff, TileType } from '../constants/enums';
import clayService from '../services/clay.service';
import MosaicList from '../components/lists/Mosaic';
import PreloadedList from '../components/lists/PreloadedList';
import Tabulation, { ITabulationProps } from '../components/Tabulation';
import ClayTabItem from '../components/ClayComponents/clayTabItem';


const TEXT_COLOR = 'text-steel-darker bg-steel-lightest font-bold uppercase text-center border-2 border-b-0';
const IMG_SRC = 'https://via.placeholder.com/200x200';
const haha = (name: ClayStaff, desc: string) => ({
    name,
    content: <ClayTabItem
                imgSrc={IMG_SRC}
                description={desc}
                name={name}/>,
    options: {
        headerCss: TEXT_COLOR
    }
});

const tempTabulationListData: ITabulationProps = {
    className: 'flex flex-col',
    list: [
        haha(ClayStaff.GLASS, 'GLASS 123'),
        haha(ClayStaff.METAL, 'METAL 123'),
        haha(ClayStaff.PLASTICINE, 'PLASTICINE 123'),
        haha(ClayStaff.POTTERY, 'POTTERY 123')
    ]
}


const Clay = () => {
    const [sculptures, setSculptures] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [dataFetched, setDataFetched] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        setDataFetched(true);
        setTimeout(() => {
            clayService.getAll()
                .then((res) => {
                    if (res.status >= 400) {
                        console.log('Error');
                        setErrorMsg('Server error!');
                    } else return res;
                })
                .then(res => {
                    setSculptures(res.data);
                    setDataLoaded(true);
                })
                .catch(() => setErrorMsg('Incorrect format of data'));
        }, 1000);
    }, [dataFetched]);

    return (
        <div className='mt-3'>
            <div className='flex'>
                <div className='w-1/3 py-1'>
                    <img src="/pictures/clays/Moses_San_Pietro_in_Vincoli.jpg" alt="Moses_San_Pietro_in_Vincoli" />
                </div>
                <div className='w-2/3 pl-2'>
                    Sculpture is the branch of the visual arts that operates in three dimensions. It is one of the plastic arts. Durable sculptural processes originally used carving (the removal of material) and modelling (the addition of material, as clay), in stone, metal, ceramics, wood and other materials but, since Modernism, there has been an almost complete freedom of materials and process. A wide variety of materials may be worked by removal such as carving, assembled by welding or modelling, or moulded or cast. Sculpture in stone survives far better than works of art in perishable materials, and often represents the majority of the surviving works (other than pottery) from ancient cultures, though conversely traditions of sculpture in wood may have vanished almost entirely. However, most ancient sculpture was brightly painted, and this has been lost.
                    Sculpture has been central in religious devotion in many cultures, and until recent centuries large sculptures, too expensive for private individuals to create, were usually an expression of religion or politics. Those cultures whose sculptures have survived in quantities include the cultures of the ancient Mediterranean, India and China, as well as many in Central and South America and Africa.
                    The Western tradition of sculpture began in ancient Greece, and Greece is widely seen as producing great masterpieces in the classical period. During the Middle Ages, Gothic sculpture represented the agonies and passions of the Christian faith. The revival of classical models in the Renaissance produced famous sculptures such as Michelangelo's statue of David. Modernist sculpture moved away from traditional processes and the emphasis on the depiction of the human body, with the making of constructed sculpture, and the presentation of found objects as finished art works.
                </div>
            </div>
            <div className=''>
                <MosaicList
                    items={[]}
                    tileType={TileType.WORD}/>
            </div>
            <Tabulation
                list={tempTabulationListData.list}
                className={tempTabulationListData.className}/>

            <PreloadedList
                dataFetched={dataFetched}
                errorMsg={errorMsg}
                dataLoaded={dataLoaded}
                list={sculptures}/>
        </div>
    );
};

export default Clay;


// colors: colors,

//   screens: {
//       'sm': '576px',
//       'md': '768px',
//       'lg': '992px',
//       'xl': '1200px'
//   },

//   fonts: {
//       // 'sans': [
//       //     'system-ui',
//       //     'BlinkMacSystemFont',
//       //     '-apple-system',
//       //     'Segoe UI',
//       //     'Roboto',
//       //     'Oxygen',
//       //     'Ubuntu',
//       //     'Cantarell',
//       //     'Fira Sans',
//       //     'Droid Sans',
//       //     'Helvetica Neue',
//       //     'sans-serif',
//       // ],
//       'serif': [
//           'Montserrat',
//           'sans-serif',
//           'Constantia',
//           'Lucida Bright',
//           'Lucidabright',
//           'Lucida Serif',
//           'Lucida',
//           'DejaVu Serif',
//           'Bitstream Vera Serif',
//           'Liberation Serif',
//           'Georgia',
//           'serif',
//       ],
//       // 'mono': [
//       //     'Menlo',
//       //     'Monaco',
//       //     'Consolas',
//       //     'Liberation Mono',
//       //     'Courier New',
//       //     'monospace',
//       // ]
//   },

//   textSizes: {
//       'xs': '12px',
//       'sm': '14px',
//       'base': '16px',
//       'lg': '18px',
//       'xl': '20px',
//       '2xl': '24px',
//       '3xl': '30px',
//       '4xl': '36px',
//       '5xl': '48px',
//       '6xl': '60px'
//   },

//   fontWeights: {
//       // 'hairline': 100,
//       // 'thin': 200,
//       // 'light': 300,
//       'normal': 400,
//       'medium': 500,
//       // 'semibold': 600,
//       'bold': 700,
//       // 'extrabold': 800,
//       // 'black': 900
//   },

//   leading: {
//       'none': 1,
//       'tight': 1.25,
//       'normal': 1.5,
//       'loose': 2
//   },

//   tracking: {
//       'tight': '-0.05em',
//       'normal': '0',
//       'wide': '0.05em'
//   },

//   textColors: colors,

//   backgroundColors: colors,

//   backgroundSize: {
//       'auto': 'auto',
//       'cover': 'cover',
//       'contain': 'contain'
//   },

//   borderWidths: {
//       default: '1px',
//       '0': '0',
//       '2': '2px',
//       '3': '3px',
//       // '4': '4px',
//       // '8': '8px',
//   },

//   borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),

//   borderRadius: {
//       'none': '0',
//       default: '4px',
//       'lg': '8px',
//       'full': '9999px'
//   },

//   width: {
//       'auto': 'auto',
//       '1': '1px',
//       '2': '2px',
//       '1/2': '50%',
//       // '1/3': '33.33333%',
//       // '2/3': '66.66667%',
//       // '1/4': '25%',
//       // '3/4': '75%',
//       // '1/5': '20%',
//       // '2/5': '40%',
//       // '3/5': '60%',
//       // '4/5': '80%',
//       // '1/6': '16.66667%',
//       // '5/6': '83.33333%',
//       // '1/8': '12.5%',
//       // '1/10': '10%',
//       // '1/20': '5%',
//       // '95p': '95%',
//       'full': '100%',
//       'screen': '100vw'
//   },

//   height: {
//       'auto': 'auto',
//       '1': '1px',
//       '2': '2px',
//       '1/2': '50%',
//       '95p': '95%',
//       'full': '100%',
//       'screen': '100vh'
//   },

//   minWidth: {
//       '0': '0',
//       '1': '1px',
//       '2': '2px',
//       '1/4': '25%',
//       '1/2': '50%',
//       '3/4': '75%',
//       'full': '100%'
//   },

//   minHeight: {
//       '0': '0',
//       '1': '1px',
//       'full': '100%',
//       'screen': '100vh'
//   },

//   maxWidth: {
//       '4xs': '80px',
//       'full': '100%'
//   },

//   maxHeight: {
//       '4xs': '80px',
//       'full': '100%',
//       'screen': '100vh',
//   },

//   padding: {
//       '0': '0',
//       '1': '1px'
//   },

  

//   negativeMargin: {
//       '0': '0',
//       '1': '1px',
//       '2': '2px'
//   },

//   shadows: {
//       default: '0 2px 4px 0 rgba(0,0,0,0.10)',
//       'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
//       'md-light': '0 8px 16px 0 #00000007',
//       'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
//       'lg2': '0 22px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
//       'xl':  '0 5px 50px 0 rgba(0,0,0,0.10), 0 5px 15px 0 rgba(0,0,0,0.0.08)',
//       'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
//       'outline': '0 0 0 3px rgba(52,144,220,0.5)',
//       'gold': '-5px 5px 20px 0 #f2cb2766, 10px 5px 20px 0 #e29d0466',
//       'chili': '-5px 5px 20px 0 #b54e3066, 10px 5px 20px 0 #90322366',
//       'chili-light': '0px 10px 50px 0 #da897240',
//       'white-light': '0 0 30px 0 rgba(0, 0, 0, 0.14)',
//       'none': 'none'
//   },

//   zIndex: {
//       'auto': 'auto',
//       'n1': -1,
//       '0':  0,
//       '5': 5,
//       // '10': 10,
//       // '20': 20,
//       // '30': 30,
//       // '50': 50,
//       // '51': 51,
//       // '52': 52
//   },

//   opacity: {
//       '0': '0',
//       '25': '.25',
//       '50': '.5',
//       '75': '.75',
//       '100': '1'
//   },

//   svgFill: {
//       'current': 'currentColor'
//   },

//   svgStroke: {
//       'current': 'currentColor'
//   },

//   modules: {
//       appearance: ['responsive'],
//       backgroundAttachment: ['responsive'],
//       backgroundColors: ['responsive', 'hover', 'focus'],
//       backgroundPosition: ['responsive'],
//       backgroundRepeat: ['responsive'],
//       backgroundSize: ['responsive'],
//       borderCollapse: [],
//       borderColors: ['responsive', 'hover', 'focus'],
//       borderRadius: ['responsive'],
//       borderStyle: ['responsive'],
//       borderWidths: ['responsive'],
//       cursor: ['responsive', 'hover'],
//       display: ['responsive'],
//       flexbox: ['responsive'],
//       float: ['responsive'],
//       fonts: ['responsive'],
//       fontWeights: ['responsive', 'hover', 'focus'],
//       height: ['responsive'],
//       leading: ['responsive'],
//       lists: ['responsive'],
//       margin: ['responsive'],
//       maxHeight: ['responsive'],
//       maxWidth: ['responsive'],
//       minHeight: ['responsive'],
//       minWidth: ['responsive'],
//       negativeMargin: ['responsive'],
//       opacity: ['responsive'],
//       outline: ['focus'],
//       overflow: ['responsive'],
//       padding: ['responsive'],
//       pointerEvents: ['responsive'],
//       position: ['responsive'],
//       resize: ['responsive'],
//       shadows: ['responsive', 'hover', 'focus'],
//       svgFill: [],
//       svgStroke: [],
//       tableLayout: ['responsive'],
//       textAlign: ['responsive'],
//       textColors: ['responsive', 'hover', 'focus'],
//       textSizes: ['responsive'],
//       textStyle: ['responsive', 'hover', 'focus'],
//       tracking: ['responsive'],
//       userSelect: ['responsive'],
//       verticalAlign: ['responsive'],
//       visibility: ['responsive'],
//       whitespace: ['responsive'],
//       width: ['responsive'],
//       zIndex: ['responsive']
//   },

//   plugins: [
//       require('tailwindcss/plugins/container')({
//           // center: true,
//       }),
//       gradient({
//           gradients: {
//               'iron':           ['rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)'],
//               'iron-light':     ['rgba(0, 0, 0, 0.1)', 'rgba(255, 255, 255, 0.2)'],
//               'iron-revers':    ['rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0.2)'],
//               'gold':           ['to right', '#f4d44c', '#eca404'],
//               'gold-light':     ['to right', '#f8e287', '#d8b20d'],
//               'chili':          ['to right', '#d25a46', '#943424'],
//               'chili-light':    ['to right', '#dc7f6f', '#b9412d'],
//           },
//           variants: ['responsive', 'hover']
//       })
//   ],

//   options: {
//       prefix: '',
//       important: false,
//       separator: ':'
//   }
// };
