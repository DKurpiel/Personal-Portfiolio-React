import React from 'react'
import './award.css'

const Award = () => {
    return (
        <div className="award__container d-flex align-items-center flex-wrap justify-content-between">

            <div className="award__item">
                <AwardItem
                    year='2019'
                    title="Best Frontend Developer"
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sapiente.'
                />
            </div>
            <div className="award__item">
                <AwardItem
                    year='2020'
                    title="Best Frontend Developer"
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sapiente.'
                />
            </div>
            <div className="award__item">
                <AwardItem
                    year='2021'
                    title="Best Frontend Developer"
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sapiente.'
                />
            </div>
            <div className="award__item">
                <AwardItem
                    year='2022'
                    title="Best Frontend Developer"
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sapiente.'
                />
            </div>

        </div>
    );
};

const AwardItem = ({ year, title, text }) => {
    return (
        <div className="single__award">
            <div className="award__year">{year}</div>
            <h6 className="award__title"> {title} - {" "}
                <span>{text}</span>
            </h6>
        </div>
    )
}

export default Award;