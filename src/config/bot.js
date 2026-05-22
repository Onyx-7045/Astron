import { logger } from '../utils/logger.js';


export const botConfig = {
  // =========================
  // BOT PRESENCE (what users see under the bot name)
  // =========================
  // `status` options:
  // - "online"    = green dot
  // - "idle"      = yellow moon
  // - "dnd"       = red do-not-disturb
  // - "invisible" = appears offline
  presence: {
    // Current online state shown on Discord.
    status: "online",

    // Activity lines shown under the bot name.
    // `type` number mapping from Discord:
    // 0 = Playing
    // 1 = Streaming
    // 2 = Listening
    // 3 = Watching
    // 4 = Custom
    // 5 = Competing
    activities: [
      {
        // Text users will see (example: "Playing /help | Titan Bot").
        // Activity type number (0 = Playing).
        type: 0, 
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR
  // =========================
  commands: {
    // Bot owner user IDs (comma-separated in OWNER_IDS env var).
    // Owners can access owner/admin-level bot commands.
    owners: process.env.OWNER_IDS?.split(",") || [],

    // Default wait time between command uses (in seconds).
    defaultCooldown: 3, 

    // If true, old commands are removed before re-registering.
    deleteCommands: false,

    // Optional server ID used for testing slash commands quickly.
    testGuildId: process.env.TEST_GUILD_ID,
  },

  // =========================
  // APPLICATIONS SYSTEM
  // =========================
  applications: {
    // Default questions shown when someone fills out an application.
    defaultQuestions: [
      { question: "What is your name?", required: true },
      { question: "How old are you?", required: true },
      { question: "Why do you want to join?", required: true },
    ],

    // Embed colors by application status.
    statusColors: {
      pending: "#FFA500",
      approved: "#00FF00",
      denied: "#FF0000",
    },

    // How long users must wait before submitting another application (hours).
    applicationCooldown: 24, 

    // Auto-delete denied applications after this many days.
    deleteDeniedAfter: 7, 

    // Auto-delete approved applications after this many days.
    deleteApprovedAfter: 30, 

    // Role IDs allowed to manage applications.
    managerRoles: [], // Will be populated from environment or database
  },

  // =========================
  // EMBED COLORS & BRANDING
  // =========================
  // IMPORTANT: This is the SINGLE SOURCE OF TRUTH for all bot colors
  embeds: {
    colors: {
      // Main brand colors.
      primary: "#336699", 
      secondary: "#2F3136", 

      // Standard status colors for success/error/warning/info messages.
      success: "#57F287", 
      error: "#ED4245", 
      warning: "#FEE75C", 
      info: "#3498DB", 

      // Neutral utility colors.
      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",

      // Discord-style palette shortcuts.
      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#000000",

      // Feature-specific colors.
      giveaway: {
        active: "#57F287",
        ended: "#ED4245",
      },
      ticket: {
        open: "#57F287",
        claimed: "#FAA61A",
        closed: "#ED4245",
        pending: "#99AAB5",
      },
      economy: "#F1C40F",
      birthday: "#E91E63",
      moderation: "#9B59B6",

      // Ticket priority color mapping.
      priority: {
        none: "#95A5A6",
        low: "#3498db",
        medium: "#2ecc71",
        high: "#f1c40f",
        urgent: "#e74c3c",
      },
    },
    footer: {
      // Default footer text used in bot embeds.
      text: "Titan Bot",
      // Footer icon URL (null = no icon).
      icon: null,
    },
    // Default thumbnail URL for embeds (null = no thumbnail).
    thumbnail: null,
    author: {
      // Optional default embed author block.
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // ECONOMY SETTINGS
  // =========================
  economy: {
    currency: {
      // Currency display name.
      name: "coins",
      // Plural display name.
      namePlural: "coins",
      // Currency symbol shown in balances.
      symbol: "$",
    },

    // Starting balance for new users.
    startingBalance: 0,

    // Maximum bank amount before upgrades (if upgrades are used).
    baseBankCapacity: 100000,

    // Daily reward amount.
    dailyAmount: 100,

    // Work command random payout range.
    workMin: 10,
    workMax: 100,

    // Beg command random payout range.
    begMin: 5,
    begMax: 50,

    // Chance to succeed when robbing (0.4 = 40%).
    robSuccessRate: 0.4,

    // Jail time after failed rob (milliseconds).
    // 3600000 = 1 hour.
    robFailJailTime: 3600000, 
  },

  // =========================
  // SHOP SETTINGS
  // =========================
  // Add shop defaults here when needed.
  shop: {
    
  },

  // =========================
  // TICKET SYSTEM
  // =========================
  tickets: {
    // Category ID where new tickets are created (null = no forced category).
    defaultCategory: null,

    // Role IDs allowed to manage/support tickets.
    supportRoles: [],

    // Priority options users/staff can assign.
    priorities: {
      none: {
        emoji: "⚪",
        color: "#95A5A6",
        label: "None",
      },
      low: {
        emoji: "🟢",
        color: "#2ECC71",
        label: "Low",
      },
      medium: {
        emoji: "🟡",
        color: "#F1C40F",
        label: "Medium",
      },
      high: {
        emoji: "🔴",
        color: "#E74C3C",
        label: "High",
      },
      urgent: {
        emoji: "🚨",
        color: "#E91E63",
        label: "Urgent",
      },
    },

    // Default priority for new tickets.
    defaultPriority: "none",

    // Category ID where closed tickets are archived.
    archiveCategory: null,

    // Channel ID where ticket logs are sent.
    logChannel: null,
  },

  // =========================
  // GIVEAWAY SETTINGS
  // =========================
  giveaways: {
    // Default giveaway duration in milliseconds.
    // 86400000 = 24 hours.
    defaultDuration: 86400000, 

    // Allowed winner count range.
    minimumWinners: 1,
    maximumWinners: 10,

    // Allowed giveaway duration range in milliseconds.
    // 300000 = 5 minutes.
    minimumDuration: 300000, 
    // 2592000000 = 30 days.
    maximumDuration: 2592000000, 

    // Role IDs allowed to host giveaways.
    allowedRoles: [],

    // Role IDs that bypass giveaway restrictions.
    bypassRoles: [],
  },

  // =========================
  // BIRTHDAY SETTINGS
  // =========================
  birthday: {
    // Role ID given to users on their birthday.
    defaultRole: null,

    // Channel ID where birthday announcements are posted.
    announcementChannel: null,

    // Timezone used to calculate birthday dates.
    timezone: "UTC",
  },

  // =========================
  // VERIFICATION SETTINGS
  // =========================
  verification: {
    // Message shown when posting the verification panel.
    defaultMessage: "Click the button below to verify yourself and gain access to the server!",

    // Text on the verification button.
    defaultButtonText: "Verify",

    // Automatic verification behavior.
    autoVerify: {
      // How automatic verification decides who is auto-approved:
      // - "none"        = everyone is auto-verified immediately
      // - "account_age" = account must be older than set days
      // - "server_size" = auto-verify everyone only in smaller servers
      defaultCriteria: "none",

      // Days used when `defaultCriteria` is `account_age`.
      defaultAccountAgeDays: 7,

      // Member count threshold used when `defaultCriteria` is `server_size`.
      // Example: 1000 means auto-verify if server has fewer than 1000 members.
      serverSizeThreshold: 1000,

      // Allowed safety limits for account-age requirements.
      // 1 = minimum day, 365 = maximum days.
      minAccountAge: 1,      
      maxAccountAge: 365,    

      // If true, user receives a DM after verification.
      sendDMNotification: true,

      // Human-readable descriptions for each criteria mode.
      criteria: {
        account_age: "Account must be older than specified days",
        server_size: "All users if server has less than 1000 members",
        none: "All users immediately"
      }
    },

    // Minimum time between verification attempts (milliseconds).
    // 5000 = 5 seconds.
    verificationCooldown: 5000,  

    // Maximum failed attempts allowed inside the time window below.
    maxVerificationAttempts: 3,   

    // Time window for counting attempts (milliseconds).
    // 60000 = 1 minute.
    attemptWindow: 60000,          

    // In-memory safety limits (helps avoid unbounded memory growth).
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,
    // Cleanup frequency for cooldown/attempt maps (milliseconds).
    // 300000 = 5 minutes.
    cooldownCleanupInterval: 300000, 
    // Maximum metadata payload size for audit entries (bytes).
    maxAuditMetadataBytes: 4096,
    // Maximum number of audit entries kept in memory.
    maxInMemoryAuditEntries: 1000,
  // If true, log every verification action.
  logAllVerifications: true,
  // If true, preserve verification audit history.
  keepAuditTrail: true,
  },

  // =========================
  // WELCOME / GOODBYE MESSAGES
  // =========================
  welcome: {
    // Welcome template posted when a user joins.
    // Placeholders: {user}, {server}, {memberCount}
    defaultWelcomeMessage:
      "Welcome {user} to {server}! We now have {memberCount} members!",
    // Goodbye template posted when a user leaves.
    // Placeholders: {user}, {memberCount}
    defaultGoodbyeMessage:
      "{user} has left the server. We now have {memberCount} members.",
    // Channel ID for welcome messages.
    defaultWelcomeChannel: null,
    // Channel ID for goodbye messages.
    defaultGoodbyeChannel: null,
  },

  // =========================
  // COUNTER CHANNELS
  // =========================
  counters: {
    defaults: {
      // Default naming/description templates for counter entries.
      name: "{name} Counter",
      description: "Server {name} counter",
      // Channel type used for counters (typically "voice").
      type: "voice",
      // Channel name format. `{count}` is replaced automatically.
      channelName: "{name}-{count}",
    },
    permissions: {
      // Default denied permissions for the counter channel.
      deny: ["VIEW_CHANNEL"],
      // Default allowed permissions for the counter channel.
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },
    messages: {
      // Default response messages for counter actions.
      created: "✅ Created counter **{name}**",
      deleted: "🗑️ Deleted counter **{name}**",
      updated: "🔄 Updated counter **{name}**",
    },
    types: {
      // Built-in counter types and how each count is calculated.
      members: {
        name: "👥 Members",
        description: "Total members in the server",
        getCount: (guild) => guild.memberCount.toString(),
      },
      bots: {
        name: "🤖 Bots",
        description: "Total bot accounts in the server",
        getCount: (guild) =>
          guild.members.cache.filter((m) => m.user.bot).size.toString(),
      },
      members_only: {
        name: "👤 Humans",
        description: "Total human members (non-bots)",
        getCount: (guild) =>
          guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // GENERIC BOT MESSAGES
  // =========================
  messages: {
    noPermission: "You do not have permission to use this command.",
    cooldownActive: "Please wait {time} before using this command again.",
    errorOccurred: "An error occurred while executing this command.",
    missingPermissions:
      "I am missing required permissions to perform this action.",
    commandDisabled: "This command has been disabled.",
    maintenanceMode: "The bot is currently in maintenance mode.",
  },

  // =========================
  // FEATURE TOGGLES
  // =========================
  // Set any feature to `false` to disable it globally.
  features: {
    // Core systems.
    economy: true,
    leveling: true,
    moderation: true,
    logging: true,
    welcome: true,

    // Community engagement systems.
    tickets: true,
    giveaways: true,
    birthday: true,
    counter: true,

    // Security and self-service systems.
    verification: true,
    reactionRoles: true,
    joinToCreate: true,

    // Utility/quality-of-life modules.
    voice: true,
    search: true,
    tools: true,
    utility: true,
    community: true,
    fun: true,
  },
};


export function validateConfig(config) {
  const errors = [];

  
  if (process.env.NODE_ENV !== 'production') {
    logger.debug('Environment variables check:');
    logger.debug('DISCORD_TOKEN exists:', !!process.env.DISCORD_TOKEN);
    logger.debug('TOKEN exists:', !!process.env.TOKEN);
    logger.debug('CLIENT_ID exists:', !!process.env.CLIENT_ID);
    logger.debug('GUILD_ID exists:', !!process.env.GUILD_ID);
    logger.debug('POSTGRES_HOST exists:', !!process.env.POSTGRES_HOST);
    logger.debug('NODE_ENV:', process.env.NODE_ENV);
  }

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("Bot token is required (DISCORD_TOKEN or TOKEN environment variable)");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("Client ID is required (CLIENT_ID environment variable)");
  }

  
  if (process.env.NODE_ENV === 'production') {
    if (!process.env.POSTGRES_HOST) {
      errors.push("PostgreSQL host is required in production (POSTGRES_HOST environment variable)");
    }
    if (!process.env.POSTGRES_USER) {
      errors.push("PostgreSQL user is required in production (POSTGRES_USER environment variable)");
    }
    if (!process.env.POSTGRES_PASSWORD) {
      errors.push("PostgreSQL password is required in production (POSTGRES_PASSWORD environment variable)");
    }
  }

  return errors;
}


const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("Bot configuration errors:", configErrors.join("\n"));
  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}


export const BotConfig = botConfig;

export function getColor(path, fallback = "#99AAB5") {
  
  if (typeof path === "number") return path;
  if (typeof path === "string" && path.startsWith("#")) {
    
    return parseInt(path.replace("#", ""), 16);
  }
  const result = path
    .split(".")
    .reduce(
      (obj, key) => (obj && obj[key] !== undefined ? obj[key] : fallback),
      botConfig.embeds.colors,
    );
  
  // Convert the result to integer if it's a hex string
  if (typeof result === "string" && result.startsWith("#")) {
    return parseInt(result.replace("#", ""), 16);
  }
  return result;
}

export function getRandomColor() {
  const colors = Object.values(botConfig.embeds.colors).flatMap((color) =>
    typeof color === "string" ? color : Object.values(color),
  );
  return colors[Math.floor(Math.random() * colors.length)];
}

export default botConfig;





# Astron Finished Security + Attendance Files

Compatible with:

* Discord.js v14
* PostgreSQL
* Prisma
* Railway

---

# 1. Install Packages

```bash
npm install discord.js prisma @prisma/client dotenv ms
```

---

# 2. Prisma Schema

## prisma/schema.prisma

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Attendance {
  id        Int      @id @default(autoincrement())
  guildId   String
  userId    String
  status    String
  createdAt DateTime @default(now())
}

model Verification {
  id           Int      @id @default(autoincrement())
  guildId      String   @unique
  roleId       String
  channelId    String
  minAgeDays   Int      @default(7)
}

model AntiNuke {
  id             Int      @id @default(autoincrement())
  guildId        String   @unique
  enabled        Boolean  @default(true)
  logChannelId   String?
}
```

Run:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

---

# 3. Prisma Client

## src/database/prisma.js

```js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;
```

---

# 4. Attendance Command

## src/commands/attendance/create.js

```js
const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('attendance-create')
    .setDescription('Create attendance panel'),

  async execute(interaction) {

    const embed = new EmbedBuilder()
      .setTitle('📋 Astron Attendance')
      .setDescription('Click below to mark attendance.')
      .setColor('#5865F2');

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('attendance_present')
        .setLabel('Present')
        .setStyle(ButtonStyle.Success),

      new ButtonBuilder()
        .setCustomId('attendance_late')
        .setLabel('Late')
        .setStyle(ButtonStyle.Secondary),

      new ButtonBuilder()
        .setCustomId('attendance_absent')
        .setLabel('Absent')
        .setStyle(ButtonStyle.Danger)
    );

    await interaction.channel.send({
      embeds: [embed],
      components: [row]
    });

    await interaction.reply({
      content: 'Attendance panel created.',
      ephemeral: true
    });
  }
};
```

---

# 5. Attendance Button Event

## src/events/attendanceButtons.js

```js
const prisma = require('../database/prisma');

module.exports = {
  name: 'interactionCreate',

  async execute(interaction) {

    if (!interaction.isButton()) return;

    if (!interaction.customId.startsWith('attendance_')) return;

    const status = interaction.customId.replace('attendance_', '');

    const existing = await prisma.attendance.findFirst({
      where: {
        guildId: interaction.guild.id,
        userId: interaction.user.id
      }
    });

    if (existing) {
      return interaction.reply({
        content: 'You already marked attendance.',
        ephemeral: true
      });
    }

    await prisma.attendance.create({
      data: {
        guildId: interaction.guild.id,
        userId: interaction.user.id,
        status
      }
    });

    await interaction.reply({
      content: `Attendance marked as ${status}.`,
      ephemeral: true
    });
  }
};
```

---

# 6. Verification Setup Command

## src/commands/verification/setup.js

```js
const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('verify-setup')
    .setDescription('Setup verification panel'),

  async execute(interaction) {

    const embed = new EmbedBuilder()
      .setTitle('🔒 Verification')
      .setDescription('Click verify below to access the server.')
      .setColor('#2B2D31');

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('verify_button')
        .setLabel('Verify')
        .setStyle(ButtonStyle.Success)
    );

    await interaction.channel.send({
      embeds: [embed],
      components: [row]
    });

    await interaction.reply({
      content: 'Verification panel created.',
      ephemeral: true
    });
  }
};
```

---

# 7. Verification Button Event

## src/events/verifyButton.js

```js
module.exports = {
  name: 'interactionCreate',

  async execute(interaction) {

    if (!interaction.isButton()) return;

    if (interaction.customId !== 'verify_button') return;

    const member = interaction.member;

    const accountAge = Math.floor(
      (Date.now() - member.user.createdTimestamp) /
      (1000 * 60 * 60 * 24)
    );

    if (accountAge < 7) {
      return interaction.reply({
        content: 'Your account is too new to verify.',
        ephemeral: true
      });
    }

    const role = interaction.guild.roles.cache.find(r => r.name === 'Verified');

    if (!role) {
      return interaction.reply({
        content: 'Verified role not found.',
        ephemeral: true
      });
    }

    await member.roles.add(role);

    await interaction.reply({
      content: 'You are now verified.',
      ephemeral: true
    });
  }
};
```

---

# 8. Alt Detector

## src/events/altDetector.js

```js
const {
  EmbedBuilder
} = require('discord.js');

module.exports = {
  name: 'guildMemberAdd',

  async execute(member) {

    const age = Math.floor(
      (Date.now() - member.user.createdTimestamp) /
      (1000 * 60 * 60 * 24)
    );

    if (age > 7) return;

    const logChannel = member.guild.channels.cache.find(
      c => c.name === 'security-logs'
    );

    if (!logChannel) return;

    const embed = new EmbedBuilder()
      .setTitle('⚠️ Suspicious Account Detected')
      .addFields(
        { name: 'User', value: `${member.user.tag}` },
        { name: 'Account Age', value: `${age} days` }
      )
      .setColor('Red');

    logChannel.send({ embeds: [embed] });
  }
};
```

---

# 9. Anti Nuke Event

## src/events/antiChannelDelete.js

```js
const {
  AuditLogEvent
} = require('discord.js');

module.exports = {
  name: 'channelDelete',

  async execute(channel) {

    const logs = await channel.guild.fetchAuditLogs({
      type: AuditLogEvent.ChannelDelete,
      limit: 1
    });

    const entry = logs.entries.first();

    if (!entry) return;

    const executor = entry.executor;

    const member = await channel.guild.members.fetch(executor.id);

    if (!member.bannable) return;

    await member.ban({
      reason: 'Anti Nuke Protection'
    });
  }
};
```

---

# 10. Event Loader

## src/handlers/eventHandler.js

```js
const fs = require('fs');

module.exports = (client) => {

  const eventFiles = fs.readdirSync('./src/events')
    .filter(file => file.endsWith('.js'));

  for (const file of eventFiles) {

    const event = require(`../events/${file}`);

    client.on(event.name, (...args) => event.execute(...args));
  }
};
```

---

# 11. Main Bot File

## src/index.js

```js
require('dotenv').config();

const {
  Client,
  GatewayIntentBits
} = require('discord.js');

const loadEvents = require('./handlers/eventHandler');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

loadEvents(client);

client.login(process.env.TOKEN);
```

---

# 12. Railway Variables

```env
TOKEN=
DATABASE_URL=
CLIENT_ID=
```

---

# 13. Recommended Channels

Create:

* security-logs
* attendance-logs
* verification
