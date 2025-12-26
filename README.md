# Welcome to XUI Svelte

This is a component library for Svelte 5 made by me for me.

This is the base for almost all my Svelte, Tauri and Electron projects.

## Installation

If you want to install this library to use it yourself you can do it following this steps:

### 1. Create an SvelteKit or Svelte project

While installing select the options TailwindCSS, TypeScript and ParaglideJS.

You can also install ESLint and Prettier if you want to. Not neede but recommended.

If you already have a project created install the next packages:

```sh
npm i -D @inlang/paraglide-js tailwindcss typescript @types/node
```

Make sure to change everything fo .ts files instead of .js files.

### 2. Install extra packages

```sh
npm i -D tw-animate-css tailwind-variants tailwind-merge clsx
```

```sh
npm i bits-ui
```

### 3. Add the localization keys

You can copy the keys inside the `./messages/en.json` to yours.

### 4. Add the $lib alias

If you're using SvelteKit this is automatic, if not, search how to do so with your config.

### 5. Copy the styles

This library contains custom Tailwind CSS styles so copy the `./src/routes/layout.css` content to your main `.css` file.

Make sure to `import "tw-animate-css"` on thet `.css` file.

### 6. Copy the files

Copy EVERYTHING the folder `./src/lib/xui` folder to your `./src/lib` folder.

This contains all the components, helpers...

### 7. Add the theme handler

On the root layout, probably `App.svelte` or `+layout.svelte` `import Theme from '$lib/components/Theme.svelte';` and then wrap you app with it like this:

```html
<Theme>{@render children()}</Theme>
```
