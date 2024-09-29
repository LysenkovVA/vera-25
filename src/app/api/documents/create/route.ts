import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/db";
import { Document, DocumentZSchema } from "@/entities/Document";
import { Prisma } from "@prisma/client";
import { ControlParameterZSchema } from "@/entities/ControlParameter";
import { ControlParameterValueZSchema } from "@/entities/ControlParameterValue";
import { ServerResponse } from "@/shared/lib/responses/ServerResponse";

/**
 * Создание нового документа
 * @param request
 * @constructor
 */
export async function POST(request: NextRequest) {
  try {
    // Получаем тело из запроса
    const data: Document = await request.json();

    // Валидация данных документа
    const validateDocument = DocumentZSchema.parse(data);

    // Данные запроса к БД
    const createDocumentQuery: Prisma.DocumentCreateInput = {
      name: validateDocument.name,
      number: validateDocument.number,
      date: validateDocument.date,
      startDate: validateDocument.startDate,
      isNoEndDate: validateDocument.isNoEndDate,
      endDate: validateDocument.endDate,
      notes: validateDocument.notes,
    };

    // Контрольные параметры
    const controlParameters:
      | Prisma.ControlParameterCreateWithoutDocumentInput[]
      | undefined = data.controlParameters?.map((controlParameterData) => {
      // Валидация данных контрольного параметра
      const validateControlParameter =
        ControlParameterZSchema.parse(controlParameterData);

      const controlParameter: Prisma.ControlParameterCreateWithoutDocumentInput =
        {
          name: validateControlParameter.name,
          position: validateControlParameter.position,
          notes: validateControlParameter.notes,
        };

      // Значения контрольных параметров
      const controlParameterValues:
        | Prisma.ControlParameterValueCreateWithoutControlParameterInput[]
        | undefined = controlParameterData.controlParameterValues?.map(
        (controlParameterValueData) => {
          // Валидация данных значения контрольного параметра
          const validateControlParameterValue =
            ControlParameterValueZSchema.parse(controlParameterValueData);

          const controlParameterValue: Prisma.ControlParameterValueCreateWithoutControlParameterInput =
            {
              name: validateControlParameterValue.name,
              position: validateControlParameterValue.position,
              notes: validateControlParameterValue.notes,
            };

          return controlParameterValue;
        },
      );

      // Добавление значений контрольного параметра к контрольному параметру
      if (controlParameterValues) {
        controlParameter.controlParameterValues = {
          create: controlParameterValues,
        };
      }

      return controlParameter;
    });

    // Добавление контрольных параметров к запросу
    if (controlParameters) {
      createDocumentQuery.controlParameters = { create: controlParameters };
    }

    // Создание новой записи в БД
    const newDocument = await prisma.document.create({
      data: createDocumentQuery,
    });

    // Возвращаем созданный документ
    return NextResponse.json(
      ServerResponse.Ok<Document>(newDocument as Document),
    );
  } catch (error) {
    return NextResponse.json(ServerResponse.ServerError(error));
  }
}
