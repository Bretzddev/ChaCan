import { defineConfig, defineSchema } from "tinacms";

const schema = defineSchema({
  collections: [
    {
      label: "Page Content",
      name: "page",
      path: "content/page",
      format: "mdx",
      fields: [
        {
          name: "body",
          label: "Main Content",
          type: "rich-text",
          isBody: true,
        },
      ],
      ui: {
        router: ({ document }) => {
          if (document._sys.filename === "home") {
            return `/`;
          }
          return undefined;
        },
      },
    },
    {
      label: "Prestations",
      name: "presta",
      path: "content/page",
      format: "mdx",
      fields: [
        {
          name: "body",
          label: "Main Content",
          type: "rich-text",
          isBody: true,
        },
      ],
      ui: {
        router: ({ document }) => {
          if (document._sys.filename === "presta") {
            return `/presta`;
          }
          return undefined;
        },
      },
    },
    {
      label: "Gallerie Photos",
      name: "post",
      path: "content/post",
      fields: [
        {
          type: "string",
          label: "Titre du post",
          name: "title",
        },
        {
          type: 'image',
          label: 'Selection de l\'image',
          name: 'imgSrc',
        },
        {
          type: 'string',
          label: 'Commentaire de la photo',
          name: 'altImg',
        },
        {
          type: "string",
          label: "Contenu du post",
          name: "body",
          isBody: true,
          ui: {
            component: "textarea",
          },
        },
        {
          label: 'Categories',
          name: 'categories',
          type: 'string',
          list: true,
          options: [
            {
              value: 'baptême',
              label: 'Baptême',
            },
            {
              value: 'couple',
              label: 'Couple',
            },
            {
              value: 'famille',
              label: 'Famille',
            },
            {
              value: 'grossesse',
              label: 'Grossesse',
            },
            {
              value: 'mariage',
              label: 'Mariage',
            },
            {
              value: 'portrait',
              label: 'Portrait',
            },
          ],
        },
      ],
      ui: {
        router: ({ document }) => {
          return `/posts/${document._sys.filename}`;
        },
      },
    },
  ],
});

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema,
});

export default config;
