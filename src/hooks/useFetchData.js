import axios from "axios";
import { useState, useEffect } from "react";

const useFetchData = (url) => {

    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const resp = await axios.get(url)
                const data = resp.data;
                setData(data)
            } catch (error) {
                setError(error)
                console.log(error);
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[url])
    return {data, loading, error}
}

export default useFetchData