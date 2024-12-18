# Docusaurus Customization Theme

Docusaurus is a static site generator that is optimized for technical documentation. It is easy to get started with and has a lot of features that make it easy to customize. In this article, we will look at how you can customize the Docusaurus theme to make your documentation look unique.

## Customizing the Theme

Docusaurus uses a theme to control the look and feel of your documentation. The default theme is called `@docusaurus/theme-classic`, but you can create your own theme to customize the appearance of your documentation.

This customization is known as [swizzling](https://docusaurus.io/docs/swizzling) in Docusaurus. Swizzling allows you to override the default components and styles of the theme to create a unique look for your documentation.

Let's start with the layout of the Blog page. The default layout of the Blog page is a list of blog posts with a sidebar that contains links to the different sections of the documentation. You can customize the layout of the Blog page by swizzling the `BlogPage` component.

I decided to use MUI (Material-UI) for the customization of the Blog page. 

Adjusting the `BlogLayout` using MUI components to create a new layout for the Blog page.

Don't reinvent the wheel, use the [MUI templates](https://github.com/mui/material-ui/blob/master/docs/data/joy/getting-started/templates/) to customize the Blog!

Hero section from [Web Blocks template](https://github.com/mui/material-ui/tree/master/docs/data/joy/getting-started/templates/framesx-web-blocks).

```bash
# Add dependencies
yarn upgrade @mui/material @mui/icons-material @emotion/styled @emotion/react @mui/joy
# Time to swizzle!
yarn swizzle @docusaurus/theme-classic BlogLayout --eject
```

The list of post to be displayed on the Blog page is customized using the `BlogPostItems` component (plural). We are going to use the MUI `Card` component to display the list of blog posts, with the [Instagram-like](https://mui.com/joy-ui/react-card/#instagram-post) layout.

```bash
# Time to swizzle!
yarn swizzle @docusaurus/theme-classic BlogPostItems --eject --danger
```

For the posts content, we are to eject the `BlogPostItem` component to customize the layout of the post content.

```bash
yarn swizzle @docusaurus/theme-classic BlogPostItem --eject --danger
```