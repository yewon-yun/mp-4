"use client";

import Link from "next/link";
import styled from "styled-components";

export default function Header() {
    return (
        <div className="g-header">
            <h1>Harvard Art Museum</h1>
            <div className="g-links">
                <Link href="/">Home</Link>
                <Link href="/artworks">Browse artwork</Link>
            </div>
        </div>
    );
}