import { useState } from "react";

export function useFormValidation({ password }) {
  const [validate, setValidate] = useState();
  const isValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()[\]{}\-=+|;:'",.<>\\]).{8,}$/;
}
