import { defineConfig } from 'orval';

export default defineConfig({
  dashboard: {
    input: './schema.yaml',
    output: { target: './src/services/api/generated/endpoints.ts' ,
    prettier:true,
    mode:'split',
    override:{
        mutator:'./src/services/api/mutator/axios-instance.ts'
    }
  },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
});
