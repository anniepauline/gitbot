const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("repolink")
		.setDescription('Enter a link to track repo on github or gitlab')
		.addStringOption(option => 
			option.setName('link')
			.setDescription('The link to the repo')
			.setRequired(true)),
	async execute(interaction) {
		const link = interaction.options.getString('link');
		return interaction.reply(`Tracking repo at: ${link}`);
	},
};
