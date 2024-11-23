import { useEffect, useState } from "react";
import axios from "axios";
import { HeroCards } from "./HeroCards";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

// Define the types for the form data and errors
interface FormData {
  name: string;
  email: string;
  message: string;
  phone: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  form?: string;
}

export const ContactHero = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // Loading state

  const validateForm = (): Errors => {
    const errors: Errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Valid email is required.";
    }
    if (!formData.phone || !/^\d{10,15}$/.test(formData.phone)) {
      errors.phone = "Valid phone number is required (10-15 digits).";
    }
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await axios.post("https://example.com/api/contact", formData);
        if (response.status === 200) {
          setSuccessMessage("Your message has been sent successfully.");
          setFormData({ name: "", email: "", message: "", phone: "" });
          setErrors({});
        }
      } catch (error) {
        console.error("Error submitting contact form:", error);
        setErrors({ form: "Failed to send your message. Please try again later." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll-based logic if needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Contact{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Us
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          We're available 24/7. Get in touch with us.
        </p>
        <div className="container text-center mt-8 text-muted-foreground p-4">
          <p>Email: <a href="mailto:support@cyanase.com">support@cyanase.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/256705640852">+256705640852</a></p>
        </div>
        <h4 className="text-center text-md font-bold p-4">Fill in the form</h4>
        <form
          className="flex flex-col w-full md:w-6/12 lg:w-4/12 mx-auto gap-4"
          onSubmit={handleSubmit}
        >
          <Input
            name="name"
            placeholder="Enter your name"
            className="bg-muted/50 dark:bg-muted/80"
            value={formData.name}
            onChange={handleInputChange}
            aria-label="name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <Input
            name="email"
            placeholder="Enter email address"
            className="bg-muted/50 dark:bg-muted/80"
            value={formData.email}
            onChange={handleInputChange}
            aria-label="email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <Input
            name="phone"
            placeholder="Enter phone number"
            className="bg-muted/50 dark:bg-muted/80"
            value={formData.phone}
            onChange={handleInputChange}
            aria-label="phone"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <textarea
            name="message"
            placeholder="Write your message"
            className="bg-muted/50 dark:bg-muted/80 p-3 rounded-md"
            value={formData.message}
            onChange={handleInputChange}
            aria-label="message"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <Button className="w-full">
            {isSubmitting ? "Submitting..." : "Send Message"}
          </Button>
          {errors.form && <p className="text-red-500 text-sm mt-2">{errors.form}</p>}
          {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
        </form>
      </div>

      {/* Hero cards section */}
      <div className="z-10">
        <HeroCards />
      </div>
    </section>
  );
};