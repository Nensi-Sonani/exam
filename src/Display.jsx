import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxaction } from "./Redux/Action";

const Display = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("")
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    useEffect(() => {
        // Dispatch the redux action to fetch data
        dispatch(reduxaction());
    }, [dispatch]);

    useEffect(() => {
        // Update the local state with data from Redux store
        setData(selector.isSuccess);
    }, [selector.isSuccess]);

    const filter = data.filter((item) => {
        return (
            item.title.toLowerCase().includes(search.toLowerCase())
        )
    })

    return (
        <div>
            <SearchInput search={search} setSearch={setSearch} />
            {data.map((e, index) => (
                <div key={index}>
                    <p>
                        {e.title}
                    </p>
                </div>
            ))}
        </div>
    );
};

const SearchInput = ({ search, setSearch }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search by name, email, or phone number"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}
export default Display;
