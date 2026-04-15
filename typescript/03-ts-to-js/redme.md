use only tsc for "strict mode"
->you also use `ts-node "file_name"` Here

--> Also you need to Quick Fix when you add express module `Install @types/express`

# Files -

files
Specifies an allowlist of files to include in the program. An error occurs if any of the files can’t be found.

{
"compilerOptions": {},
"files": [
"core.ts",
"sys.ts",
"types.ts",
"scanner.ts",
"parser.ts",
"utilities.ts",
"binder.ts",
"checker.ts",
"tsc.ts"
]
}

# Include -

include
Specifies an array of filenames or patterns to include in the program. These filenames are resolved relative to the directory containing the tsconfig.json file.

{
"include": ["src/**/*", "tests/**/*"]
}

.
├── scripts ⨯
│ ├── lint.ts ⨯
│ ├── update_deps.ts ⨯
│ └── utils.ts ⨯
├── src ✓
│ ├── client ✓
│ │ ├── index.ts ✓
│ │ └── utils.ts ✓
│ ├── server ✓
│ │ └── index.ts ✓
├── tests ✓
│ ├── app.test.ts ✓
│ ├── utils.ts ✓
│ └── tests.d.ts ✓
├── package.json
├── tsconfig.json
└── yarn.lock

# Exclude -

exclude
Specifies an array of filenames or patterns that should be skipped when resolving include.

Important: exclude only changes which files are included as a result of the include setting. A file specified by exclude can still become part of your codebase due to an import statement in your code, a types inclusion, a /// <reference directive, or being specified in the files list.

It is not a mechanism that prevents a file from being included in the codebase - it simply changes what the include setting finds.

# Out Dir -

outDir
If specified, .js (as well as .d.ts, .js.map, etc.) files will be emitted into this directory. The directory structure of the original source files is preserved; see rootDir if the computed root is not what you intended.

If not specified, .js files will be emitted in the same directory as the .ts files they were generated from:

$ tsc
example
├── index.js
└── index.ts

With a tsconfig.json like this:

{
"compilerOptions": {
"outDir": "dist"
}
}

Running tsc with these settings moves the files into the specified dist folder:

$ tsc
example
├── dist
│ └── index.js
├── index.ts
└── tsconfig.json

# Declaration File

The Declaration Files section is designed to teach you how to write a high-quality TypeScript Declaration File. We need to assume basic familiarity with the TypeScript language in order to get started.

If you haven’t already, you should read the TypeScript Handbook to familiarize yourself with basic concepts, especially types and modules.

The most common case for learning how ".d.ts" files work is that you’re typing an npm package with no types. In that case, you can jump straight to Modules .d.ts.

The Declaration Files section is broken down into the following sections.
