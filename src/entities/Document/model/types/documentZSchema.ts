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
    .optional()
    .nullable(),
  date: z
    .string({
      invalid_type_error: "Дата документа должна быть строкой",
    })
    .datetime({ offset: true, message: "Дата документа в неверном формате" })
    .optional()
    .nullable(),
  startDate: z
    .string({
      invalid_type_error: "Дата начала документа должна быть строкой",
    })
    .datetime({
      offset: true,
      message: "Дата начала документа в неверном формате",
    })
    .optional()
    .nullable(),
  isNoEndDate: z
    .boolean({
      invalid_type_error: "Бессрочно должна быть логическим типом",
    })
    .optional()
    .nullable(),
  endDate: z
    .string({
      invalid_type_error: "Дата окончания документа должна быть строкой",
    })
    .datetime({
      offset: true,
      message: "Дата окончания документа в неверном формате",
    })
    .optional()
    .nullable(),
  notes: z
    .string({
      invalid_type_error: "Примечания документа должны быть строкой",
    })
    .optional()
    .nullable(),
});
