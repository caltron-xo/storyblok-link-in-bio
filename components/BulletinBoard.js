import React from 'react';
import { storyblokEditable, RichTextSchema, renderRichText } from '@storyblok/react';

export default function BulletinBoard({ blok }) {
  const renderedRichText = renderRichText(blok.content, {
    schema: RichTextSchema,
  });

  return (
    <div
      className='mt-8 mx-auto max-w-2xl rounded-lg border border-[#d4d4d4] bg-[#fff] p-6 shadow-sm'
      {...storyblokEditable(blok)}>
      <div dangerouslySetInnerHTML={{ __html: renderedRichText }} />
    </div>
  );
}
