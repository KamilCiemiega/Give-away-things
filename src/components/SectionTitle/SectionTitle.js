import React from "react";

function SectionTitle(props) {
        return (
            <div className="steps flex">
                <span className="steps__title">
                    {props.children}
                </span>
                <span className="steps__decoration"></span>
            </div>
        );
};

export default SectionTitle;