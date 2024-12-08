import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import { LinkIcon as InternalLinkIcon } from '@heroicons/react/24/outline';
import { ArrowTopRightOnSquareIcon as ExternalLinkIcon } from '@heroicons/react/24/outline';
import { InboxIcon as EmailIcon } from '@heroicons/react/24/outline';

export default function MultiDimLink({ blok }) {
  const linkType = blok.link.linktype;
  const getIcon = (linkType) => {
    switch (linkType) {
      case 'email':
        return <EmailIcon className='h-6 w-6' stroke='#fff' />;
      case 'url':
        return <ExternalLinkIcon className='h-6 w-6' stroke='#fff' />;
      default:
        return <InternalLinkIcon className='h-6 w-6' stroke='#fff' />;
    }
  };
  return (
    <div className='flex flex-col items-center justify-center mx-auto p-4' {...storyblokEditable(blok)}>
      <div className='grid grid-cols-1 gap-6 min-w-[350px] max-w-[350px]'>
        <a
          href={linkType === 'email' ? `mailto:${blok.link.url}` : blok.link.url}
          className='rounded-lg border border-[#d4d4d4] bg-[#fff] p-4 shadow-sm transition-colors hover:bg-[#f5f5f5]'>
          <div className='flex items-center gap-4'>
            <div className='rounded-full bg-[#062121] p-3'>{getIcon(linkType)}</div>
            <div>
              <h3 className='text-lg font-medium max-w-[250px] truncate' title={blok.title}>
                {blok.title}
              </h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
