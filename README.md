# RCL2 - Your Persistent Anonymous Bookmark and Link Sharing Database

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Requirements](#requirements)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [Database Setup (TBD)](#database-setup-tbd)
8. [License](#license)

## Introduction

RCL2 is a service that allows users to manage and share bookmarks and links seamlessly. Whether you want to save a Pastebin URL from a school computer or share a helpful link with your network, RCL2 has got you covered.

## Features

- **OAuth2 Authentication**: Supports common OAuth2 services.
- **Private Links**: Hide links that are meant just for you.
- **Chrome Extension**: An official Chrome extension for easier bookmarking.
- **Anonymous Links**: Send links to your profile without logging in.
- **Open Source**: Built on a completely Open Source software stack. Free to use, modify, and distribute.

## Requirements

- Node.js
- Supabase account
- OAuth provider account for authentication

## Installation

Clone the repository and navigate into the project directory. Run the following commands:

```bash
npm install
```

To start the server in development mode:

```bash
npm run dev
```

To expose the server on macOS for better callback URL handling with Supabase:

```bash
npm run dev -- --host
```

## Configuration

You'll need to set up a Supabase project and enable OAuth for authentication. You can follow this [Supabase OAuth Guide](https://supabase.com/docs/guides/auth/social-login/auth-github) using GitHub as an example. The process is similar for other OAuth providers.

After setting up the OAuth, point the Supabase redirect URL to your instance. The homepage or \`/login\` are suitable locations for this.

## Usage

Once the server is up, you can navigate to the frontend to sign up or log in. You can then begin to add, edit, and share bookmarks.

## Database Setup (TBD)

Details about PostgreSQL commands for setting up tables and rules will be added soon.

## License

This project is licensed under the MIT License. Please note that the public instance reserves the right to terminate profiles at any time.