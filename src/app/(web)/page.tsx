import { Navbar } from "@/components/web/navigation/navbar";
import { Slider } from "@/components/web/navigation/slider";
import { Ads1, Ads2, Ads3 } from "@/components/ads/google-ads";
import { WeeklyCard } from "@/components/web/homepage/weekly-card";
import { getWeeklyAndPopularData } from "@/data/data";
import { TrendingQuizzes } from "@/components/web/etc/trending-quizzes";
import { TrendingImages } from "@/components/web/etc/trending-images";
import { CategoriesTabs } from "@/components/web/etc/categories";

const HomePage = async () => {
  const { data } = await getWeeklyAndPopularData();

  return (
    <>
      <Navbar />
      <Slider />
      <Ads1 />
      <WeeklyCard data={data} />
      <Ads2 />
      <TrendingQuizzes />
      <Ads3 />
      <TrendingImages />
      <CategoriesTabs />
    </>
  );
};

export default HomePage;
