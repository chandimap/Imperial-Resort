import React from 'react';
import {Link} from 'react-router-dom';

import Showcase from './Global/Showcase';
import Banner from './Global/Banner';

export default function ErrorPage() {
    return (
        <Showcase>
       <Banner
       title="404"
       subtitle="page not found"
       >
       <Link to='/' className='btn-primary'>home page</Link>
       </Banner>
       </Showcase>
    )
}
