import z from "zod";

export const ControlParameterZSchema = z.object({
  id: z.string().cuid().optional(),
  name: z.string({
    required_error: "Название контрольного параметра не указано",
    invalid_type_error: "Название контрольного параметра должно быть строкой",
  }),
  position: z
    .number({
      required_error: "Позиция контрольного параметра не указана",
      invalid_type_error: "Позиция контрольного параметра должно быть числом",
    })
    .positive({
      message: "Позиция контрольного параметра должна быть >0",
    }),
  notes: z
    .string({
      invalid_type_error: "Примечания должны быть строкой",
    })
    .optional(),
});
