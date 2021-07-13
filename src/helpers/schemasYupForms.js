import * as yup from "yup";

export const schemaCreateReviewForm = yup.object().shape({
  title: yup
    .string()
    .min(10, "El titulo debe tener al menos 10 caracteres")
    .max(50, "El titulo debe tener como máximo 50 caracteres")
    .required("El titulo es obligatorio"),
  description: yup
    .string()
    .min(30, "La descripción debe tener al menos 30 caracteres")
    .max(500, "La descripción debe tener como máximo 500 caracteres")
    .required("La descripción es obligatoria"),
  category: yup
    .array()
    .min(1, "Debes seleccionar al menos una categoría")
    .max(5, "Debes seleccionar como máximo 5 categorías")
    .required("La elección de categoria es obligatoria")
});

export const schemaLoginForm = yup.object().shape({
  email: yup
    .string()
    .email("Debe ingresar un correo válido")
    .required("El correo es obligatorio"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
});

export const schemaRegisterForm = yup.object().shape({
  userName: yup
    .string()
    .min(6, "El nombre de usuario debe tener al menos 6 caracteres")
    .max(20, "El nombre de usuario debe tener como máximo 20 caracteres")
    .required("El nombre de usuario es obligatorio"),
  email: yup
    .string()
    .email("Debe ingresar un correo válido")
    .required("El correo es obligatorio"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Las contraseñas ingresadas no coinciden")
});