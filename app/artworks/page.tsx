"use client";

import { useEffect, useState } from "react";
import Artworks from "../components/Artworks";
import type { Artwork } from "../type/Artworks";

export default function ArtworksPage() {
    const [data, setData] = useState<Artwork[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/getArtworks");

            if (!response.ok) {
                setError("Could not load artwork.");
                return;
            }

            const data: Artwork[] = await response.json();
            setData(data.filter((art) => art.primaryimageurl));
        }

        fetchData().then(()=>console.log("yay"))
            .catch((e)=>console.log("This error occurred: "+e))
        }, []);

    return (
        <main>
            <h1>Artwork Collection</h1>
            <Artworks data={data} />
        </main>
    );
}