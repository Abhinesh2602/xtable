import { useState } from "react";
import "./App.css";

function App() {
  const tableObj = [
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];
  const [sortedTableObj, setSortedTableObj] = useState(tableObj);

  const handleSort = () => {
    const sortedData = [...sortedTableObj].sort((a, b) => {
      return Date.parse(b.date) - Date.parse(a.date);
    });
    setSortedTableObj(sortedData);
  };

  const handleSortViews = () => {
    const sortedViews = [...sortedTableObj].sort((a, b) => {
      return b.views - a.views;
    });
    setSortedTableObj(sortedViews);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={handleSort}>Sort by Date</button>
      <button onClick={handleSortViews}>Sort by Views</button>
      <table>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        {sortedTableObj.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.views}</td>
            <td>{item.article}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
