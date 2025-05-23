import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import RaceCalendar from '@/components/RaceCalendar';
import WorkoutsSection from '@/components/WorkoutsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="bg-white pt-8">
          <RaceCalendar />
        </div>
        <div className="bg-white pt-8">
          <WorkoutsSection />
        </div>
        <div className='bg-white pt-8'></div>
      </main>
      <Footer />
    </div>
  );
}
