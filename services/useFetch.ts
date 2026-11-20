import { useEffect, useState } from 'react';

const useFetch = (fetchFunction: () => Promise<any>) => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const result = await fetchFunction();
            setData(result);

        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data,
        loading,
        error,
        refetch: fetchData,
    };
};

export default useFetch;