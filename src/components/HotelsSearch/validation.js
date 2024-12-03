export const validationRules = {
  destination: (value) =>
    value.trim() === "" ? "Укажите место назначения" : null,
  checkin: (value) => (value.trim() === "" ? "Укажите дату заезда" : null),
  checkout: (value, formData) => {
    if (value.trim() === "") {
      return "Укажите дату выезда";
    } else if (
      formData.checkin &&
      new Date(value) <= new Date(formData.checkin)
    ) {
      return "Дата выезда должна быть позже даты заезда";
    }
    return null;
  },
  adults: (value) => {
    if (value.trim() === "") {
      return "Укажите количество гостей";
    } else if (value <= 0) {
      return "Число взрослых должно быть больше 0";
    }
    return null;
  },
  children: () => null, // необязательное поле, валидация ограничена html атрибутами
};

export const validateField = (id, value, formData) => {
  const rule = validationRules[id];
  return rule ? rule(value, formData) : null;
};
