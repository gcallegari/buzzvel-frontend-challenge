"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createContactSchema = (
  t: ReturnType<typeof useTranslations<"Contact.form">>,
) =>
  z.object({
    name: z
      .string()
      .trim()
      .min(2, t("validation.name")),

    email: z.email(t("validation.email")),

    question: z
      .string()
      .trim()
      .min(10, t("validation.question")),
  });

type ContactFormValues = {
  name: string;
  email: string;
  question: string;
};

export default function ContactForm() {
  const t = useTranslations("Contact.form");
  const [isUnavailable, setIsUnavailable] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(createContactSchema(t)),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      question: "",
    },
  });

  const onSubmit = (_data: ContactFormValues) => {
    // TODO: Integrate with a real API endpoint.
    // Do not transmit or log personal data until an endpoint exists.
    setIsUnavailable(true);
  };

  const inputStyles =
    "mt-2 w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/45 focus:border-primary focus:ring-2 focus:ring-primary/15";

  return (
    <div className="rounded-xl border border-border bg-white p-5 shadow-sm md:p-8">
      <h3 className="text-lg font-bold text-foreground">
        {t("title")}
      </h3>

      <p className="mt-2 text-xs text-foreground/60">
        {t("description")}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => setIsUnavailable(false)}
        noValidate
        className="mt-6 flex flex-col gap-5"
      >
        {/* Full name */}
        <div>
          <label
            htmlFor="contact-name"
            className="text-xs font-semibold"
          >
            {t("name")}
          </label>

          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder={t("namePlaceholder")}
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
            {t("email")}
          </label>

          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder={t("emailPlaceholder")}
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
            {t("question")}
          </label>

          <textarea
            id="contact-question"
            rows={4}
            placeholder={t("questionPlaceholder")}
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
          {isSubmitting ? t("submitting") : t("submit")}
        </button>

        {isUnavailable && (
          <p role="status" className="text-sm text-foreground/70">
            {t("unavailable")}
          </p>
        )}
      </form>
    </div>
  );
}