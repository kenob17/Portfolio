import React from "react";
import image from "../images/contact.jpg";

export default function Contact() {
  return (
    <section className="h-screen">
      {/* Wrapper */}
      <div>
        {/* Image */}
        <div>
          <img src={image} />
        </div>

        {/* Form */}
        <div>
          <p>Get in touch with me!</p>
          <form></form>
        </div>
      </div>
    </section>
  );
}
