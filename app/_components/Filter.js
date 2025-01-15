'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function Filter() {
  const searchParams = useSearchParams(); //hook that lets you manipulate query in url
  const router = useRouter(); // hook that routes you to a "page" based on query
  const pathname = usePathname();

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams); //this is a webAPI
    params.set('capacity', filter); //setting query parameter
    router.replace(`${pathname}?${params.toString()}`, { scroll: false }); //routing the page based on set parameter. {scroll: false} is optional
  }

  return (
    <div className="border border-primary-800 flex">
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter('all')}
      >
        All cabins
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter('small')}
      >
        1&mdash;3 guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter('medium')}
      >
        4&mdash;7 guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter('large')}
      >
        8&mdash;12 guests
      </button>
    </div>
  );
}

export default Filter;
