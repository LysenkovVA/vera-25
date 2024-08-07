import type { Preview } from "@storybook/react";
// 👇 Must include the `.mock` portion of filename to have mocks typed correctly
// import { getRouter } from "@storybook/nextjs/router.mock";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      // 👇 Override the default router properties
      router: {
        basePath: "/app/",
      },
      appDirectory: true,
    },
  },
  // async beforeEach() {
  //   // 👇 Manipulate the default router method mocks
  //   getRouter().push.mockImplementation(() => {
  //     /* ... */
  //   });
  // },
};

export default preview;
