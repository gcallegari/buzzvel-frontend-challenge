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
    name: z.string().trim().min(2, t("validation.name")),
    email: z.email(t("validation.email")),
    question: z.string().trim().min(10, t("validation.question")),
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
    formState: { errors, isSubmitting, isValid },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(createContactSchema(t)),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      question: "",
    },
  });

  const onSubmit = () => {
    // TODO: Integrate with a real API endpoint.
    setIsUnavailable(true);
  };

  const inputStyles =
    "mt-2 h-12 w-full rounded-lg border border-border bg-background-light-yellow px-4 py-3 font-sans text-sm font-normal leading-6 tracking-normal text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-primary focus:ring-2 focus:ring-primary/15";

  const labelStyles =
    "font-sans text-sm font-bold leading-6 tracking-normal text-text-primary";

  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl border border-border bg-background-white p-5 shadow-[0_12px_32px_0_#171B2C0A] md:min-h-149 md:p-10">
      {/* Form heading */}
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-xl font-bold leading-8 tracking-normal text-text-primary">
          {t("title")}
        </h3>

        <p className="font-sans text-sm font-normal leading-6 tracking-normal text-text-secondary">
          {t("description")}
        </p>
      </div>

      {/* Form fields */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => setIsUnavailable(false)}
        noValidate
        className="flex flex-col gap-5"
      >
        {/* Full name */}
        <div>
          <label htmlFor="contact-name" className={labelStyles}>
            {t("name")}
          </label>

          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder={t("namePlaceholder")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
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
          <label htmlFor="contact-email" className={labelStyles}>
            {t("email")}
          </label>

          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder={t("emailPlaceholder")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
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
          <label htmlFor="contact-question" className={labelStyles}>
            {t("question")}
          </label>

          <textarea
            id="contact-question"
            rows={4}
            placeholder={t("questionPlaceholder")}
            aria-invalid={!!errors.question}
            aria-describedby={
              errors.question ? "contact-question-error" : undefined
            }
            className={`${inputStyles} h-30! px-4! py-3.5! resize-none`}
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
          disabled={!isValid || isSubmitting}
          className="flex min-h-11 w-full items-center justify-center rounded-md bg-primary px-5 font-sans text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-default disabled:opacity-60 disabled:hover:bg-primary"
        >
          {isSubmitting ? t("submitting") : t("submit")}
        </button>

        {/* Submission unavailable feedback */}
        {isUnavailable && (
          <p
            role="status"
            aria-live="polite"
            className="text-sm text-text-secondary"
          >
            {t("unavailable")}
          </p>
        )}
      </form>
    </div>
  );
}
