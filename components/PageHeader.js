import { storyblokEditable } from '@storyblok/react';
import React from 'react';

export default function PageHeader({ blok }) {
  return (
    <div className='mb-8 flex flex-col items-center' {...storyblokEditable(blok)}>
      <h1 className='text-3xl font-bold mt-10'>{blok.title}</h1>
      <p className='text-muted-foreground'>{blok.subtitle}</p>
    </div>
  );
}
