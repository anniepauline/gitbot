const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("repolink")
		.setDescription('Enter a link to track repo on github or gitlab')
		
        // add args to enter repo link
        .addStringOption(option => 
			option.setName('link')
			.setDescription('The link to the repo')
			.setRequired(true))
           
         // add boolean to track only first good issues
        .addBooleanOption(option =>
            option.setName('only_good_first_issue')
            .setDescription('Track only good first issues')
            .setRequired(true)),

	async execute(interaction) {
        const onlyGoodFirstIssue = interaction.options.getBoolean('only_good_first_issue');
        const link = interaction.options.getString('link');
        if (onlyGoodFirstIssue){
            return interaction.reply(`Only good first issues will be tracked at ${link}`);
        }
		return interaction.reply(`Tracking repo at: ${link}`);
	},
};
