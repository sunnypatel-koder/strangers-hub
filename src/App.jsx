import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import FilterSection from "./components/FilterSection";
import SearchBar from "./components/SearchBar";
import TopNotch from "./components/TopNotch";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?page=1&results=10`)
      .then((response) => {
        const extractedData = response.data.results;
        setUser(extractedData);
        console.log(extractedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearchByUser = (e) => {
    axios
      .get(`https://randomuser.me/api/?page=1&results=${e}`)
      .then((response) => {
        const extractedData = response.data.results;
        setUser(extractedData);
        console.log(extractedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <div className=" mx-auto  w-full max-w-[1300px] pt-10 sm:pt-20 mb-10 ">
        <div class="absolute top-0 left-0 w-full h-2 flex">
          <div class="h-[3px] bg-blue-500 flex-1"></div>
        </div>
        <TopNotch />
        <SearchBar handleSearchByUser={handleSearchByUser} />
        <div className=" flex">
          <FilterSection />
          <div className="flex s w-full flex-wrap pt-10 pr-1 gap-7">
            {user.map((item, index) => {
              return <Card key={index} userInfo={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
