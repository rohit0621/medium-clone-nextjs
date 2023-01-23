import React from 'react';

const data = [
  {
    number: '01',
    by: 'Tom Cooper',
    topic: 'Ukraine War, 17 January 2023: Klishchivka',
    date: 'Jan 17',
    time: '5 min',
  },

  {
    number: '02',
    by: 'Tom Cooper',
    topic: 'Ukraine War, 17 January 2023: Klishchivka',
    date: 'Jan 17',
    time: '5 min',
  },

  {
    number: '03',
    by: 'Tom Cooper',
    topic: 'Ukraine War, 17 January 2023: Klishchivka',
    date: 'Jan 17',
    time: '5 min',
  },

  {
    number: '04',
    by: 'Tom Cooper',
    topic: 'Ukraine War, 17 January 2023: Klishchivka',
    date: 'Jan 17',
    time: '5 min',
  },

  {
    number: '05',
    by: 'Tom Cooper',
    topic: 'Ukraine War, 17 January 2023: Klishchivka',
    date: 'Jan 17',
    time: '5 min',
  },

  {
    number: '06',
    by: 'Tom Cooper',
    topic: 'Ukraine War, 17 January 2023: Klishchivka',
    date: 'Jan 17',
    time: '5 min',
  },
];

const Trending = (props) => {
  return (
    <div className=''>
      {data.map((item, index) => {
        return (
          <div className='' key={index}>
            <div className='text-black'>{item.number}</div>
            <div className='text-black'>{item.by}</div>
            <div className='text-black'>{item.topic}</div>
            <span className=''>
              <h1>{item.date}</h1>
              <h1>{item.time} read</h1>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Trending;
