import H2 from "@/shared/UI/H2";
import ArticleCard from "@/components/Articles/ArticleCard";

const Articles = () => {
  return (
    <section className="mb-10">
      <div className="max-auto container w-full">
        <div className="mb-3">
          <H2>Вдохновитесь на свою следующую поездку</H2>
        </div>
        <div className="grid grid-cols-[repeat(1,_minmax(0,_25rem))] place-content-center gap-6 md:grid-cols-[repeat(2,_minmax(0,_25rem))] md:place-content-between lg:grid-cols-[repeat(3,_minmax(0,_25rem))]">
          <div className="h-64 w-full">
            <ArticleCard />
          </div>
          <div className="h-64 w-full">
            <ArticleCard />
          </div>
          <div className="h-64 w-full">
            <ArticleCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
