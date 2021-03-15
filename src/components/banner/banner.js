import React, { Component } from 'react';



function CustomArrow(props) {
    const { className, onClick, srcImage } = props;
    return (
        <div className={className} onClick={onClick}>
            <img src={srcImage} alt="Arrow" />
        </div>
    )
}
class banner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            banners: [
                {
                    title: "#LocalPride",
                    img: Banner1,
                },
                {
                    title: "Casual",
                    img: banner2,
                },
                {
                    title: "Sport",
                    img: banner3,
                },
                {
                    title: "Vintage",
                    img: banner3

                }
            ]
        }
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            centerMode: true,
            speed: 500,
            slideToShow: 2,
            nextArrow: <CustomArrow srcImage={RightArrow} className="cs-arrow" />,
            prevArrow: <CustomArrow srcImage={LeftArrow} className="cs-arrow" />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slideToShow: 2,
                        centerMode: false,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slideToShow: 1,
                        centerMode: false,
                    }
                }
            ]
        }
        return (
            <section className="mb-5">
                <Slider {...settings} className="cs-banner-section">
                    {this.state.banners.map((banner, index) => {
                        return (
                            <div key={index}>
                                <div
                                    className="cs-carousel-item"
                                    style={{ backgroundImage: `url(${banner.img})` }}
                                >
                                    <span>{banner.title}</span>
                                </div>

                            </div>
                        )
                    })}
                    <div>

                    </div>
                </Slider>
            </section>
        );
    }
}

export default banner;