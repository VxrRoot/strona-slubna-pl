import { useState } from "react";
import Spinner from "./Spinner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    let valid = true;

    if (!formData.get("email")) {
      setErrors((prev) => {
        return { ...prev, email: "Wprowadź adres email" };
      });

      valid = false;
    }

    if (!formData.get("name")) {
      setErrors((prev) => {
        return { ...prev, name: "Wprowadź imię" };
      });
      valid = false;
    }

    if (!formData.get("message")) {
      setErrors((prev) => {
        return { ...prev, message: "Wprowadź wiadomość" };
      });
      valid = false;
    }

    if (!valid) {
      setLoading(false);
      return;
    }

    const response = await fetch("/api/mail", {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      window.location.href = "/thanks";
    }
  };

  return (
    <div className="flex-1 lg:order-1">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Imię*"
          id="name"
          name="name"
          // required
          className="bg-transparent border-b-2 border-primary outline-none py-2 placeholder:text-primary"
        />
        <span className="h-6 w-full mb-4 text-red-600">
          {errors.name && errors.name}
        </span>

        <input
          type="email"
          placeholder="Email*"
          id="email"
          name="email"
          // required
          className="bg-transparent border-b-2 border-primary outline-none py-2 placeholder:text-primary"
        />
        <span className="h-6 w-full mb-4 text-red-600">
          {errors.email && errors.email}
        </span>
        <input
          type="text"
          placeholder="Numer telefonu"
          id="phone"
          name="phone"
          className="bg-transparent  border-b-2 border-primary outline-none py-2 placeholder:text-primary"
        />
        <span className="h-6 w-full mb-4 text-red-600"></span>

        <textarea
          id="message"
          placeholder="Wiadomośc*"
          name="message"
          // required
          className="bg-transparent  border-b-2 border-primary outline-none py-2 placeholder:text-primary"
        />
        <span className="h-6 w-full mb-4 text-red-600">
          {errors.message && errors.message}
        </span>
        <button className="bg-primary text-white font-semibold py-3 w-40  px-12 ">
          {loading ? <Spinner /> : "Wyślij"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
