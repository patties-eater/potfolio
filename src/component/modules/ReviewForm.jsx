import { useState } from "react";
import { supabase } from "../../supabaseClient";

export function ReviewForm() {
  const [feedbackType, setFeedbackType] = useState("");
  const [feedback, setFeedback] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Submitting...");

    const { error } = await supabase.from("reviews").insert([
      {
        feedback_type: feedbackType,
        message: feedback, // fixed mapping
        first_name: firstName,
        last_name: lastName,
        email,
        post,
      },
    ]);

    if (error) {
      console.error("Supabase Error:", error.message);
      setStatus(`❌ Failed to submit feedback 😢 — ${error.message}`);
    } else {
      setStatus("✅ Feedback submitted successfully!");
      // Clear inputs
      setFeedbackType("");
      setFeedback("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPost("");
      // Notify list
      window.dispatchEvent(new CustomEvent("reviewAdded"));
    }

    setLoading(false);
  };

  return (
    <div className="reviews px-6 py-8 bg-white text-black rounded-xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-center">Feedback Form</h2>
      <p className="text-center text-gray-600 mb-6">
        We would love to hear your thoughts, suggestions, concerns or problems with anything so we can improve!
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Feedback Type */}
        <div>
          <label className="block font-semibold mb-2">Feedback Type</label>
          <div className="flex space-x-6">
            {["Comments", "Suggestions", "Questions"].map((type) => (
              <label key={type} className="inline-flex items-center space-x-2">
                <input
                  type="radio"
                  name="feedbackType"
                  value={type}
                  checked={feedbackType === type}
                  onChange={(e) => setFeedbackType(e.target.value)}
                  required
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Feedback Text */}
        <div>
          <label className="block font-semibold mb-2">
            Describe Your Feedback: <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full p-3 border rounded"
            placeholder="Enter your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">First Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-3 border rounded"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Last Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full p-3 border rounded"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Email and Post Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
          <div>
            <label className="block font-semibold mb-1">E-mail <span className="text-red-500">*</span></label>
            <input
              type="email"
              className="w-full p-3 border rounded"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Post</label>
            <input
              type="text"
              className="w-full p-3 border rounded"
              placeholder="Your position or title"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {/* Status Message */}
        {status && <p className="text-sm mt-2 text-center">{status}</p>}
      </form>
    </div>
  );
}
