import React from 'react';
import { storyblokEditable } from '@storyblok/react';

export default function FeaturedImages({ blok }) {
  return (
    <div
      className='rounded-lg border border-[#d4d4d4] bg-[#fff]  shadow-sm m-8 max-w-[40rem] mx-auto'
      {...storyblokEditable(blok)}>
      <div>
        {blok.images.map((image) => {
          return <img src={image.filename} alt={image.alt} className='rounded-lg object-cover' />;
        })}
      </div>
    </div>
  );
}
