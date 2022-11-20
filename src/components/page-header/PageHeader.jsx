import React from 'react';

import './page-header.scss';

import bg from '../../assets/footer.png';

const PageHeader = props => {
    return (
        <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
            <h2>Phim chiếu rạp</h2>
        </div>
    );
}


export default PageHeader;
