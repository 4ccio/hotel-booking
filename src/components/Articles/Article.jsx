const Article = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-md bg-article bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative flex h-full flex-col justify-end p-3 text-stone-100">
        <div className="mb-2 text-lg">Lorem ipsum dolor sit amet.</div>
        <div className="line-clamp-3 font-nunito text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
          maiores error delectus sint voluptatum praesentium a eveniet? Dolorum,
          a sunt!
        </div>
      </div>
    </div>
  );
};

export default Article;
