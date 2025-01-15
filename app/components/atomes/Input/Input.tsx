import classNames from "classnames";
import { InputProps } from "./InputProps";
import { Size } from "../../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "textbox-xs",
  small: "textbox-sm",
  normal: "textbox-md",
  large: "textbox-lg",
};

export const Input: React.FC<InputProps> = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  variant = "ghost",
  type = "text",
  className,
  size = "normal",
  ...rest
}: InputProps) => {
  return (
    <div className="w-full">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classNames(
          "textbox",
          "w-full",
          { [`textbox-${variant}`]: variant },
          { [`${sizeClasses[size]}`]: size },
          className
        )}
      />
    </div>
  );
};
