import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        clearMocks: true,
        dir: './__tests__',
        coverage: {
            reporter: ['text', 'json', 'html', 'lcov'],
            reportsDirectory: './__tests__/coverage',
        },
        exclude: [
            ...configDefaults.exclude, 
            'node_modules/',
            'tsconfig/',
            'dist/'
        ],
    }
})