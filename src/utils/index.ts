/* eslint-disable @typescript-eslint/no-explicit-any */
export const validateSchema = async (schema: any, data: any) => {
  try {
    await schema.validate(data);
    console.log("Validation successful!");
    return { success: true };
  } catch (error: any) {
    console.error(error.errors);
    return { success: false, errors: error.errors };
  }
};
