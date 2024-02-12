import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryItem(props) {
    return (
        <div className='category_item shadow rounded-4 col-md-2 text-center p-3'>
            <div className='category_image'>
                <img src={props.image} alt="image_cat" className='img-fluid' width="150" height="150" />
            </div>
            <div className='category_title mt-3'>
                <h3>{props.title}</h3>
            </div>
        </div>
    );
}

// PropTypes
CategoryItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

// Set default props
CategoryItem.defaultProps = {
    title: "Title1",
    image: "/Assets/cat1.jpg"
};
