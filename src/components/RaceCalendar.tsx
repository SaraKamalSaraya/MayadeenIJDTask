"use client";
import { useState, useEffect } from "react";
import rightArrowCircle from '@/assets/images/icons/right-arrow-circle.svg';
import leftArrowCircle from '@/assets/images/icons/left-arrow-circle.svg';
import Image from "next/image";

// Define types for our data structure
interface Event {
  id: number;
  name: string;
  category: string;
  date: string;
  time: string;
  distenation: number;
  type: string;
  age: number;
  prize: number;
}

interface DayData {
  dayNumber: number;
  dayName: string;
  events: Event[];
}

const DAYS = [
  { en: "SAT", ar: "السبت" },
  { en: "SUN", ar: "الأحد" },
  { en: "MON", ar: "الإثنين" },
  { en: "TUE", ar: "الثلاثاء" },
  { en: "WED", ar: "الأربعاء" },
  { en: "THU", ar: "الخميس" },
  { en: "FRI", ar: "الجمعة" }
];

export default function RaceCalendar() {
  const RaceCalendarData: DayData[] = [
    {
      dayNumber: 1,
      dayName: "الخميس",
      events: [
        {
          id: 123,
          name: "سباق السرعة",
          category: "سباق سريع",
          date: "20 مايو 2025",
          time: "03:00 PM - 05:00 PM",
          distenation: 5,
          type: "ترابي",
          age: 4,
          prize: 50000,
        },
        {
          id: 1234,
          name: "سباق السرعة",
          category: "سباق سريع",
          date: "20 مايو 2025",
          time: "03:00 PM - 05:00 PM",
          distenation: 5,
          type: "ترابي",
          age: 4,
          prize: 50000,
        },
      ],
    },
    {
      dayNumber: 5,
      dayName: "الاثنين",
      events: [
        {
          id: 1213,
          name: "سباق التحمل",
          category: "سباق طويل",
          date: "5 مايو 2025",
          time: "02:00 PM - 06:00 PM",
          distenation: 8,
          type: "رملي",
          age: 5,
          prize: 75000,
        },
      ],
    },
    {
      dayNumber: 8,
      dayName: "الخميس",
      events: [
        {
          id: 1523,
          name: "سباق الخيول العربية",
          category: "سباق تراثي",
          date: "8 مايو 2025",
          time: "04:30 PM - 07:00 PM",
          distenation: 6,
          type: "ترابي",
          age: 6,
          prize: 100000,
        },
        {
          id: 1524,
          name: "سباق المهرات",
          category: "سباق الناشئين",
          date: "8 مايو 2025",
          time: "02:00 PM - 03:30 PM",
          distenation: 4,
          type: "رملي",
          age: 3,
          prize: 40000,
        },
      ],
    },
    {
      dayNumber: 12,
      dayName: "الاثنين",
      events: [
        {
          id: 1623,
          name: "السباق الملكي",
          category: "التصنيف الأول",
          date: "12 مايو 2025",
          time: "05:00 PM - 08:00 PM",
          distenation: 10,
          type: "عشبي",
          age: 7,
          prize: 200000,
        },
      ],
    },
    {
      dayNumber: 15,
      dayName: "الخميس",
      events: [
        {
          id: 1723,
          name: "سباق السرعة القصوى",
          category: "سباق قصير",
          date: "15 مايو 2025",
          time: "03:30 PM - 05:00 PM",
          distenation: 3,
          type: "رملي",
          age: 4,
          prize: 60000,
        },
      ],
    },
    {
      dayNumber: 22,
      dayName: "الخميس",
      events: [
        {
          id: 1823,
          name: "سباق الجائزة الكبرى",
          category: "سباق دولي",
          date: "22 مايو 2025",
          time: "06:00 PM - 09:00 PM",
          distenation: 12,
          type: "عشبي",
          age: 8,
          prize: 500000,
        },
        {
          id: 1824,
          name: "سباق الهواة",
          category: "سباق مفتوح",
          date: "22 مايو 2025",
          time: "03:00 PM - 05:00 PM",
          distenation: 5,
          type: "ترابي",
          age: 4,
          prize: 30000,
        },
      ],
    },
    {
      dayNumber: 29,
      dayName: "الخميس",
      events: [
        {
          id: 1923,
          name: "سباق الختام",
          category: "سباق مميز",
          date: "29 مايو 2025",
          time: "04:00 PM - 07:00 PM",
          distenation: 7,
          type: "رملي",
          age: 5,
          prize: 150000,
        },
      ],
    },
  ];

  const today = new Date();

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [openEventIndex, setOpenEventIndex] = useState<number | null>(null);
  const [openEventlocation, setOpenEventLocation] = useState<{
    top: number | null;
    left: number | null;
  }>({
    top: null,
    left: null,
  });
  const [popupVisible, setPopupVisible] = useState(false);

  const handleClickOpenEventIndex = (index: number, e: React.MouseEvent) => {
    // If clicking the same event, close it
    if (openEventIndex === index) {
      setPopupVisible(false);
      setTimeout(() => {
        setOpenEventIndex(null);
      }, 300); // Wait for animation to complete
      return;
    }
    
    // Get position of the clicked element
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Calculate window dimensions
    const windowWidth = window.innerWidth;
    
    // Popup dimensions
    const popupWidth = 300; // Width of popup
    
    let left;
    // Default: Bottom left
    left = rect.left;
    
    // Check if popup would go outside right edge
    if (rect.left + popupWidth > windowWidth) {
      // Position at bottom right
      left = rect.left - popupWidth + rect.width;
      
      // Check if popup would still go outside (left side)
      if (left < 0) {
        // Center in the middle of the page
        left = Math.max(0, (windowWidth - popupWidth) / 2);
      }
    }
    
    // Always position below the dot
    const top = rect.bottom + window.scrollY + 5; // 5px gap
    
    setOpenEventLocation({
      top,
      left,
    });
    
    setOpenEventIndex(index);
    // Delay showing the popup for a smoother transition
    setTimeout(() => {
      setPopupVisible(true);
    }, 50);
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (openEventIndex !== null) {
        setPopupVisible(false);
        setTimeout(() => {
          setOpenEventIndex(null);
        }, 300);
      }
    };

    // Add event listener only if popup is open
    if (openEventIndex !== null) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openEventIndex]);

  function getDaysInMonth(year: number, month: number) {
    const date = new Date(year, month - 1, 1);
    const daysArray = [];
    while (date.getMonth() === month - 1) {
      const dayEn = date
        .toLocaleDateString("en-US", { weekday: "short" })
        .toUpperCase();
      const dayAr = DAYS.find((d) => d.en === dayEn)?.ar || "";
      const isFriday = dayEn === "FRI";

      daysArray.push({
        dayNumber: date.getDate(),
        dayNameArabic: dayAr,
        isFriday: isFriday,
      });

      date.setDate(date.getDate() + 1);
    }
    return daysArray;
  }

  const daysInSelectedMonth = getDaysInMonth(selectedYear, selectedMonth);
  
  const onClickPreviousMonth = () => {
    let prevMonth = selectedMonth - 1;
    let prevYear = selectedYear;
    if (prevMonth < 1) {
      prevMonth = 12;
      prevYear--;
    }
    setSelectedMonth(prevMonth);
    setSelectedYear(prevYear);
  };

  const onClickNextMonth = () => {
    let nextMonth = selectedMonth + 1;
    let nextYear = selectedYear;
    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear++;
    }
    setSelectedMonth(nextMonth);
    setSelectedYear(nextYear);
  };

  const getCurrentSelectedEventData = () => {
    return RaceCalendarData.flatMap((d) => d.events || []).find(
      (event) => event.id === openEventIndex
    );
  };

  return (
    <div className="container mx-auto px-4 md:px-8">
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .hide-scrollbar:hover::-webkit-scrollbar {
          display: block;
          height: 8px;
        }
        
        .hide-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        
        .hide-scrollbar:hover {
          scrollbar-width: thin;
        }
      `}</style>
      <p className="text-4xl text-primary mb-8">رزنامة السباقات</p>
      <div className="flex flex-col">
        <div className="flex" style={{ position: 'relative' }}>
          <div style={{ width: '100px', flexShrink: 0, position: 'relative', zIndex: 1 }} className="text-black">
            <div className="flex flex-col gap-2 border-b border-gray-300 h-[70px] pb-2 justify-end" style={{ width: '100px' }}>
              <div>
                <p className="text-sm">{selectedYear}</p>
                <p className="text-xl font-semibold">
                  {new Date(selectedYear, selectedMonth - 1).toLocaleDateString(
                    "ar-EG",
                    { month: "long" }
                  )}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Image src={rightArrowCircle} alt="right arrow" className="w-5 h-5 cursor-pointer" onClick={onClickPreviousMonth} />
                <Image src={leftArrowCircle} alt="left arrow" className="w-5 h-5 cursor-pointer" onClick={onClickNextMonth}/>
              </div>
            </div>
            <div className="text-primary p-5 font-semibold text-base flex justify-center min-h-[90px]" style={{ width: '100px' }}>
              الأحداث
            </div>
          </div>
          
          <div className="flex-grow overflow-x-auto hide-scrollbar" style={{ maxWidth: 'calc(100% - 100px)', position: 'relative' }}>
            <div className="flex text-black border-b border-gray-300" style={{ minWidth: '630px', marginBottom: '-1px' }}>
              {daysInSelectedMonth.map(
                ({ dayNumber, dayNameArabic, isFriday }, index) => (
                  <div 
                    key={index} 
                    className="w-[70px] flex-shrink-0 h-[70px] border-r border-t border-l border-gray-300 p-2 inline-flex items-center flex-col justify-center"
                  >
                    <div className={`text-3xl ${isFriday ? "text-secondary" : "text-primary"}`}>
                      {dayNumber}
                    </div>
                    <div>{dayNameArabic}</div>
                  </div>
                )
              )}
            </div>
            <div className="flex" style={{ minWidth: '630px' }}>
              {daysInSelectedMonth.map(({ dayNumber }, index) => {
                const dayData = RaceCalendarData.find(
                  (d) => d.dayNumber === dayNumber
                );

                return (
                  <div 
                    key={index} 
                    className="w-[70px] flex-shrink-0 min-h-[90px] border-r border-b border-l border-gray-300 p-2 inline-flex items-start flex-col justify-start"
                  >
                    <div className="flex flex-col items-start gap-1 mt-1 flex-wrap h-full">
                      {dayData?.events?.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className="relative inline-block"
                        >
                          <div
                            className={`w-[15px] h-[15px] rounded-full cursor-pointer ${eventIndex === 1 ? "border-[5px] border-secondary" : "border-[5px] border-primary"}`}
                            onClick={(e) => handleClickOpenEventIndex(event.id, e)}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      
      {/* Event Details Popup */}
      {openEventIndex && (() => {
        const event = getCurrentSelectedEventData();

        if (!event) return null;

        return (
          <div
            className={`absolute bg-white text-black shadow-md p-4 w-[300px] max-w-[90vw] rounded-lg flex flex-col gap-1 z-50 transition-all duration-300 ${
              popupVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            style={{
              top: openEventlocation.top || 0,
              left: openEventlocation.left || 0,
            }}
            onClick={(e) => e.stopPropagation()} // Prevent popup from closing when clicked
          >
            <div className="flex items-center justify-between w-full gap-[50px] text-primary">
              {event.name}
              <div 
                className="cursor-pointer text-black font-semibold hover:bg-gray-100 w-6 h-6 flex items-center justify-center rounded-full" 
                onClick={(e) => {
                  e.stopPropagation();
                  setPopupVisible(false);
                  setTimeout(() => {
                    setOpenEventIndex(null);
                  }, 300);
                }}
              >
                X
              </div>
            </div>
            <p className="text-xs text-primary">{event.category}</p>
            <div className="flex gap-2 items-center text-xs">
              <div className="flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {event.date}
              </div>
              <div className="flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {event.time}
              </div>
            </div>
            <table className="w-full">
              <tbody>
                <tr>
                  <td>المسافة</td>
                  <td className="text-primary">{event.distenation} كم</td>
                </tr>
                <tr>
                  <td>النوع</td>
                  <td className="text-primary">{event.type}</td>
                </tr>
                <tr>
                  <td>العمر</td>
                  <td className="text-primary">{event.age} سنوات</td>
                </tr>
                <tr>
                  <td>الجائزة</td>
                  <td className="text-primary">{event.prize} ر.س</td>
                  <td className="self-end">
                    <button className="bg-secondary text-white px-2 py-1 text-xs rounded flex items-center gap-1">
                      تفاصيل
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })()}
    </div>
  );
} 