function WatchedMoviesList() {
  return (
    <div className="flex flex-col bg-stone-700 lg:rounded-lg">
      <div className="bg-stone-500 px-3 py-2 lg:rounded-t-lg">
        <h2 className="font-bold uppercase text-stone-100">
          movies you watched
        </h2>
        <div className="flex gap-1">
          <span>#️⃣ {}</span>
          <span>⭐️ {}</span>
          <span>🌟 {}</span>
          <span>⌛️ {}</span>
        </div>
      </div>
      <ul className="overflow-y-auto">WatchedMoviesList</ul>
    </div>
  );
}

export default WatchedMoviesList;
