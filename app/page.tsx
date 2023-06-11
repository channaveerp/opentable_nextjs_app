import Header from './component/Header';
import RestaurantCard from './component/RestaurantCard';

export default function Home() {
  return (
    <main className='bg-gradient-to-r from-[#0f1f47] to-[#5f6984] border h-64 p-2'>
      <Header />
      <div className='mt-20 px-1 flex flex-wrap justify-center gap-5'>
        <RestaurantCard />
      </div>
    </main>
  );
}
