const dicas = [
"Learn words in context: When learning new words, it's important to understand them in context. Provide example sentences that illustrate the correct usage of the words to help users grasp their meaning and application in real-life situations. Example: 'The word 'delighted' means 'pleased.' For instance, you can say, 'I'm delighted to meet you.'",
"Subtle differences between words: Explain the subtle differences between words that may be confusing, such as synonyms and antonyms. This will help users understand the nuances of the English language. Example: 'Although 'happy' and 'glad' are synonyms and mean 'pleased,' 'happy' is more frequently used to describe an overall state of happiness, while 'glad' is used to express contentment with something specific.",
"Idiomatic expressions: Introduce common idiomatic expressions and their literal and figurative meanings. These expressions can be a challenging part of learning a new language, and providing examples will help users understand their proper usage.  Example: 'The idiomatic expression 'break a leg' is used to wish someone good luck. It doesn't literally mean breaking a leg!",
"Grammar rules and sentence structures: Provide clear explanations of English grammar rules and offer examples of how to correctly use different sentence structures. This will help users construct accurate sentences and enhance their grammar skills. Example: 'In English, we use the simple present tense to talk about habitual actions. For example, 'I usually go to the gym on Mondays.'",
"Pronunciation tips: Include information about the correct pronunciation of English words, as this is a challenging area for many learners. Provide phonetic transcriptions or audio to assist users in pronouncing words correctly.  Example: 'The word 'schedule' is pronounced as 'sked-yool,' not 'shed-yool.'",
"Common collocations: Introduce common collocations, which are words that frequently go together. Understanding collocations is essential for natural-sounding English. Provide examples of collocations to help users improve their vocabulary and fluency. Example: 'Instead of saying 'make a decision,' we often say 'take a decision' in English.",
"Word forms: Explain different word forms, such as nouns, verbs, adjectives, and adverbs, for each entry in your dictionary. This will help users understand how words can change and be used in various contexts. Example: 'The noun form of 'strong' is 'strength,' and the adverb form is 'strongly.'",
"Common prefixes and suffixes: Teach users about common prefixes and suffixes in English and how they affect the meaning of words. This knowledge will enable users to decipher unfamiliar words based on their prefixes and suffixes.  Example: 'The prefix 'un-' is often added to words to indicate the opposite or negation. For example, 'happy' becomes 'unhappy,' meaning not happy.",
"Phrasal verbs: Introduce phrasal verbs, which are verb phrases made up of a verb and one or more particles (prepositions or adverbs). Provide explanations and examples of phrasal verbs to help users understand their meanings and usage.  Example: 'The phrasal verb 'look up' means to search for information. For instance, 'I need to look up the definition of this word.'",
"Commonly confused words: Clarify the differences between commonly confused words, such as 'their,' 'there,' and 'they're,' or 'its' and 'it's.' Help users understand the correct usage of these words to avoid mistakes.  Example: ''Their' is a possessive pronoun used to show ownership, while 'they're' is a contraction of 'they are.'",
];

function gerarDica() {
	const indiceAleatorio = Math.floor(Math.random() * dicas.length);
	const dica = dicas[indiceAleatorio];
	document.getElementById("dica").innerHTML = dica;
}

gerarDica();
