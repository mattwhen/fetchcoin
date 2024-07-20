import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Intro from "./components/Intro/Intro";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import Mission from "./components/Mission/Mission";
import Contact from "./components/Contact/Contact";

const App = () => {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [searchBarValue, setSearchBarValue] = useState("");

	const apiKey = process.env.REACT_APP_KEY;
	const url = `https://openapiv1.coinstats.app/coins?page=1&limit=1000`;

	useEffect(() => {
		const fetchData = () => {
			const options = {
				method: "GET",
				headers: new Headers({
					accept: "application/json",
					"Accept-Encoding": "br",
					"Cache-Control": "max-age=31536000", // Cache data for one year.
					"X-API-KEY": apiKey,
				}),
			};

			try {
				// Render data initially.
				fetch(url, options)
					.then((response) => response.json())
					.then((json) => {
						setData(json.result);
						setLoading(false);
					})
					.catch((error) => console.error(error));

				// Update the data in the table every 10 seconds.
				const intervalData = setInterval(() => {
					fetch(url, options)
						.then((response) => response.json())
						.then((json) => {
							setData(json.result);
						})
						.catch((error) => console.error(error));
				}, 10000);

				return () => clearInterval(intervalData);
			} catch (error) {
				console.error("Error fetching data for Table component", error);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<Nav />
			<Intro />
			<Search
				value={searchBarValue}
				setFilteredData={setFilteredData}
				filteredData={filteredData}
				searchBarValue={searchBarValue}
				setSearchBarValue={setSearchBarValue}
				data={data}
			/>
			<Table
				data={data}
				setData={setData}
				loading={loading}
				setLoading={setLoading}
				page={page}
				setPage={setPage}
			/>
			<Mission />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
