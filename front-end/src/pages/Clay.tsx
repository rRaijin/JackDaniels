import React, { useState, useEffect } from 'react';

import clayService from '../services/clay.service';
import PreloadedList from '../components/lists/PreloadedList';


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
        <div className='mt-5'>
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
