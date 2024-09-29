import { ZodError } from "zod";

/**
 * Структура ответа сервера
 */
export class ServerResponse<T> {
  isOk: boolean;
  data: T;
  status: number;
  errorMessages: string[] | undefined = [];

  constructor(
    isOk: boolean,
    data: T,
    status: number,
    errorMessages?: string[],
  ) {
    this.isOk = isOk;
    this.status = status;
    this.data = data;
    this.errorMessages = errorMessages;
  }

  get errorsString() {
    if (this.errorMessages) {
      return this.errorMessages.join(", ");
    } else {
      return "";
    }
  }

  // 200
  static Ok<T>(data: T) {
    return new ServerResponse<T>(true, data, 200);
  }

  // 500
  static ServerError(error: unknown) {
    if (error instanceof ZodError) {
      const errorMessages = error.errors.map((err) => {
        return err.message;
      });

      return new ServerResponse(false, undefined, 500, errorMessages);
    }

    if (error instanceof Error) {
      return new ServerResponse(false, undefined, 500, [error.message]);
    }

    return new ServerResponse(false, undefined, 500, [
      JSON.stringify(error, null, 2),
    ]);
  }
}
