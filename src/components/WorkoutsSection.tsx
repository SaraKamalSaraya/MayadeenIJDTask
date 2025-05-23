import React from 'react';
import Image from 'next/image';
import arrow from '@/assets/images/icons/back-button-white.svg';
import Link from 'next/link';

const WorkoutsSection = () => {
  const workouts = [
    {
      id: 1,
      date: 'Aug3',
      details: 'SAR Dirt Gd: 4F in 49 2/5 (28 of 49) B'
    },
    {
      id: 2,
      date: 'Jul27',
      details: 'SAR Turf tr1Frm: 5F in 57 1/5 (1 of 2) B'
    },
    {
      id: 3,
      date: 'Jul20',
      details: 'SAR Dirt Gd: 4F in 51 1/5 (23 of 34) B'
    }
  ];

  const raceData = [
    {
      number: '81',
      age: '3+',
      money: '1M',
      track: 'BHP',
      date: '25 أبريل',
      year: '49 يوم',
      color: 'bg-[#EA3323]',
      details: {
        p: 'P3',
        position: 'P6',
        jockey: 'M Gutierrez',
        record: '117 | L | 12-1'
      },
      stats: [
        {
          main: 'بداية 4',
          sup: null,
          details: '-',
        },
        {
          main: 2,
          sup: 1,
          details: '23.29',
        },
        {
          main: 3,
          sup: 3,
          details: '47.23',
        },
        {
          main: 5,
          sup: '7 1/2',
          details: '59.82',
        },
        {
          main: 6,
          sup: 11,
          details: '1:12.71',
        },
      ],
      surface: {
        type: 'Turf',
        condition: 'Firecracker',
        speed: 'Yielding'
      },
      textSection1: [
        '1 نص مكتوب للتوضيح',
        '2 نص مكتوب للتوضيح',
        '3 نص مكتوب للتوضيح',
      ],
      textSection2: [
        '1 نص مكتوب للتوضيح',
        '2 نص مكتوب للتوضيح',
        '3 نص مكتوب للتوضيح',
      ],
    },
    {
      number: '61',
      age: '3YO',
      money: '$58K',
      track: 'BHP',
      date: '25 أبريل',
      year: '249 يوم - 2011',
      color: 'bg-white',
      details: {
        p: 'P3',
        position: 'P6',
        jockey: 'M Gutierrez',
        record: '117 | L | 12-1'
      },
      stats: [
        {
          main: 'بداية 4',
          sup: null,
          details: '-',
        },
        {
          main: 2,
          sup: 1,
          details: '23.29',
        },
        {
          main: 3,
          sup: 3,
          details: '47.23',
        },
        {
          main: 5,
          sup: '7 1/2',
          details: '59.82',
        },
        {
          main: 6,
          sup: 11,
          details: '1:12.71',
        },
      ],
      surface: {
        type: 'Dirt',
        condition: 'Allowance',
        speed: 'Wet Fast'
      },
      textSection1: [
        '1 نص مكتوب للتوضيح',
        '2 نص مكتوب للتوضيح',
        '3 نص مكتوب للتوضيح',
      ],
      textSection2: [
        '1 نص مكتوب للتوضيح',
        '2 نص مكتوب للتوضيح',
        '3 نص مكتوب للتوضيح',
      ],
    },
    {
      number: '54',
      age: '2YO',
      money: '$48K',
      track: 'BHP',
      date: '25 أبريل',
      year: '49 يوم',
      color: 'bg-[#0122F5]',
      details: {
        p: 'P3',
        position: 'P6',
        jockey: 'M Gutierrez',
        record: '117 | L | 12-1'
      },
      stats: [
        {
          main: 'بداية 4',
          sup: null,
          details: '-',
        },
        {
          main: 2,
          sup: 1,
          details: '23.29',
        },
        {
          main: 3,
          sup: 3,
          details: '47.23',
        },
        {
          main: 5,
          sup: '7 1/2',
          details: '59.82',
        },
        {
          main: 6,
          sup: 11,
          details: '1:12.71',
        },
      ],
      surface: {
        type: 'Synth',
        condition: 'Allowance',
        speed: 'Fast'
      },
      textSection1: [
        '1 نص مكتوب للتوضيح',
        '2 نص مكتوب للتوضيح',
        '3 نص مكتوب للتوضيح',
      ],
      textSection2: [
        '1 نص مكتوب للتوضيح',
        '2 نص مكتوب للتوضيح',
        '3 نص مكتوب للتوضيح',
      ],
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="space-y-3 w-full">
        {raceData.map((race, index) => (
          <React.Fragment key={index}>
            <p className='text-primary text-2xl text-center md:text-start w-full'>{race.year}</p>
            <div className="bg-[#F2F2F2] text-black rounded-lg md:rounded-full overflow-hidden px-4 sm:px-8 md:px-12 py-2 w-full mx-auto">
              <div className="flex items-center justify-center md:justify-between">
                <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-5 md:gap-6 text-xs text-center font-medium w-full justify-between">
                  <div className="w-full md:w-auto flex justify-between md:block">
                    <div>{race.track}</div>
                    <div>{race.date}</div>
                  </div>
                  <div className={`${race.color} text-black rounded-lg md:rounded-full overflow-hidden px-2 sm:px-3 md:px-6 py-1 md:py-2 ltr flex gap-2 md:gap-4 w-full md:w-auto justify-center`}>
                    <span>
                      <div>{race.age}</div>
                      <div>G2</div>
                    </span>
                    <span>
                      <div>{race.surface.type}</div>
                      <div>{race.surface.condition}</div>
                    </span>
                    <span>
                      <div>{race.money}</div>
                      <div>{race.surface.speed}</div>
                    </span>
                  </div>
                  <div className="w-full md:w-auto flex justify-center md:block">
                    <div>{race.details.jockey}</div>
                    <div>{race.details.record}</div>
                  </div>
                  <div className='flex flex-row md:flex-col gap-1 w-full md:w-auto justify-center'>
                    <div className='bg-white rounded-lg md:rounded-full overflow-hidden px-2 py-0'>{race.details.p}</div>
                    <div className='bg-white rounded-lg md:rounded-full overflow-hidden px-2 py-0'>{race.details.position}</div>
                  </div>
                  <div className="w-full md:w-auto grid grid-cols-5 md:flex md:flex-row gap-2 md:gap-4 justify-center">
                    {race.stats.map((stat, index) => (
                      <div className='text-center md:text-start' key={index}>
                        <div>{stat.main} {stat.sup ? <sup className='ps-1'>{stat.sup}</sup> : ''}</div>
                        <div>{stat.details}</div>
                      </div>
                    ))}
                  </div>
                  <div className={`${race.color} text-black rounded-lg md:rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-base mx-auto md:mx-0`}>
                    {race.number}
                  </div>
                  <div>
                    {race.textSection1.map((text, index) => (
                      <div key={index}>{text}</div>
                    ))}
                  </div>
                  <div>
                    {race.textSection2.map((text, index) => (
                      <div key={index}>{text}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Workouts Section */}
      <div className="mt-8 bg-[#008062] text-white rounded-lg md:rounded-full overflow-hidden ltr px-4 sm:px-6 md:px-8 py-2 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between">
          <div className="flex-1 flex flex-col md:flex-row md:flex-wrap items-center md:items-center gap-2 md:gap-0">
            <div className="uppercase mr-0 md:mr-4 font-bold mb-2 md:mb-0 flex items-center justify-between gap-2 w-full md:w-max">
              WORKOUTS
              <Link href="/workouts" className="mt-2 md:mt-0 block md:hidden">
                <Image
                  src={arrow}
                  alt="arrow"
                  className="h-5 w-5"
                />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-0 justify-center md:justify-start">
              {workouts.map((workout) => (
                <span key={workout.id} className="inline-block mr-0 md:mr-8 text-xs">
                  <span>{workout.date}</span> {workout.details}
                </span>
              ))}
            </div>
          </div>
          <Link href="/workouts" className="mt-2 md:mt-0 hidden md:block">
            <Image
              src={arrow}
              alt="arrow"
              className="h-5 w-5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutsSection; 