'use client'
import Link from 'next/link';
import Image from 'next/image';
import heroImg from '@/assets/images/home-page/main-img.svg';
import arrow from '@/assets/images/icons/left-arrow.svg';

interface EventCardProps {
  date: string;
  title: string;
  subtitle: string;
}

function EventCard({ date, title, subtitle }: EventCardProps) {
  return (
    <div className="bg-primary bg-opacity-90 text-white p-4 sm:p-5 flex flex-col gap-1 items-start text-center rounded-sm shadow-md">
      <div className="text-sm">{date}</div>
      <div className="text-2xl sm:text-3xl">{title}</div>
      <div className="text-sm sm:text-lg opacity-90">{subtitle}</div>
    </div>
  );
}

export default function HeroSection() {
  const events = [
    {
      id: 1,
      date: '20/3/2025',
      title: 'عنوان رئيسي',
      subtitle: 'العنوان الفرعي هنا او التفاصيل'
    },
    {
      id: 2,
      date: '20/3/2025',
      title: 'عنوان رئيسي',
      subtitle: 'العنوان الفرعي هنا او التفاصيل'
    },
    {
      id: 3,
      date: '20/3/2025',
      title: 'عنوان رئيسي',
      subtitle: 'العنوان الفرعي هنا او التفاصيل'
    },
    {
      id: 4,
      date: '20/3/2025',
      title: 'عنوان رئيسي',
      subtitle: 'العنوان الفرعي هنا او التفاصيل'
    }
  ];

  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Hero background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          priority
        />
      </div>
      <div className="h-[350px] sm:h-[385px] md:h-[455px] lg:h-[480px] overflow-hidden relative">
        <div className="container mx-auto h-full relative z-10 flex flex-col justify-center items-start px-4 sm:px-6">
          <div className="text-white max-w-[320px] xs:max-w-sm md:max-w-lg">
            <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-6xl mb-7 md:mb-8 ">عنوان رئيسي</h1>
            <p className="text-md xs:text-xl md:text-2xl lg:text-4xl mb-4 md:mb-5 ">العنوان الفرعي هنا او التفاصيل</p>
            <Link
              href="/events"
              className="bg-secondary hover:bg-secondary/90 transition-all text-black px-3 py-0.5 md:px-4 md:py-1 rounded-full inline-flex items-center justify-center gap-2 text-sm"
            >
              اذهب إلى
              <Image
                src={arrow}
                alt="Hero background"
                className="h-2.5 w-2.5 md:h-3 md:w-3"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Event cards - positioned to overlap with hero section */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 -mt-16 sm:-mt-20 md:-mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {events.map((event) => (
            <EventCard
              key={event.id}
              date={event.date}
              title={event.title}
              subtitle={event.subtitle}
            />
          ))}
        </div>
      </div>

      {/* Space under cards */}
      <div className="h-10 sm:h-12 md:h-16"></div>
    </section>
  );
}
