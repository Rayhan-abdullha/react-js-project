const FilterButtons = () => {
  return (
    <section className="flex justify-between items-center mt-8 mb-3">
        <h1>Extension List</h1>
        <div className="flex space-x-2">
          <button className="p-1 px-2 rounded-full bg-slate-200 dark:bg-slate-800 text-[10px]">All</button>
          <button className="p-1 px-2 rounded-full bg-slate-200 dark:bg-slate-800 text-[10px]">Active</button>
          <button className="p-1 px-2 rounded-full bg-slate-200 dark:bg-slate-800 text-[10px]">Inactive</button>
        </div>
      </section>
  )
}

export default FilterButtons