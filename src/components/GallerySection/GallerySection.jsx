    import React, { useState, useEffect } from "react";
    import { galleryData } from "./galleryData";
    import GalleryItem from "./GalleryItem";
    import './Gallery.css'
    import TopSections from "../TopSections/TopSections";


    const GallerySection = () => {

        const [activeFilter, setActiveFilter] = useState("all");
        const [filteredItems, setfilteredItems] = useState(galleryData);

        useEffect(() => {
            if (activeFilter === "all") {
                setfilteredItems(galleryData);
            } else {
                const filtered = galleryData.filter(item => item.category === activeFilter);

                setfilteredItems(filtered);
            }
        }, [activeFilter]);

        const handleFilterClick = (filter) => {
            setActiveFilter(filter)
        }



        return (
            <div className="gallery-section">
                <TopSections text={'Our Gallery'} title={'Our Rooms Gallery'} subtitle={'Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.'}  className="center"/>
                <div className="gallery-filters filter-container">
                    <button className="filter-btn" onClick={() => handleFilterClick("all")} >All</button>
                    <button className="filter-btn" onClick={() => handleFilterClick("classrooms")} >Classrooms</button>
                    <button className="filter-btn" onClick={() => handleFilterClick("library")} >Library</button>
                    <button className="filter-btn" onClick={() => handleFilterClick("scienceLab")} >Science Lab</button>
                    <button className="filter-btn" onClick={() => handleFilterClick("computerLab")} >Computer Lab</button>
                    <button className="filter-btn" onClick={() => handleFilterClick("garden")} >Garden and Nature Area</button>
                </div>
                <div className="gallery-items">
                    {filteredItems.map((item, index) => (
                        <GalleryItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            images={item.images}
                        />
                    ))}
                </div>
            </div>
        )
    }

    export default GallerySection
