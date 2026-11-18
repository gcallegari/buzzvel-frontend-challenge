
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  question: z
    .string()
    .trim()
    .min(10, "Please enter at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      question: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // TODO: Integrate with a real API endpoint.
    // Do not log or transmit personal data until an endpoint exists.
    void data;

    setIsSubmitted(false);
    reset();
  };

  const inputStyles =
    "mt-2 w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/45 focus:border-primary focus:ring-2 focus:ring-primary/15";

  return (
    <div className="rounded-xl border border-border bg-white p-5 shadow-sm md:p-8">
      <h3 className="text-lg font-bold text-foreground">
        Contact us
      </h3>

      <p className="mt-2 text-xs text-foreground/60">
        <span className="hidden md:inline">
          Fill out the fields and we will get in touch.
        </span>
        <span className="md:hidden">
          Preencha os campos e entraremos em contato.
        </span>
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mt-6 flex flex-col gap-5"
      >
        {/* Full name */}
        <div>
          <label
            htmlFor="contact-name"
            className="text-xs font-semibold"
          >
            <span className="hidden md:inline">Full name</span>
            <span className="md:hidden">Nome completo</span>
          </label>

          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={
              errors.name ? "contact-name-error" : undefined
            }
            className={inputStyles}
            {...register("name")}
          />

          {errors.name && (
            <p
              id="contact-name-error"
              role="alert"
              className="mt-1 text-xs text-red-600"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="text-xs font-semibold"
          >
            <span className="hidden md:inline">Email</span>
            <span className="md:hidden">E-mail</span>
          </label>

          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="youremail@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={
              errors.email ? "contact-email-error" : undefined
            }
            className={inputStyles}
            {...register("email")}
          />

          {errors.email && (
            <p
              id="contact-email-error"
              role="alert"
              className="mt-1 text-xs text-red-600"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Question */}
        <div>
          <label
            htmlFor="contact-question"
            className="text-xs font-semibold"
          >
            <span className="hidden md:inline">
              Your question
            </span>
            <span className="md:hidden">Sua dúvida</span>
          </label>

          <textarea
            id="contact-question"
            rows={4}
            placeholder="Tell us how we can help..."
            aria-invalid={!!errors.question}
            aria-describedby={
              errors.question
                ? "contact-question-error"
                : undefined
            }
            className={`${inputStyles} resize-none`}
            {...register("question")}
          />

          {errors.question && (
            <p
              id="contact-question-error"
              role="alert"
              className="mt-1 text-xs text-red-600"
            >
              {errors.question.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex min-h-11 w-full items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="hidden md:inline">
            Send message
          </span>
          <span className="md:hidden">
            Enviar mensagem
          </span>
        </button>

        {isSubmitted && (
          <p role="status" className="text-sm text-primary">
            Message submitted.
          </p>
        )}
      </form>
    </div>
  );
}
