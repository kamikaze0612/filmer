type MovieItemProps = {
  year: string;
  title: string;
  poster: string;
};

function MovieItem({ year, title, poster }: MovieItemProps) {
  return (
    <li className="flex cursor-pointer gap-3 rounded-md bg-stone-700 drop-shadow-md">
      <img
        src={poster}
        alt={title}
        className="h-20 w-16 rounded-l-md bg-stone-200 object-cover object-center sm:h-24 sm:w-[72px] lg:h-[120px] lg:w-[90px]"
      />
      <div className="flex flex-col items-start justify-center gap-1">
        <h3 className="text-base font-semibold text-stone-200 sm:text-xl lg:text-2xl">
          {title}
        </h3>
        <p className="text-xs text-stone-400 sm:text-base lg:text-lg">
          Released: {year}
        </p>
      </div>
    </li>
  );
}

export default MovieItem;
