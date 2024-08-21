// Поддержка классов стилей для scss
declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}

// Чтобы был autocomplete по пропсам для svg
declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

// Для использования в тех местах, где необязательно использовать
// все поля, чтобы typescript не ругался
type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
