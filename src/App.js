import { useState, useEffect } from "react";
import HourlyForecast from "./dailyForecastChart";
import Search from "./search";
import Footer from "./Footer";
import QuickCity from "./QuickCity";

export default function App() {
  const [search, setSearch] = useState(null);
  const [quickCity, setQuickCity] = useState(null);

  useEffect(() => {
    setSearch(quickCity)
  }, [quickCity])
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-grow">
          <Search setSearch={setSearch} search={search} />
          <QuickCity setQuickCity={setQuickCity} />
          <HourlyForecast city={search} currentSearch={search} />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}
