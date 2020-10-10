import React from 'react';
import { BrowserContainer } from '../components/browse/browse.container';
import useContent from "../hooks/useContent";
import selectionFilter from "../utils/selectionFilter"

export default function BrowsePage() {
    const { series } = useContent("series")
    const { films } = useContent("films")
    const slides = selectionFilter({ series, films });
    return <BrowserContainer slides={slides} />
}
