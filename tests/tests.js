import test from 'ava';
import matchProperty from '../index.js';

test(t => {
	t.deepEqual(
		matchProperty('blk'),
		'Block'
	);
	t.throws(
		() => matchProperty('Blk'),
		Error
	);
	t.deepEqual(
		matchProperty('Block'),
		'Block'
	);
	t.throws(
		() => matchProperty('block'),
		Error
	);
	t.deepEqual(
		matchProperty('ASCII'),
		'ASCII'
	);
	t.deepEqual(
		matchProperty('Any'),
		'Any'
	);
	t.deepEqual(
		matchProperty('Assigned'),
		'Assigned'
	);
	t.deepEqual(
		matchProperty('AHex'),
		'ASCII_Hex_Digit'
	);
	t.deepEqual(
		matchProperty('Comp_Ex'),
		'Full_Composition_Exclusion'
	);
	t.deepEqual(
		matchProperty('Full_Composition_Exclusion'),
		'Full_Composition_Exclusion'
	);
	t.deepEqual(
		matchProperty('gc'),
		'General_Category'
	);
	t.deepEqual(
		matchProperty('General_Category'),
		'General_Category'
	);
	t.deepEqual(
		matchProperty('sc'),
		'Script'
	);
	t.deepEqual(
		matchProperty('Script'),
		'Script'
	);
	t.deepEqual(
		matchProperty('scx'),
		'Script_Extensions'
	);
	t.deepEqual(
		matchProperty('Script_Extensions'),
		'Script_Extensions'
	);
	t.throws(
		() => matchProperty('Script Extensions'),
		Error
	);
	t.deepEqual(
		matchProperty('isc'),
		'ISO_Comment'
	);
	t.throws(
		() => matchProperty('ISC'),
		Error
	);
	t.deepEqual(
		matchProperty('Emoji_Modifier'),
		'Emoji_Modifier'
	);
	t.throws(
		() => matchProperty('emojimodifier'),
		Error
	);
	t.deepEqual(
		matchProperty('Emoji_Component'),
		'Emoji_Component'
	);
	t.throws(
		() => matchProperty('emojicomponent'),
		Error
	);
	t.throws(
		() => matchProperty('unknown property'),
		Error
	);
});
