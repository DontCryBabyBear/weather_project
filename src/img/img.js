import coldest from './coldest.jpg';
import cold from './cold.jpg';
import hot from './hot.jpg';
import heat from './heat.jpg';
import notFound from './notFound.jpg'
import offline from './offline.jpg'
const imgs = {
    coldest : {
        url : coldest,
        hex : '#EFEFF9',
        bgSize : 'contain',
        link : '<a href="https://www.freevector.com/people-ice-skating-29801#">FreeVector.com</a>',
    },
    cold : {
        url : cold,
        hex : '#fff',
        bgSize : 'cover',
        link : '<a href="https://www.vecteezy.com/free-vector/nature">Nature Vectors by Vecteezy</a>',
    },
    hot : {
        url : hot ,
        hex : '#D86D27',
        bgSize : 'cover',
        link : '<a href="https://www.freevector.com/sunset-in-route-66-vector-28697">FreeVector.com</a>',
    },
    heat : {
        url : heat,
        hex : '#fff',
        bgSize : 'contain',
        link : '<a href="<a href="https://www.vecteezy.com/free-vector/cartoon">Cartoon Vectors by Vecteezy</a>',
    },

    notFound : {
        url : notFound,
        link : '<a href="https://www.vecteezy.com/free-vector/not-found">Not Found Vectors by Vecteezy</a>',
        visibility : 'hidden'
    },

    offline : {
        url : offline,
        link : '<a href="https://www.vecteezy.com/free-vector/offline">Offline Vectors by Vecteezy</a>',
        visibility : ''
    }
}

export default imgs;