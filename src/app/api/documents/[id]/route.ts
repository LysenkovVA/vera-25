import prisma from "../../../../../prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { ServerResponse } from "@/shared/lib/responses/ServerResponse";
import { Document, DocumentZSchema } from "@/entities/Document";
import { Prisma } from "@prisma/client";
import { ControlParameterZSchema } from "@/entities/ControlParameter";
import { ControlParameterValueZSchema } from "@/entities/ControlParameterValue";

/**
 * Получение документа по id
 * @param request
 * @param params
 * @constructor
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    // Выборка из БД
    const data = await prisma.document.findFirst({
      where: { id: params.id },
      include: {
        controlParameters: {
          include: {
            controlParameterValues: {
              orderBy: { position: "asc" },
            },
          },
          orderBy: { position: "asc" },
        },
      },
    });

    if (data) {
      // Возвращаем документ
      return NextResponse.json(ServerResponse.Ok<Document>(data as Document));
    } else {
      // Документ не найден
      return NextResponse.json(
        ServerResponse.NotFound(
          undefined,
          `Документ с id=${params.id} не найден`,
        ),
      );
    }
  } catch (error) {
    return NextResponse.json(
      ServerResponse.ServerError(
        error,
        undefined,
        `Неизвестная ошибка при получении документа с id=${params.id}`,
      ),
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    // Получаем тело из запроса
    const data: Document = await request.json();

    if (!params.id) {
      return NextResponse.json(
        ServerResponse.ServerError(
          "id документа для обновления не задан",
          undefined,
        ),
      );
    }

    // Валидация данных документа
    const validateDocument = DocumentZSchema.parse(data);

    // Данные запроса к БД
    const updateDocumentQuery: Prisma.DocumentUpdateArgs = {
      data: {
        name: validateDocument.name,
        number: validateDocument.number,
        date: validateDocument.date,
        startDate: validateDocument.startDate,
        isNoEndDate: validateDocument.isNoEndDate,
        endDate: validateDocument.endDate,
        notes: validateDocument.notes,
        controlParameters: {
          // Создаем новые
          create: data.controlParameters
            ?.map((controlParameterData, position) => {
              if (!controlParameterData.id) {
                // Новая позиция
                controlParameterData.position = position + 1;
                // Валидация данных контрольного параметра
                const validateControlParameter =
                  ControlParameterZSchema.parse(controlParameterData);

                const controlParameter: Prisma.ControlParameterCreateWithoutDocumentInput =
                  {
                    name: validateControlParameter.name,
                    position: validateControlParameter.position,
                    notes: validateControlParameter.notes,
                    controlParameterValues: {
                      // Создание значений
                      create: controlParameterData.controlParameterValues?.map(
                        (controlParameterValueData, cpvPosition) => {
                          // Позиция
                          controlParameterValueData.position = cpvPosition + 1;
                          // Валидация данных
                          const validateControlParameterValue =
                            ControlParameterValueZSchema.parse(
                              controlParameterValueData,
                            );

                          const controlParameterValue: Prisma.ControlParameterValueCreateWithoutControlParameterInput =
                            {
                              name: validateControlParameterValue.name,
                              position: validateControlParameterValue.position,
                              notes: validateControlParameterValue.notes,
                            };

                          return controlParameterValue;
                        },
                      ),
                    },
                  };

                return controlParameter;
              }

              return null;
            })
            .filter((element) => element != null),
          // Обновляем существующие
          update: data.controlParameters
            ?.map((controlParameterData, position) => {
              if (controlParameterData.id) {
                // Новая позиция
                controlParameterData.position = position + 1;
                // Валидация данных контрольного параметра
                const validateControlParameter =
                  ControlParameterZSchema.parse(controlParameterData);

                const controlParameter: Prisma.ControlParameterUpdateWithWhereUniqueWithoutDocumentInput =
                  {
                    data: {
                      name: validateControlParameter.name,
                      position: validateControlParameter.position,
                      notes: validateControlParameter.notes,
                      controlParameterValues: {
                        create: controlParameterData.controlParameterValues
                          ?.map((controlParameterValueData, cpvPosition) => {
                            if (!controlParameterValueData.id) {
                              // Позиция
                              controlParameterValueData.position =
                                cpvPosition + 1;
                              // Валидация данных
                              const validateControlParameterValue =
                                ControlParameterValueZSchema.parse(
                                  controlParameterValueData,
                                );

                              const controlParameterValue: Prisma.ControlParameterValueCreateWithoutControlParameterInput =
                                {
                                  name: validateControlParameterValue.name,
                                  position:
                                    validateControlParameterValue.position,
                                  notes: validateControlParameterValue.notes,
                                };

                              return controlParameterValue;
                            }

                            return null;
                          })
                          .filter((element) => element != null),
                        update: controlParameterData.controlParameterValues
                          ?.map((controlParameterValueData, cpvPosition) => {
                            if (controlParameterValueData.id) {
                              // Позиция
                              controlParameterValueData.position =
                                cpvPosition + 1;
                              // Валидация данных
                              const validateControlParameterValue =
                                ControlParameterValueZSchema.parse(
                                  controlParameterValueData,
                                );

                              const controlParameterValue: Prisma.ControlParameterValueUpdateWithWhereUniqueWithoutControlParameterInput =
                                {
                                  data: {
                                    name: validateControlParameterValue.name,
                                    position:
                                      validateControlParameterValue.position,
                                    notes: validateControlParameterValue.notes,
                                  },
                                  where: { id: controlParameterValueData.id },
                                };

                              return controlParameterValue;
                            }

                            return null;
                          })
                          .filter((element) => element != null),
                        delete:
                          controlParameterData.removedControlParametersValues?.map(
                            (controlParameterValueData) => {
                              return {
                                id: controlParameterValueData.id,
                              } as Prisma.ControlParameterValueWhereUniqueInput;
                            },
                          ),
                      },
                    },
                    where: { id: controlParameterData.id },
                  };

                return controlParameter;
              }

              return null;
            })
            .filter((element) => element != null),
          delete: data.removedControlParameters?.map((controlParameterData) => {
            return {
              id: controlParameterData.id,
            } as Prisma.ControlParameterWhereUniqueInput;
          }),
        },
      },
      where: { id: params.id },
    };

    // Обновление записи в БД
    const updatedDocument = await prisma.document.update(updateDocumentQuery);

    // Возвращаем обновленный документ
    return NextResponse.json(
      ServerResponse.Ok<Document>(updatedDocument as Document),
    );
  } catch (error) {
    return NextResponse.json(
      ServerResponse.ServerError(
        error,
        undefined,
        `Неизвестная ошибка при обновлении документа с id=${params.id}`,
      ),
    );
  }
}

/**
 * Удаление документа по id
 * @param request
 * @param params
 * @constructor
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const data = await prisma.document.delete({ where: { id: params.id } });
    return NextResponse.json(
      ServerResponse.Ok<Document>(
        data as Document,
        undefined,
        "Документ удален",
      ),
    );
  } catch (error) {
    return NextResponse.json(
      ServerResponse.ServerError(
        error,
        undefined,
        `Неизвестная ошибка при удалении документа с id=${params.id}`,
      ),
    );
  }
}
