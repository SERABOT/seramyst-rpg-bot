const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('start')
        .setDescription('Start your adventure in Seramyst RPG'),
    async execute(interaction) {
        await interaction.reply('🗺️ Your journey in Seramyst has begun!');
    },
};
