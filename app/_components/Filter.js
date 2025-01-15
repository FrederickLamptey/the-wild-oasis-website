'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function Filter() {
  const searchParams = useSearchParams(); //hook that lets you manipulate query in url
  const router = useRouter(); // hook that routes you to a "page" based on query
  const pathname = usePathname();

  const activeFilter = searchParams.get('capacity') ?? 'all';

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams); //this is a webAPI
    params.set('capacity', filter); //setting query parameter
    router.replace(`${pathname}?${params.toString()}`, { scroll: false }); //routing the page based on set parameter. {scroll: false} is optional
  }

  return (
    <div className="border border-primary-800 flex">

      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>

      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>

      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>

      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
    return (
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${
          filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''
        }`}
        onClick={() => handleFilter(filter)}
        >{ children}</button>
    );
  
}

export default Filter;
