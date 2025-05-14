import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import type { FormEvent } from 'react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_6zqdg3e',
        'template_k5h9inh',
        formRef.current,
        'UfaXkTg31EpKDnd2F'
      )
      .then(
        (result) => {
          alert('✅ Message envoyé avec succès !');
          console.log(result.text);
          formRef.current?.reset();
        },
        (error) => {
          alert('❌ Une erreur est survenue.');
          console.error(error.text);
        }
      );
  };

  return (
    <section className="bg-[#e6d9cc] py-16 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center relative w-fit mx-auto mb-40">
        <span className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-[#bcb8f4]" />
        Contact
      </h2>
      <div className="max-w-2xl mx-auto bg-white p-20 shadow-2xl">
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col space-y-6">
          <div>
            <label className="block font-medium mb-1">
              Name <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border-b border-black outline-none py-1 bg-transparent"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              E-mail <span className="text-blue-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border-b border-black outline-none py-1 bg-transparent"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Object</label>
            <input
              type="text"
              name="object"
              className="w-full border-b border-black outline-none py-1 bg-transparent"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows={3}
              required
              className="w-full border-b border-black outline-none py-1 bg-transparent resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="px-6 py-1 bg-[#bcb8f4] text-white rounded-full shadow-md hover:bg-[#a6a4f0] transition"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
