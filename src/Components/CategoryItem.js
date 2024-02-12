import React from "react";

export default function CategoryItem(props) {
     const itemNo = props.itemNo + 1;
    return (
        <div className='category_item shadow rounded-4 text-center p-2'>
            <div className='category_image'>
                {/* Fixed the src attribute syntax */}
                <img src={`Assets/cat${itemNo}.jpg`} alt="image_cat" className='img-fluid' width="150" height="150" />
            </div>
            <div className='category_title mt-3'>
                {/* Changed h5 to h4 */}
                <p><strong>{props.title}</strong></p>
            </div>
        </div>
    );
}
