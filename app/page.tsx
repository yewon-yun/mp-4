"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Artworks from "./components/Artworks";
import type { Artwork } from "./type/Artworks";
import styled from "styled-components";

const ArtDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 3%;
    background-color: white;

    img {
        max-width: 90%;
        max-height: 75vh;
        object-fit: contain;
    }
`;

export default function Home() {
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

            setData(
                data.filter((art) => art.primaryimageurl).slice(15, 16)
            );
        }

        fetchData().catch(() => setError("Could not load artwork."));
    }, []);

    return (
        <ArtDiv>
            {error ? <p>{error}</p> : null}
            {data.map((art) =>
                <img key={art.id} src={art.primaryimageurl || ""} alt={art.title || "Artwork"}/>
            )}
        </ArtDiv>
    );
}