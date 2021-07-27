import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: "Tzahi's Blog",
  description: 'Kick-starting!',

  themeConfig: {
    logo: 'https://image.flaticon.com/icons/png/512/888/888802.png',
    home: '/',
    navbar: [
      {
        text: '2021',
        children: [
          {
            text: 'Round D',
            children: [
              {
                text: 'Arithmetic Squares',
                link: '/2021/Round-D/ArithmeticSquares.md',
              },
            ],
          },
        ],
      },
    ],
    repo: 'https://gitlab.com/foo/bar',
  },
})
