import z from "zod";

export const DocumentZSchema = z.object({
  id: z.string().cuid().optional(),
  name: z.string({
    required_error: "Название документа не указано",
    invalid_type_error: "Название документа должно быть строкой",
  }),
  number: z
    .string({
      invalid_type_error: "Номер документа должен быть строкой",
    })
    .optional(),
  date: z
    .string({
      invalid_type_error: "Дата документа должна быть строкой",
    })
    .datetime({ offset: true, message: "Дата документа в неверном формате" })
    .optional(),
  startDate: z
    .string({
      invalid_type_error: "Дата начала должна быть строкой",
    })
    .datetime({ offset: true, message: "Дата начала в неверном формате" })
    .optional(),
  isNoEndDate: z
    .boolean({
      invalid_type_error: "Бессрочно должна быть логическим типом",
    })
    .optional(),
  endDate: z
    .string({
      invalid_type_error: "Дата окончания должна быть строкой",
    })
    .datetime({ offset: true, message: "Дата окончания в неверном формате" })
    .optional(),
  notes: z
    .string({
      invalid_type_error: "Примечания должны быть строкой",
    })
    .optional(),
});
