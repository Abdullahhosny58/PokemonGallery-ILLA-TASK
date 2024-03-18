## Frontend challenge

simple pokemon list, pokemon details , pokemon search project written in react, typescript.

## Deployed App

Open [https://pokemon-gallery-opal.vercel.app/](https://pokemon-gallery-opal.vercel.app/) to view deployed app in the browser.

## Running Instructions

In the project directory, you can run:

### `npm install`

Installs node modules

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173/]( http://localhost:5173/) to view homePage it in the browser.

## Project Structure

```
Pokemon gallery
├─ .eslintrc.cjs
├─ .git
│  ├─ [git related files and directories]
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ image
│  │  └─ pokeapi_256.3fa72200.png
│  └─ vite.svg
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ components
│  │  ├─ navbar
│  │  │  ├─ Navbar.tsx
│  │  │  └─ navStyle.ts
│  │  ├─ PokemonDetails.tsx
│  │  ├─ ProductItems.tsx
│  │  ├─ style
│  │  │  ├─ pokemonDetailsStyle.ts
│  │  │  └─ ProductItemsStyle.ts
│  │  └─ style.ts
│  ├─ context
│  │  └─ pokemonContext.ts
│  ├─ hooks
│  │  ├─ useFetchPokemonDetails.ts
│  │  └─ usePokemonData.ts
│  ├─ index.css
│  ├─ index.tsx
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ NotFoundPage.tsx
│  │  └─ notFoundPageStyle.ts
│  ├─ types
│  │  └─ interfaces.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```



## Libraries used

-   react
-   react-router
-   typscript
-   axios
-   material-ui
-   framer motion

## Formater

-   prettier

## Improvments

-   Make it responsive!
-   Add workflow using github actions to automate deploy process
-   Tests
