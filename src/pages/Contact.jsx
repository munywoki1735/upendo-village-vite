import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [captchaValue, setCaptchaValue] = useState(null);

  const onSubmit = (data) => {
    if (!captchaValue) {
      alert("Please verify you are human!");
      return;
    }
    console.log("Form submitted:", data);
    // You can now send this to your backend or email service
  };

  return (
    <div className="text-center px-4 py-12">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        We would love to hear from you. Whether you're looking to support our mission, volunteer, or learn more, we're here to help.
      </p>

      {/* Location, Phone, and Email Links */}
      <div className="space-y-6 text-lg text-gray-800 mb-12">
        <div className="flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-pink-600" />
          <a
            href="https://www.google.com/maps/place/ASN+Upendo+Village+Dispensary/@-0.7577079,36.4728212,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-700"
          >
            Naivasha, Kenya (View on Map)
          </a>
        </div>

        <div className="flex items-center justify-center gap-2">
          <FaPhoneAlt className="text-red-600" />
          <a href="tel:+254745607456" className="hover:underline text-blue-700">
            +254 745 607 456
          </a>
        </div>

        <div className="flex items-center justify-center gap-2">
          <FaEnvelope className="text-blue-600" />
          <a href="mailto:admin@asnupendvillage.com" className="hover:underline text-blue-700">
            admin@asnupendvillage.com
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto space-y-4 text-left"
      >
        <input
          type="text"
          placeholder="Full Name"
          {...register("name", { required: true })}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">Name is required</p>}

        <input
          type="email"
          placeholder="Email Address"
          {...register("email", { required: true })}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">Valid email is required</p>}

        <textarea
          placeholder="Your Message"
          {...register("message", { required: true })}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          rows="5"
        />
        {errors.message && <p className="text-red-500 text-sm">Message is required</p>}

        <ReCAPTCHA
          sitekey={SITE_KEY}
          onChange={(value) => setCaptchaValue(value)}
        />

        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 mt-4"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
