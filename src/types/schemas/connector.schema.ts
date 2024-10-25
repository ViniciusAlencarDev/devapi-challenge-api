import * as Yup from "yup";

export const createConnectorSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long"),
  type: Yup.string()
    .required("Type is required")
    .oneOf(["REST", "DB", "SOAP"], "Type must be one of: REST, DB, SOAP"),
  privacy: Yup.string()
    .required("Privacy is required")
    .oneOf(["PUBLIC", "PRIVATE"], "Privacy must be either PUBLIC or PRIVATE"),
  baseUrl: Yup.string()
    .required("Base URL is required")
    .url("Base URL must be a valid URL"),
  logoUrl: Yup.string()
    .required("Logo URL is required")
    .url("Logo URL must be a valid URL"),
  category: Yup.string().required("Category is required"),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters long"),
});

export const filterConnectorSchema = Yup.object().shape({
  name: Yup.string()
    .optional()
    .min(2, "Name must be at least 2 characters long"),
  type: Yup.string()
    .optional()
    .oneOf(["REST", "DB", "SOAP"], "Type must be one of: REST, DB, SOAP"),
  privacy: Yup.string()
    .optional()
    .oneOf(["PUBLIC", "PRIVATE"], "Privacy must be either PUBLIC or PRIVATE"),
  category: Yup.string().optional(),
});

export const updateConnectorSchema = Yup.object().shape({
  name: Yup.string()
    .optional()
    .min(2, "Name must be at least 2 characters long"),
  type: Yup.string()
    .optional()
    .oneOf(["REST", "BD", "SOAP"], "Type must be one of: REST, BD, SOAP"),
  privacy: Yup.string()
    .optional()
    .oneOf(["PUBLIC", "PRIVATE"], "Privacy must be either PUBLIC or PRIVATE"),
  baseUrl: Yup.string().optional().url("Base URL must be a valid URL"),
  logoUrl: Yup.string().optional().url("Logo URL must be a valid URL"),
  category: Yup.string().optional(),
  description: Yup.string()
    .optional()
    .min(10, "Description must be at least 10 characters long"),
  status: Yup.string()
    .optional()
    .oneOf(["ACTIVE", "INACTIVE"], "Status must be either ACTIVE or INACTIVE"),
});
