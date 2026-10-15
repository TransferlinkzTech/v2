import type { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  // Sits at the right-hand end of the label row
  accessory?: ReactNode;
  // Shown under the control; also mark the control aria-invalid and point its
  // aria-describedby at `${htmlFor}-error`
  error?: string;
  // Space between the label row and the control
  gapClass?: string;
  className?: string;
  children: ReactNode;
};

export function FormField({
  label,
  htmlFor,
  accessory,
  error,
  gapClass = "gap-[5px]",
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={`flex flex-col ${gapClass} ${className ?? ""}`}>
      <div className="flex items-center justify-between">
        <label htmlFor={htmlFor} className="text-xs leading-4 text-navy">
          {label}
        </label>
        {accessory}
      </div>
      {children}
      {error ? (
        <p
          id={`${htmlFor}-error`}
          role="alert"
          className="text-xs leading-4 text-[#d92d20]"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
