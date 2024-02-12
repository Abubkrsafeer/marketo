import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryItem(props) {
    return (
        <div className='category_item shadow rounded-4 text-center p-2'>

            <div className='category_image'>
                <img src={props.image} alt="image_cat" className='img-fluid' width="150" height="150" />
            </div>
            <div className='category_title mt-3'>
                <h4>{props.title}</h4>
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
