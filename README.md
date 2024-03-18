# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```
Pokemon gallery
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 09
│  │  │  └─ 6de2093d5597adbba1df3fd1481e37b9dff013
│  │  ├─ 0c
│  │  │  └─ 8f2e09165d47ac5c8c0c3c751c00cdded537cf
│  │  ├─ 0d
│  │  │  └─ 6babeddbdbc9d9ac5bd4d57004229d22dbd864
│  │  ├─ 0f
│  │  │  └─ bf5f5cb3ce44f368911c56a03bb206982c8661
│  │  ├─ 11
│  │  │  └─ f02fe2a0061d6e6e1f271b21da95423b448b32
│  │  ├─ 13
│  │  │  └─ e4f1f75bac6abba16a057014443cc06ab61e43
│  │  ├─ 15
│  │  │  └─ c1e777041aadc77dc6d95d93e3daa646149bed
│  │  ├─ 16
│  │  │  └─ 6b1ed001d24e54804fdd7e440938127de6166c
│  │  ├─ 18
│  │  │  ├─ 93725bf43866e454e9300015959919ce48a071
│  │  │  └─ 97a17ee033ba377246c0f9503fdc8e4d2a0a71
│  │  ├─ 1d
│  │  │  └─ e3ba5b931f589704bd3d5f6265999fb3e78daa
│  │  ├─ 22
│  │  │  ├─ cca6e7684c73b7b18b496b4ea0a80c7662cd11
│  │  │  └─ dc2cc5628f67ef05334d65b65506c75d89b29b
│  │  ├─ 24
│  │  │  └─ 3ea2247a053b93f39858edbdc6c3f3391f14c6
│  │  ├─ 25
│  │  │  └─ 9d3d9713d4c6d47ba3453bc0a126ceab0b9ea2
│  │  ├─ 26
│  │  │  └─ a949d1c80863c2f5b8257e0d222463eff6c1b2
│  │  ├─ 2d
│  │  │  └─ f9b69f2ab51f626779ce15558f82c3e0236f54
│  │  ├─ 2f
│  │  │  └─ 47ab5b3a4390be5d3c8c0aa20daade789af797
│  │  ├─ 31
│  │  │  └─ 6c049f06c827dce5c86b7be43adbb453ae3aed
│  │  ├─ 32
│  │  │  ├─ 0720b937403a28c1faa4890449d68e93dca521
│  │  │  └─ b4edd87e51125b7a4a961772c0b90f72df34d9
│  │  ├─ 35
│  │  │  ├─ 2f0c7f12e46d925457af5e396a34a38a0b8bab
│  │  │  └─ e1bee1cb5d5fe6d145963c936e30edb50fbbcb
│  │  ├─ 36
│  │  │  └─ 59eea0a6c4fcbd65e2514d7a3d1bd18e5da351
│  │  ├─ 3d
│  │  │  ├─ 367bd0a7109c9582449ffd836e84a24e83ccc4
│  │  │  └─ cf03c4f69fa9cdcd537e12c115ac4ffed382c2
│  │  ├─ 3e
│  │  │  └─ 7a71f35f50a550571cf0327024f4938d6e469a
│  │  ├─ 3f
│  │  │  ├─ 505bd98858d55aae63fafc6cf99bc4cf8eb3c9
│  │  │  └─ fd0b7a84b96741c00f1ab549482920e5c916e7
│  │  ├─ 42
│  │  │  └─ cb3dc15d07c779247174ad9ea94f1bca181b7d
│  │  ├─ 43
│  │  │  └─ 761c99f2ecff7d6957df302b5695664b4a75fb
│  │  ├─ 4c
│  │  │  ├─ 0704f2b68a23678c5a7fac7aa518f588af4cfc
│  │  │  └─ 44fe4ffa1df91609578bc415114979be29c436
│  │  ├─ 58
│  │  │  ├─ 329ab01f2a6567e746b34d1af5f0affe24a902
│  │  │  └─ ac15899768abfdae54289f0490bcc1999c2271
│  │  ├─ 59
│  │  │  ├─ 29e681d3f9ec045701cd3ef1a8ec26be46a9b3
│  │  │  └─ fd6390ad0bdda4c4c9e3fab75d0177ea7c9c5a
│  │  ├─ 5a
│  │  │  └─ 33944a9b41b59a9cf06ee4bb5586c77510f06b
│  │  ├─ 5c
│  │  │  ├─ 0f41212f6d322167cc6af83b31e6d675215080
│  │  │  └─ 4ba4402d4ebaf94840e4175a5212de0653a2a6
│  │  ├─ 60
│  │  │  └─ af9225b914d8da271c2939429e0d503f913073
│  │  ├─ 62
│  │  │  └─ c5fbd63f68dc1b8157c7419cc01c28560e640d
│  │  ├─ 63
│  │  │  └─ 87a1dc8f7c9b70ed1f460293c2b0a2e78c4bcf
│  │  ├─ 66
│  │  │  └─ 78785ce5902065bc91b87af462246c2ae46833
│  │  ├─ 72
│  │  │  └─ 8b6bcd7970221f7d0d8442f5f8c4579526bc74
│  │  ├─ 76
│  │  │  └─ 53be71d69064e20c735bdf36c053cd678fb776
│  │  ├─ 7b
│  │  │  └─ 32f900ab32dc688d25f83ae68d0a8029024083
│  │  ├─ 7c
│  │  │  ├─ 3bc5a478011fd56210a99b91345041728c1f11
│  │  │  └─ 963ef7258d43152c972374063706e74c12bebf
│  │  ├─ 7d
│  │  │  └─ ce0c6b07ff5deedec2dacf7d4bffc4a0a0c52e
│  │  ├─ 7f
│  │  │  ├─ 69d56106bf9146b3c1a16ea5b1490f18e50bce
│  │  │  ├─ b9511a6578e41555696833140c558e69e1e57b
│  │  │  └─ e479cde27f5fb4cbd30d528e07f919820c70df
│  │  ├─ 82
│  │  │  └─ 6322bd299d0d5e1679e727281b4c17253b954c
│  │  ├─ 85
│  │  │  └─ cf37f09ba75ba37bc80f8caf6a5e9b49cbe05f
│  │  ├─ 86
│  │  │  └─ 365bed8cf29405e0ce52a7eb5135f4e089f3ec
│  │  ├─ 8a
│  │  │  └─ 4ec0a2b418de3ee89b3712b86916fab612eb70
│  │  ├─ 8b
│  │  │  └─ c10f12e43ec3f9d5a0d1be8d273ee1aa0d5926
│  │  ├─ 8d
│  │  │  └─ 2e7df4dd9e7765356b224a1132c1546ab47eed
│  │  ├─ 91
│  │  │  └─ e474b8f37eff04f35faefc4def8689c6d98002
│  │  ├─ 95
│  │  │  └─ e2bdc2ca4c60a5a7673c214e6a4a9194bfcbdb
│  │  ├─ 97
│  │  │  └─ ede7ee6f2d37bd2d76e60c0b6a447bee718b05
│  │  ├─ 9c
│  │  │  └─ d5759f91788dc2837c0ee5dbaec668baf3914f
│  │  ├─ 9d
│  │  │  └─ 7a805bf2915cbb58a191c507b7819350c78cb4
│  │  ├─ 9e
│  │  │  ├─ 7b6dccb0fea90ea8a92197dad7db6af1c8e9c9
│  │  │  └─ e2caa421e2b4694802777f9f6a921bb2c4f7a5
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a6
│  │  │  └─ d8e93e9e1d8b796973cbf2ac38d9ba1b3b65e4
│  │  ├─ a7
│  │  │  └─ fc6fbf23de2a53e36754bc4a2c306d0291d7b2
│  │  ├─ ab
│  │  │  └─ af2aac7be1a4bdd78cab0ffe0011a4f1c9592f
│  │  ├─ ac
│  │  │  └─ a77434fbc79b44a1ced3aef1cdc7bb02ec21b6
│  │  ├─ ae
│  │  │  └─ ed466138b9f7b24d8948ae5755dbe6b0203405
│  │  ├─ b3
│  │  │  └─ 15a53225786ee6e02850e60333dda3851bf64f
│  │  ├─ b9
│  │  │  └─ 10842fd5bb042ee471c6e3d8916786731cff60
│  │  ├─ ba
│  │  │  ├─ 45bbcc0b24dd8711bbb426af563a61da4dd8d9
│  │  │  ├─ bff352c4a6f1a0d4599c83b40f8f63064db7a3
│  │  │  └─ d42fa047332ce389a678dada5e857751fbea3e
│  │  ├─ bf
│  │  │  └─ 37f07b87599f06131a9e7bd237ff99982e1daa
│  │  ├─ c4
│  │  │  └─ c9f8c6f1a3661803a13d70e1d3dcf7acb2e627
│  │  ├─ c8
│  │  │  └─ 6281bcba43ae667166da90437d97c4bce25c64
│  │  ├─ c9
│  │  │  └─ dafdfdec1e7c3e14dad7d3fd19845a0cad672c
│  │  ├─ cb
│  │  │  ├─ 9a73fcdc93db0d76bc92f810dd01f6622827fd
│  │  │  └─ a28e3c6ec95056a06df587ca00433a95dd9036
│  │  ├─ cc
│  │  │  └─ 090d04f7db1f62df7bdb5d4041149a011c9b1c
│  │  ├─ cf
│  │  │  └─ 37748af11895cd1608ac72215c62b631b15b9e
│  │  ├─ d0
│  │  │  └─ af6b0d8e34658669676de3c4afceb172666beb
│  │  ├─ d3
│  │  │  └─ 52339ebd49c5c404ab67fbddc27604dcd33374
│  │  ├─ d6
│  │  │  └─ c953795300e4256c76542d6bb0fe06f08b5ad6
│  │  ├─ d7
│  │  │  └─ a6ebaf7e41d1a20e6e0ccc2b613e4ca9db43a1
│  │  ├─ d8
│  │  │  └─ 010e06a9129d6b3591e8b20172f0e9127fd757
│  │  ├─ d9
│  │  │  └─ 9175459561775a74970fcc6eff03cca059d699
│  │  ├─ da
│  │  │  ├─ 44b81661d2eefb8185edb20ac2cb352a8e8d9d
│  │  │  └─ 6b414a7842df3478de0d4323b4dad63d9c3006
│  │  ├─ e6
│  │  │  └─ 8813e883f7315a58b9a4b58d00d02d25b85a44
│  │  ├─ e7
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ ec
│  │  │  ├─ 1c59bd84ebbc32fe03d43a11d7d0b1e7511a70
│  │  │  └─ 796b82a881f32361d694462def33d652115cde
│  │  ├─ f3
│  │  │  └─ b20b427306860a21307159d4dca8c2a5311792
│  │  ├─ f4
│  │  │  └─ c8754b289e12e9b927e4de8b55faa9e46fb8af
│  │  ├─ f7
│  │  │  └─ 8fc4c3a8f7b80041441594d771f9dee2684fe2
│  │  ├─ f9
│  │  │  ├─ 85641d00fe2f9478d52cb416c157dc6247a6ba
│  │  │  └─ fd84d3aa84b5d7abc43ced98912203f9035d5f
│  │  ├─ fe
│  │  │  └─ 1bd8f915fdd402468c8ff92339314c4fc234d0
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ image
│  │  └─ pokeapi_256.3fa72200.png
│  └─ vite.svg
├─ README.md
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
```
Pokemon gallery
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 09
│  │  │  └─ 6de2093d5597adbba1df3fd1481e37b9dff013
│  │  ├─ 0c
│  │  │  └─ 8f2e09165d47ac5c8c0c3c751c00cdded537cf
│  │  ├─ 0d
│  │  │  └─ 6babeddbdbc9d9ac5bd4d57004229d22dbd864
│  │  ├─ 0f
│  │  │  └─ bf5f5cb3ce44f368911c56a03bb206982c8661
│  │  ├─ 11
│  │  │  └─ f02fe2a0061d6e6e1f271b21da95423b448b32
│  │  ├─ 13
│  │  │  └─ e4f1f75bac6abba16a057014443cc06ab61e43
│  │  ├─ 15
│  │  │  └─ c1e777041aadc77dc6d95d93e3daa646149bed
│  │  ├─ 16
│  │  │  └─ 6b1ed001d24e54804fdd7e440938127de6166c
│  │  ├─ 18
│  │  │  ├─ 93725bf43866e454e9300015959919ce48a071
│  │  │  └─ 97a17ee033ba377246c0f9503fdc8e4d2a0a71
│  │  ├─ 1d
│  │  │  └─ e3ba5b931f589704bd3d5f6265999fb3e78daa
│  │  ├─ 22
│  │  │  ├─ cca6e7684c73b7b18b496b4ea0a80c7662cd11
│  │  │  └─ dc2cc5628f67ef05334d65b65506c75d89b29b
│  │  ├─ 24
│  │  │  └─ 3ea2247a053b93f39858edbdc6c3f3391f14c6
│  │  ├─ 25
│  │  │  └─ 9d3d9713d4c6d47ba3453bc0a126ceab0b9ea2
│  │  ├─ 26
│  │  │  └─ a949d1c80863c2f5b8257e0d222463eff6c1b2
│  │  ├─ 2d
│  │  │  └─ f9b69f2ab51f626779ce15558f82c3e0236f54
│  │  ├─ 2f
│  │  │  └─ 47ab5b3a4390be5d3c8c0aa20daade789af797
│  │  ├─ 31
│  │  │  └─ 6c049f06c827dce5c86b7be43adbb453ae3aed
│  │  ├─ 32
│  │  │  ├─ 0720b937403a28c1faa4890449d68e93dca521
│  │  │  └─ b4edd87e51125b7a4a961772c0b90f72df34d9
│  │  ├─ 35
│  │  │  ├─ 2f0c7f12e46d925457af5e396a34a38a0b8bab
│  │  │  └─ e1bee1cb5d5fe6d145963c936e30edb50fbbcb
│  │  ├─ 36
│  │  │  └─ 59eea0a6c4fcbd65e2514d7a3d1bd18e5da351
│  │  ├─ 3d
│  │  │  ├─ 367bd0a7109c9582449ffd836e84a24e83ccc4
│  │  │  └─ cf03c4f69fa9cdcd537e12c115ac4ffed382c2
│  │  ├─ 3e
│  │  │  └─ 7a71f35f50a550571cf0327024f4938d6e469a
│  │  ├─ 3f
│  │  │  ├─ 505bd98858d55aae63fafc6cf99bc4cf8eb3c9
│  │  │  └─ fd0b7a84b96741c00f1ab549482920e5c916e7
│  │  ├─ 42
│  │  │  └─ cb3dc15d07c779247174ad9ea94f1bca181b7d
│  │  ├─ 43
│  │  │  └─ 761c99f2ecff7d6957df302b5695664b4a75fb
│  │  ├─ 4c
│  │  │  ├─ 0704f2b68a23678c5a7fac7aa518f588af4cfc
│  │  │  └─ 44fe4ffa1df91609578bc415114979be29c436
│  │  ├─ 58
│  │  │  ├─ 329ab01f2a6567e746b34d1af5f0affe24a902
│  │  │  └─ ac15899768abfdae54289f0490bcc1999c2271
│  │  ├─ 59
│  │  │  ├─ 29e681d3f9ec045701cd3ef1a8ec26be46a9b3
│  │  │  └─ fd6390ad0bdda4c4c9e3fab75d0177ea7c9c5a
│  │  ├─ 5a
│  │  │  └─ 33944a9b41b59a9cf06ee4bb5586c77510f06b
│  │  ├─ 5c
│  │  │  ├─ 0f41212f6d322167cc6af83b31e6d675215080
│  │  │  └─ 4ba4402d4ebaf94840e4175a5212de0653a2a6
│  │  ├─ 60
│  │  │  └─ af9225b914d8da271c2939429e0d503f913073
│  │  ├─ 62
│  │  │  └─ c5fbd63f68dc1b8157c7419cc01c28560e640d
│  │  ├─ 63
│  │  │  └─ 87a1dc8f7c9b70ed1f460293c2b0a2e78c4bcf
│  │  ├─ 66
│  │  │  └─ 78785ce5902065bc91b87af462246c2ae46833
│  │  ├─ 72
│  │  │  └─ 8b6bcd7970221f7d0d8442f5f8c4579526bc74
│  │  ├─ 76
│  │  │  └─ 53be71d69064e20c735bdf36c053cd678fb776
│  │  ├─ 7b
│  │  │  └─ 32f900ab32dc688d25f83ae68d0a8029024083
│  │  ├─ 7c
│  │  │  ├─ 3bc5a478011fd56210a99b91345041728c1f11
│  │  │  └─ 963ef7258d43152c972374063706e74c12bebf
│  │  ├─ 7d
│  │  │  └─ ce0c6b07ff5deedec2dacf7d4bffc4a0a0c52e
│  │  ├─ 7f
│  │  │  ├─ 69d56106bf9146b3c1a16ea5b1490f18e50bce
│  │  │  ├─ b9511a6578e41555696833140c558e69e1e57b
│  │  │  └─ e479cde27f5fb4cbd30d528e07f919820c70df
│  │  ├─ 82
│  │  │  └─ 6322bd299d0d5e1679e727281b4c17253b954c
│  │  ├─ 85
│  │  │  └─ cf37f09ba75ba37bc80f8caf6a5e9b49cbe05f
│  │  ├─ 86
│  │  │  └─ 365bed8cf29405e0ce52a7eb5135f4e089f3ec
│  │  ├─ 8a
│  │  │  └─ 4ec0a2b418de3ee89b3712b86916fab612eb70
│  │  ├─ 8b
│  │  │  └─ c10f12e43ec3f9d5a0d1be8d273ee1aa0d5926
│  │  ├─ 8d
│  │  │  └─ 2e7df4dd9e7765356b224a1132c1546ab47eed
│  │  ├─ 91
│  │  │  └─ e474b8f37eff04f35faefc4def8689c6d98002
│  │  ├─ 95
│  │  │  └─ e2bdc2ca4c60a5a7673c214e6a4a9194bfcbdb
│  │  ├─ 97
│  │  │  └─ ede7ee6f2d37bd2d76e60c0b6a447bee718b05
│  │  ├─ 9c
│  │  │  └─ d5759f91788dc2837c0ee5dbaec668baf3914f
│  │  ├─ 9d
│  │  │  └─ 7a805bf2915cbb58a191c507b7819350c78cb4
│  │  ├─ 9e
│  │  │  ├─ 7b6dccb0fea90ea8a92197dad7db6af1c8e9c9
│  │  │  └─ e2caa421e2b4694802777f9f6a921bb2c4f7a5
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a6
│  │  │  └─ d8e93e9e1d8b796973cbf2ac38d9ba1b3b65e4
│  │  ├─ a7
│  │  │  └─ fc6fbf23de2a53e36754bc4a2c306d0291d7b2
│  │  ├─ ab
│  │  │  └─ af2aac7be1a4bdd78cab0ffe0011a4f1c9592f
│  │  ├─ ac
│  │  │  └─ a77434fbc79b44a1ced3aef1cdc7bb02ec21b6
│  │  ├─ ae
│  │  │  └─ ed466138b9f7b24d8948ae5755dbe6b0203405
│  │  ├─ b3
│  │  │  └─ 15a53225786ee6e02850e60333dda3851bf64f
│  │  ├─ b9
│  │  │  └─ 10842fd5bb042ee471c6e3d8916786731cff60
│  │  ├─ ba
│  │  │  ├─ 45bbcc0b24dd8711bbb426af563a61da4dd8d9
│  │  │  ├─ bff352c4a6f1a0d4599c83b40f8f63064db7a3
│  │  │  └─ d42fa047332ce389a678dada5e857751fbea3e
│  │  ├─ bf
│  │  │  └─ 37f07b87599f06131a9e7bd237ff99982e1daa
│  │  ├─ c4
│  │  │  └─ c9f8c6f1a3661803a13d70e1d3dcf7acb2e627
│  │  ├─ c8
│  │  │  └─ 6281bcba43ae667166da90437d97c4bce25c64
│  │  ├─ c9
│  │  │  └─ dafdfdec1e7c3e14dad7d3fd19845a0cad672c
│  │  ├─ cb
│  │  │  ├─ 9a73fcdc93db0d76bc92f810dd01f6622827fd
│  │  │  └─ a28e3c6ec95056a06df587ca00433a95dd9036
│  │  ├─ cc
│  │  │  └─ 090d04f7db1f62df7bdb5d4041149a011c9b1c
│  │  ├─ cf
│  │  │  └─ 37748af11895cd1608ac72215c62b631b15b9e
│  │  ├─ d0
│  │  │  └─ af6b0d8e34658669676de3c4afceb172666beb
│  │  ├─ d3
│  │  │  └─ 52339ebd49c5c404ab67fbddc27604dcd33374
│  │  ├─ d6
│  │  │  └─ c953795300e4256c76542d6bb0fe06f08b5ad6
│  │  ├─ d7
│  │  │  └─ a6ebaf7e41d1a20e6e0ccc2b613e4ca9db43a1
│  │  ├─ d8
│  │  │  └─ 010e06a9129d6b3591e8b20172f0e9127fd757
│  │  ├─ d9
│  │  │  └─ 9175459561775a74970fcc6eff03cca059d699
│  │  ├─ da
│  │  │  ├─ 44b81661d2eefb8185edb20ac2cb352a8e8d9d
│  │  │  └─ 6b414a7842df3478de0d4323b4dad63d9c3006
│  │  ├─ e6
│  │  │  └─ 8813e883f7315a58b9a4b58d00d02d25b85a44
│  │  ├─ e7
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ ec
│  │  │  ├─ 1c59bd84ebbc32fe03d43a11d7d0b1e7511a70
│  │  │  └─ 796b82a881f32361d694462def33d652115cde
│  │  ├─ f3
│  │  │  └─ b20b427306860a21307159d4dca8c2a5311792
│  │  ├─ f4
│  │  │  └─ c8754b289e12e9b927e4de8b55faa9e46fb8af
│  │  ├─ f7
│  │  │  └─ 8fc4c3a8f7b80041441594d771f9dee2684fe2
│  │  ├─ f9
│  │  │  ├─ 85641d00fe2f9478d52cb416c157dc6247a6ba
│  │  │  └─ fd84d3aa84b5d7abc43ced98912203f9035d5f
│  │  ├─ fe
│  │  │  └─ 1bd8f915fdd402468c8ff92339314c4fc234d0
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ image
│  │  └─ pokeapi_256.3fa72200.png
│  └─ vite.svg
├─ README.md
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
```
Pokemon gallery
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 09
│  │  │  └─ 6de2093d5597adbba1df3fd1481e37b9dff013
│  │  ├─ 0c
│  │  │  └─ 8f2e09165d47ac5c8c0c3c751c00cdded537cf
│  │  ├─ 0d
│  │  │  └─ 6babeddbdbc9d9ac5bd4d57004229d22dbd864
│  │  ├─ 0f
│  │  │  └─ bf5f5cb3ce44f368911c56a03bb206982c8661
│  │  ├─ 11
│  │  │  └─ f02fe2a0061d6e6e1f271b21da95423b448b32
│  │  ├─ 13
│  │  │  └─ e4f1f75bac6abba16a057014443cc06ab61e43
│  │  ├─ 15
│  │  │  └─ c1e777041aadc77dc6d95d93e3daa646149bed
│  │  ├─ 16
│  │  │  └─ 6b1ed001d24e54804fdd7e440938127de6166c
│  │  ├─ 18
│  │  │  ├─ 93725bf43866e454e9300015959919ce48a071
│  │  │  └─ 97a17ee033ba377246c0f9503fdc8e4d2a0a71
│  │  ├─ 1d
│  │  │  └─ e3ba5b931f589704bd3d5f6265999fb3e78daa
│  │  ├─ 22
│  │  │  ├─ cca6e7684c73b7b18b496b4ea0a80c7662cd11
│  │  │  └─ dc2cc5628f67ef05334d65b65506c75d89b29b
│  │  ├─ 24
│  │  │  └─ 3ea2247a053b93f39858edbdc6c3f3391f14c6
│  │  ├─ 25
│  │  │  └─ 9d3d9713d4c6d47ba3453bc0a126ceab0b9ea2
│  │  ├─ 26
│  │  │  └─ a949d1c80863c2f5b8257e0d222463eff6c1b2
│  │  ├─ 2d
│  │  │  └─ f9b69f2ab51f626779ce15558f82c3e0236f54
│  │  ├─ 2f
│  │  │  └─ 47ab5b3a4390be5d3c8c0aa20daade789af797
│  │  ├─ 31
│  │  │  └─ 6c049f06c827dce5c86b7be43adbb453ae3aed
│  │  ├─ 32
│  │  │  ├─ 0720b937403a28c1faa4890449d68e93dca521
│  │  │  └─ b4edd87e51125b7a4a961772c0b90f72df34d9
│  │  ├─ 35
│  │  │  ├─ 2f0c7f12e46d925457af5e396a34a38a0b8bab
│  │  │  └─ e1bee1cb5d5fe6d145963c936e30edb50fbbcb
│  │  ├─ 36
│  │  │  └─ 59eea0a6c4fcbd65e2514d7a3d1bd18e5da351
│  │  ├─ 3d
│  │  │  ├─ 367bd0a7109c9582449ffd836e84a24e83ccc4
│  │  │  └─ cf03c4f69fa9cdcd537e12c115ac4ffed382c2
│  │  ├─ 3e
│  │  │  └─ 7a71f35f50a550571cf0327024f4938d6e469a
│  │  ├─ 3f
│  │  │  ├─ 505bd98858d55aae63fafc6cf99bc4cf8eb3c9
│  │  │  └─ fd0b7a84b96741c00f1ab549482920e5c916e7
│  │  ├─ 42
│  │  │  └─ cb3dc15d07c779247174ad9ea94f1bca181b7d
│  │  ├─ 43
│  │  │  └─ 761c99f2ecff7d6957df302b5695664b4a75fb
│  │  ├─ 4c
│  │  │  ├─ 0704f2b68a23678c5a7fac7aa518f588af4cfc
│  │  │  └─ 44fe4ffa1df91609578bc415114979be29c436
│  │  ├─ 58
│  │  │  ├─ 329ab01f2a6567e746b34d1af5f0affe24a902
│  │  │  └─ ac15899768abfdae54289f0490bcc1999c2271
│  │  ├─ 59
│  │  │  ├─ 29e681d3f9ec045701cd3ef1a8ec26be46a9b3
│  │  │  └─ fd6390ad0bdda4c4c9e3fab75d0177ea7c9c5a
│  │  ├─ 5a
│  │  │  └─ 33944a9b41b59a9cf06ee4bb5586c77510f06b
│  │  ├─ 5c
│  │  │  ├─ 0f41212f6d322167cc6af83b31e6d675215080
│  │  │  └─ 4ba4402d4ebaf94840e4175a5212de0653a2a6
│  │  ├─ 60
│  │  │  └─ af9225b914d8da271c2939429e0d503f913073
│  │  ├─ 62
│  │  │  └─ c5fbd63f68dc1b8157c7419cc01c28560e640d
│  │  ├─ 63
│  │  │  └─ 87a1dc8f7c9b70ed1f460293c2b0a2e78c4bcf
│  │  ├─ 66
│  │  │  └─ 78785ce5902065bc91b87af462246c2ae46833
│  │  ├─ 72
│  │  │  └─ 8b6bcd7970221f7d0d8442f5f8c4579526bc74
│  │  ├─ 76
│  │  │  └─ 53be71d69064e20c735bdf36c053cd678fb776
│  │  ├─ 7b
│  │  │  └─ 32f900ab32dc688d25f83ae68d0a8029024083
│  │  ├─ 7c
│  │  │  ├─ 3bc5a478011fd56210a99b91345041728c1f11
│  │  │  └─ 963ef7258d43152c972374063706e74c12bebf
│  │  ├─ 7d
│  │  │  └─ ce0c6b07ff5deedec2dacf7d4bffc4a0a0c52e
│  │  ├─ 7f
│  │  │  ├─ 69d56106bf9146b3c1a16ea5b1490f18e50bce
│  │  │  ├─ b9511a6578e41555696833140c558e69e1e57b
│  │  │  └─ e479cde27f5fb4cbd30d528e07f919820c70df
│  │  ├─ 82
│  │  │  └─ 6322bd299d0d5e1679e727281b4c17253b954c
│  │  ├─ 85
│  │  │  └─ cf37f09ba75ba37bc80f8caf6a5e9b49cbe05f
│  │  ├─ 86
│  │  │  └─ 365bed8cf29405e0ce52a7eb5135f4e089f3ec
│  │  ├─ 8a
│  │  │  └─ 4ec0a2b418de3ee89b3712b86916fab612eb70
│  │  ├─ 8b
│  │  │  └─ c10f12e43ec3f9d5a0d1be8d273ee1aa0d5926
│  │  ├─ 8d
│  │  │  └─ 2e7df4dd9e7765356b224a1132c1546ab47eed
│  │  ├─ 91
│  │  │  └─ e474b8f37eff04f35faefc4def8689c6d98002
│  │  ├─ 95
│  │  │  └─ e2bdc2ca4c60a5a7673c214e6a4a9194bfcbdb
│  │  ├─ 97
│  │  │  └─ ede7ee6f2d37bd2d76e60c0b6a447bee718b05
│  │  ├─ 9c
│  │  │  └─ d5759f91788dc2837c0ee5dbaec668baf3914f
│  │  ├─ 9d
│  │  │  └─ 7a805bf2915cbb58a191c507b7819350c78cb4
│  │  ├─ 9e
│  │  │  ├─ 7b6dccb0fea90ea8a92197dad7db6af1c8e9c9
│  │  │  └─ e2caa421e2b4694802777f9f6a921bb2c4f7a5
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a6
│  │  │  └─ d8e93e9e1d8b796973cbf2ac38d9ba1b3b65e4
│  │  ├─ a7
│  │  │  └─ fc6fbf23de2a53e36754bc4a2c306d0291d7b2
│  │  ├─ ab
│  │  │  └─ af2aac7be1a4bdd78cab0ffe0011a4f1c9592f
│  │  ├─ ac
│  │  │  └─ a77434fbc79b44a1ced3aef1cdc7bb02ec21b6
│  │  ├─ ae
│  │  │  └─ ed466138b9f7b24d8948ae5755dbe6b0203405
│  │  ├─ b3
│  │  │  └─ 15a53225786ee6e02850e60333dda3851bf64f
│  │  ├─ b9
│  │  │  └─ 10842fd5bb042ee471c6e3d8916786731cff60
│  │  ├─ ba
│  │  │  ├─ 45bbcc0b24dd8711bbb426af563a61da4dd8d9
│  │  │  ├─ bff352c4a6f1a0d4599c83b40f8f63064db7a3
│  │  │  └─ d42fa047332ce389a678dada5e857751fbea3e
│  │  ├─ bf
│  │  │  └─ 37f07b87599f06131a9e7bd237ff99982e1daa
│  │  ├─ c4
│  │  │  └─ c9f8c6f1a3661803a13d70e1d3dcf7acb2e627
│  │  ├─ c8
│  │  │  └─ 6281bcba43ae667166da90437d97c4bce25c64
│  │  ├─ c9
│  │  │  └─ dafdfdec1e7c3e14dad7d3fd19845a0cad672c
│  │  ├─ cb
│  │  │  ├─ 9a73fcdc93db0d76bc92f810dd01f6622827fd
│  │  │  └─ a28e3c6ec95056a06df587ca00433a95dd9036
│  │  ├─ cc
│  │  │  └─ 090d04f7db1f62df7bdb5d4041149a011c9b1c
│  │  ├─ cf
│  │  │  └─ 37748af11895cd1608ac72215c62b631b15b9e
│  │  ├─ d0
│  │  │  └─ af6b0d8e34658669676de3c4afceb172666beb
│  │  ├─ d3
│  │  │  └─ 52339ebd49c5c404ab67fbddc27604dcd33374
│  │  ├─ d6
│  │  │  └─ c953795300e4256c76542d6bb0fe06f08b5ad6
│  │  ├─ d7
│  │  │  └─ a6ebaf7e41d1a20e6e0ccc2b613e4ca9db43a1
│  │  ├─ d8
│  │  │  └─ 010e06a9129d6b3591e8b20172f0e9127fd757
│  │  ├─ d9
│  │  │  └─ 9175459561775a74970fcc6eff03cca059d699
│  │  ├─ da
│  │  │  ├─ 44b81661d2eefb8185edb20ac2cb352a8e8d9d
│  │  │  └─ 6b414a7842df3478de0d4323b4dad63d9c3006
│  │  ├─ e6
│  │  │  └─ 8813e883f7315a58b9a4b58d00d02d25b85a44
│  │  ├─ e7
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ ec
│  │  │  ├─ 1c59bd84ebbc32fe03d43a11d7d0b1e7511a70
│  │  │  └─ 796b82a881f32361d694462def33d652115cde
│  │  ├─ f3
│  │  │  └─ b20b427306860a21307159d4dca8c2a5311792
│  │  ├─ f4
│  │  │  └─ c8754b289e12e9b927e4de8b55faa9e46fb8af
│  │  ├─ f7
│  │  │  └─ 8fc4c3a8f7b80041441594d771f9dee2684fe2
│  │  ├─ f9
│  │  │  ├─ 85641d00fe2f9478d52cb416c157dc6247a6ba
│  │  │  └─ fd84d3aa84b5d7abc43ced98912203f9035d5f
│  │  ├─ fe
│  │  │  └─ 1bd8f915fdd402468c8ff92339314c4fc234d0
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ image
│  │  └─ pokeapi_256.3fa72200.png
│  └─ vite.svg
├─ README.md
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