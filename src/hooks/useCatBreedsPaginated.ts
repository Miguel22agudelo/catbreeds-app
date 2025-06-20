import { useCallback, useEffect, useState } from 'react';

const API_KEY = 'live_99Qe4Ppj34NdplyLW67xCV7Ds0oSLKGgcWWYnSzMJY9C0QOu0HUR4azYxWkyW2nr';
const API_URL = 'https://api.thecatapi.com/v1/breeds';

export const useCatBreedsPaginated = () => {
    const [breeds, setBreeds] = useState<any[]>([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const fetchBreeds = useCallback(async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}?limit=10&page=${page}`, {
                headers: { 'x-api-key': API_KEY },
            });
            const data = await response.json();
            setBreeds((prev) => {
                const ids = new Set(prev.map((item) => item.id));
                const unique = data.filter((item: any) => !ids.has(item.id));
                return [...prev, ...unique];
            });
            setHasMore(data.length > 0);
            setPage((prev) => prev + 1);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [page, loading, hasMore]);

    useEffect(() => {
        fetchBreeds();
    }, []);

    return {
        breeds,
        loading,
        fetchMore: fetchBreeds,
    };
};
