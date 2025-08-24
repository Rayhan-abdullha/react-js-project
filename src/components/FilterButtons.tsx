type FilterButtonsProps = {
  filterFunc: (filter: string) => void;
}
const FilterButtons = ({ filterFunc }: FilterButtonsProps) => {
  const handleFilter = (filter: string) => {
    filterFunc(filter);
  }
  return (
    <section className="flex justify-between items-center mt-8 mb-3">
        <h1>Extension List</h1>
        <div className="flex space-x-2">
          <button onClick={() => handleFilter('all')} className="p-1 px-2 rounded-full bg-slate-200 dark:bg-slate-800 text-[10px]">All</button>
          <button onClick={() => handleFilter('active')} className="p-1 px-2 rounded-full bg-slate-200 dark:bg-slate-800 text-[10px]">Active</button>
          <button onClick={() => handleFilter('inactive')} className="p-1 px-2 rounded-full bg-slate-200 dark:bg-slate-800 text-[10px]">Inactive</button>
        </div>
      </section>
  )
}

export default FilterButtons