import styled from "styled-components";
import type { Artwork } from "../type/Artworks";

const AllDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: lightsteelblue;
`;

const SingleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: white;
    color: black;
    border: 3px solid black;
    border-radius: 10px;
    text-align: center;

    img {
        max-width: 100%;
        height: auto;
    }
`;

export default function Artworks(props: { data: Artwork[] }) {
    return (
        <AllDiv>
            {props.data.map((art) =>
                <SingleDiv key={art.id}>
                    <h2>{art.title || "Untitled"}</h2>
                    <img src={art.primaryimageurl || ""} alt={art.title || "Artwork"}/>
                    <p>Date: {art.dated}</p>
                    <p>Culture: {art.culture}</p>
                    <p>Medium: {art.medium}</p>
                    <p>{art.description}</p>
                </SingleDiv>
            )}
        </AllDiv>
    );
}