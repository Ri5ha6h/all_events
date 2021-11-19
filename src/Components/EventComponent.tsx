import { FC, memo } from 'react';
import { Event } from '../Modal/Event';

interface AllProps extends Event {}

const EventComponent: FC<AllProps> = ({
  eventname_raw,
  location,
  label,
  thumb_url_large,
}) => {
  return (
    <div className='h-auto border-2 border-gray-200 rounded-md w-60 sm:w-72 lg:w-96'>
      <div className='w-full'>
        <img
          className='object-fill w-full rounded-t-md'
          src={thumb_url_large}
          alt='images'
        />
      </div>
      <div className='px-3 py-2'>
        <div className='flex justify-between'>
          <h3 className='font-medium text-gray-400'>
            Event:{' '}
            <span className='text-lg text-blue-400'>
              {eventname_raw}
            </span>
          </h3>
          <p className='text-gray-400'>
            Date:{' '}
            <span className='text-blue-400'>
              {label}
            </span>
          </p>
        </div>
        <div className='mt-2'>
          <p className='text-sm font-semibold text-gray-400'>
            Venue:{' '}
            <span className='text-blue-400'>
              {location}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(EventComponent);
