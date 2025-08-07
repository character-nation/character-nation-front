type InputProps = {
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  className?: string;
  label?: string;
  error?: string;
  fullWidth?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  value,
  defaultValue,
  onChange,
  type = "text",
  name,
  placeholder,
  disabled,
  required,
  readOnly,
  autoFocus,
  maxLength,
  className = "",
  label,
  error,
  fullWidth,
  ...rest
}: InputProps) => {
  const baseClasses = `
    h-12 px-[10px] bg-gray-50 border border-gray-100 rounded-[6px] transition-colors duration-200
    hover:bg-white hover:border-gray-200
    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
    disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50
    ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300"}
    ${fullWidth ? "w-full" : ""}
  `.trim();

  return (
    <div className={`${fullWidth ? "w-full" : ""}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-800 mb-2">
          {label}
          {required && <span className="text-green-500 ml-1">*</span>}
        </label>
      )}
      <input
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        autoFocus={autoFocus}
        maxLength={maxLength}
        className={`${baseClasses} ${className}`}
        {...rest}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};