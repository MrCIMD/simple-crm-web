export const ERROR_MESSAGES: { [key: string]: (...args: any) => string } = {
  required: () => `Por favor, completa este campo.`,
  email: () => `Por favor, introduce una dirección de correo electrónico válida.`,
  min: (requirement: string) => `El valor debe ser mayor a ${requirement}.`,
  max: (requirement: string) => `El valor debe ser menor a ${requirement}.`,
  minLength: (requirement: string) => `El valor debe tener al menos ${requirement} caracteres.`,
  maxLength: (requirement: string) => `El valor no puede tener más de ${requirement} caracteres.`,
};
