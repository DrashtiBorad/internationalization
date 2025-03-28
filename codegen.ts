import dotenv from "dotenv";
import { IGraphQLConfig } from "graphql-config";

dotenv.config({
  debug: true,
  path: ".env",
});

const config: IGraphQLConfig = {
  schema: [process.env.NEXT_PUBLIC_COUNTRIES_API!],
  documents: ["src/graphql/**/*.gql"],
  extensions: {
    codegen: {
      debug: true,
      verbose: true,
      ignoreNoDocuments: true,
      overwrite: true,
      hooks: {
        afterAllFileWrite: ["npx prettier --write"],
      },
      generates: {
        "src/graphql/generated.ts": {
          plugins: [
            "typescript",
            "typescript-operations",
            "typescript-react-query",
            {
              add: {
                content: "/* eslint-disable */\n// @ts-nocheck\n",
              },
            },
          ],
          config: {
            addDocBlocks: false,
            dedupeFragments: true,
            pureMagicComment: true,
            disableDescriptions: true,
            fetcher: "graphql-request",
            legacyMode: false,
            exposeFetcher: true,
            exposeDocument: true,
            exposeQueryKeys: true,
            exposeMutationKeys: true,
            addInfiniteQuery: true,
            errorType: "any",
          },
        },
      },
    },
  },
};

export default config;
