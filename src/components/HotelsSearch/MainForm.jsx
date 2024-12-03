import { useState } from "react";
import { formItems } from "./formItems";
import { validateField, validationRules } from "./validation";
import Tooltip from "@/shared/UI/Tooltip";

const MainForm = () => {
  const [formData, setFormData] = useState({
    destination: "",
    checkin: "",
    checkout: "",
    adults: "",
    children: "",
  });
  const [errors, setErrors] = useState({});
  const [errorVisible, setErrorVisible] = useState({});
  const [tooltipVisible, setTooltipVisible] = useState({});

  const createToggleFunction = (stateSetter, condition) => (id) => {
    stateSetter((prevState) => ({ ...prevState, [id]: condition }));
  };

  const showError = createToggleFunction(setErrorVisible, true);
  const hideError = createToggleFunction(setErrorVisible, false);
  const showTooltip = createToggleFunction(setTooltipVisible, true);
  const hideTooltip = createToggleFunction(setTooltipVisible, false);

  function handleChange(e) {
    const { id, value } = e.target;
    hideError(id);
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  function handleBlur(e) {
    const { id, value } = e.target;
    if (value.trim() !== "" || value.length > 0) {
      const error = validateField(id, value, formData);
      if (error) {
        setErrors((prevErrors) => ({ ...prevErrors, [id]: error }));
        showError(id);
      } else {
        setErrors((prevErrors) => {
          const rest = { ...prevErrors };
          delete rest[id];
          return rest;
        });
        hideError(id);
      }
    }
    hideTooltip(id);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    for (const field in validationRules) {
      const value = formData[field];
      const error = validateField(field, value, formData);
      if (error) {
        newErrors[field] = error;
      }
    }

    setErrors(newErrors);

    const errorIds = Object.keys(newErrors);
    if (errorIds.length > 0) {
      errorIds.forEach((id) => showError(id));
      const firstErrorField = document.getElementById(errorIds[0]);
      if (firstErrorField) {
        firstErrorField.focus();
        showTooltip(errorIds[0]);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid max-w-5xl grid-cols-6 gap-5 font-nunito xl:max-w-full xl:grid-cols-12">
        {formItems.map(({ id, label, gridClass, ...rest }) => {
          return (
            <div key={id} className={gridClass}>
              <div className="relative">
                <label htmlFor={id} className="ml-2.5">
                  <span className="text-white">{label}</span>
                </label>
                <input
                  id={id}
                  value={formData[id]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onMouseEnter={() => showTooltip([id])}
                  onMouseLeave={() => hideTooltip([id])}
                  className={`main-form-input ${errorVisible[id] && errors[id] ? "border-red-600/70 focus:border-red-600/80" : "focus:border-zinc-800"}`}
                  {...rest}
                ></input>

                {tooltipVisible[id] && errors[id] && (
                  <Tooltip className="tooltip-bottom tooltip-dark mt-1.5 px-2.5 py-2 text-sm">
                    {errors[id]}
                  </Tooltip>
                )}
              </div>
            </div>
          );
        })}
        <div className="col-span-6 flex flex-grow items-end xl:col-span-1">
          <button className="w-full rounded-lg bg-zinc-300 py-3">Найти</button>
        </div>
      </div>
    </form>
  );
};

export default MainForm;
