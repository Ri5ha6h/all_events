import { memo, useEffect, useState } from 'react';
import { musicApi } from '../Api/Api';
import Button from '../Components/Button';
import EventComponent from '../Components/EventComponent';
import { Event } from '../Modal/Event';
import { FaSpinner } from 'react-icons/fa';

const MusicPage = () => {
  const [music, setMusic] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewTheme, setViewTheme] = useState(
    ' flex flex-col items-center justify-center space-y-4 '
  );

  const handleList = () => {
    setViewTheme(
      ' flex flex-col items-center justify-center space-y-4 '
    );
  };

  const handleGrid = () => {
    setViewTheme(
      ' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 '
    );
  };
  useEffect(() => {
    musicApi().then((res) => {
      return setMusic(res.data.item);
    });

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className='px-6 pt-12'>
      <h2 className='text-2xl font-semibold text-gray-400'>
        Music Events
      </h2>
      <Button
        list={handleList}
        grid={handleGrid}
      />
      {loading ? (
        <FaSpinner className='w-6 h-6 mt-4 text-gray-400 animate-spin'></FaSpinner>
      ) : (
        <div className={' pt-7 ' + viewTheme}>
          {music.map((item, i) => (
            <EventComponent
              key={i}
              id={item.id}
              eventname_raw={item.eventname_raw}
              label={item.label}
              location={item.location}
              thumb_url_large={
                item.thumb_url_large
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(MusicPage);
