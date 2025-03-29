import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://countries.trevorblades.com/",
  documents: ["src/graphql/**/*.gql"],
  generates: {
    "src/graphql/types.ts": {
      plugins: ["typescript"], // Generates the common types in a separate file
    },
    "src/graphql/**/*": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".ts",
        baseTypesPath: "../../types.ts",
      },
      plugins: ["typescript-operations", "typescript-react-query"],
      config: {
        fetcher: "../../config/graphqlClient#customFetcher",
        isReactHook: true,
        reactQueryVersion: 5,
        exposeQueryKeys: true,
        avoidOptionals: true,
      },
    },
  },
};

export default config;
