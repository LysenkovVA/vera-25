import z from "zod";

export const ControlParameterValueZSchema = z.object({
  id: z.string().cuid().optional(),
  name: z.string({
    required_error: "Название значения контрольного параметра не указано",
    invalid_type_error:
      "Название значения контрольного параметра должно быть строкой",
  }),
  position: z
    .number({
      required_error: "Позиция значения контрольного параметра не указана",
      invalid_type_error:
        "Позиция значения контрольного параметра должно быть числом",
    })
    .positive({
      message: "Позиция значения контрольного параметра должна быть >0",
    }),
  notes: z
    .string({
      invalid_type_error:
        "Примечания значения контрольного параметра должны быть строкой",
    })
    .optional()
    .nullable(),
});
