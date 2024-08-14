import { redirect } from "next/navigation";
import { auth } from "../../auth";

/**
 * ТОЧКА ВХОДА В ПРИЛОЖЕНИЕ
 * @constructor
 */
const StartPage = async () => {
  // Получаем сессию
  const session = await auth();
  // Если пользователь авторизован, перенаправляем в приложение,
  // иначе на авторизацию
  if (session && session.user) {
    redirect("/blanks");
  } else {
    redirect("/auth/signin");
  }
};

export default StartPage;
