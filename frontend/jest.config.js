module.exports =
{
	moduleNameMapper:
	{
		'@core/(.*)': '<rootDir>/src/app/core/$1',
	},
	preset: 'jest-preset-angular',
	testPathIgnorePatterns:
	[
		"<rootDir>/cypress"
	]
};
