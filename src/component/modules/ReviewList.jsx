import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DEFAULT_AVATAR = "/default-avatar.png";

export function ReviewList() {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setReviews(data);
    } else {
      console.error("Error fetching reviews:", error.message);
    }
  };

  useEffect(() => {
    fetchReviews();
    const listener = () => fetchReviews();
    window.addEventListener("reviewAdded", listener);
    return () => window.removeEventListener("reviewAdded", listener);
  }, []);

  return (
    <div className="reviews px-4 py-12 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-2">
        What <span className="text-blue-600">My Clients</span> Say
      </h2>
      <p className="text-gray-500 mb-8">Hear Directly From Other Satisfied Partners</p>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-left h-full">
              <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                “{review.feedback || review.message}”
              </p>
              <div className="flex items-center mt-6">
                <img
                  src={DEFAULT_AVATAR}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover mr-4 border"
                />
                <div>
                  <p className="font-semibold">{review.first_name} {review.last_name}</p>
                  <p className="text-sm text-gray-500">{review.post || "Position Unknown"}</p>
                  <p className="text-xs text-gray-400">{review.email}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
