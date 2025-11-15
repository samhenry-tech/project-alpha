import { Header } from '@/components/organisms/Header';

export const Home = () => {
  return (
    <>
      <Header />
      <article className="flex flex-col items-center max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Base Project</h1>
        <p className="text-base text-gray-600 max-w-2xl ">Add content here</p>
      </article>
    </>
  );
};
