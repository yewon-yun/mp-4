"use client";

import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
    background-color: white;
    color: black;
    padding: 2%;
    border-bottom: 2px solid black;
`;

const LinksDiv = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 10px;

    a {
        background-color: white;
        color: black;
        border: 2px solid black;
        border-radius: 8px;
        padding: 10px 20px;
        text-decoration: none;
    }

    a:hover {
        background-color: lightsteelblue;
    }
`;

export default function Header() {
    return (
        <HeaderDiv>
            <h1>Harvard Art Gallery</h1>
            <LinksDiv>
                <Link href="/">Home</Link>
                <Link href="/artworks">Browse artwork</Link>
            </LinksDiv>
        </HeaderDiv>
    );
}