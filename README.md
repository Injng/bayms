# bayms

## Developing

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of the website

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## User management
Whenever a new user enters BAYMS, the following steps must be taken to add the user to the website.

First, the user's email address must be entered into the `members` table. This is so that the user's information can be matched with their login information.

Then, the user's email address must be entered into the `roles` table, and given the default role of `member` to ensure restricted access.

Finally, create the user account in Supabase Auth. Enter a random password, then ask the user to reset their password through email.
