import { FC, ReactNode, useId } from "react";

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  helperText?: ReactNode;
  icon?: ReactNode;
  validation?: any;
}
const TextField: FC<TextfieldProps> = ({
  label,
  helperText,
  icon,
  validation,
  ...restProps
}) => {
  const id = useId();
  return (
    <div className="mx-2 mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 ml-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}  
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5  pointer-events-none ">
            {icon}
          </div>
        )}
        <input
          type="text"
          className="bg-gray-100 border border-gray-200 dark:text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-3  dark:placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id={id}
          {...restProps}
          {...validation}
        ></input>
      </div>
      {helperText && (
        <p className=" mb-1 ml-2 text-xs font-medium text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default TextField;
