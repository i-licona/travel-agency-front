import React, { useState } from 'react';

const categories = [
  { id:1, text:'Beach' },
  { id:2, text:'Mountain' },
  { id:3, text:'Waterfall' },
  { id:4, text:'City' }
];


export const PopularPlaces = () => {
  /* hooks : funcion */
  const [active, setActive] = useState(1);

  return (
    <div className="row mt-5">
      <div className="col-sm-12 col-md-4">
        <h2 className="display-5">Popular places</h2>
      </div>
      <div className="col-sm-12 col-md-8">
        <ul className="nav nav-tabs">
          {
            categories.map((x) => (
              <li style={{ cursor:'pointer' }} className="nav-item" key={ x.id } onClick={ () => setActive(x.id) }>
                <a className={ `nav-link ${ active == x.id ? 'active' : '' }` } aria-current="page">{ x.text }</a>
              </li>
            ))
          }
        </ul>                        
      </div>
    </div>
  )
}
