import React from "react";
import { useQuery } from "react-query";
import Loading from "../../sharedComponent/Loading";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Autoplay } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import quoteSignRight from "../../assets/reviews/quote-sign-right.png";
import quoteSignleft from "../../assets/reviews/quote-sign-left.png";
// import Swiper and modules styles

const Reviews = () => {
    const {
        data: reviews,
        isLoading,
        refetch,
    } = useQuery("reviews", () =>
        fetch("http://localhost:5000/reviews").then((res) => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className="my-28 px-12 text-center">
            <h2 className="text-4xl font-semibold mb-14 mt-5">
                What Our Customer Say!!
            </h2>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {reviews.map((review, index) => (
                        <div className="px-5 md:mx-5 ">
                            <SwiperSlide>
                                <div className="mb-9 mt-4">
                                    <div class="avatar">
                                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={review.img} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-blue-800">
                                            {review.name}
                                        </p>
                                    </div>
                                    <p className="italic">
                                        <img
                                            className="inline-block pr-4"
                                            src={quoteSignleft}
                                            alt=""
                                        />
                                        {review.review}
                                        <img
                                            className="inline-block pl-4"
                                            src={quoteSignRight}
                                            alt=""
                                        />
                                    </p>
                                    <p>
                                        {[
                                            ...Array(
                                                parseInt(review.rating)
                                            ).map((start) => (
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                ></FontAwesomeIcon>
                                            )),
                                        ]}{" "}
                                    </p>
                                </div>
                            </SwiperSlide>
                        </div>
                    ))}

                    {/* <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                  <SwiperSlide>Slide 5</SwiperSlide>
                  <SwiperSlide>Slide 6</SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;
