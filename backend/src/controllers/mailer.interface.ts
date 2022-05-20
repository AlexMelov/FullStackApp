export interface Message
{
	from : string;
	to : string;
	subject : string;
	text : string;
}

export interface Register
{
	confirmation :
	{
		subject : string, text : string
	},
	challenge :
	{
		subject : string, text : string
	}
}

export interface Challenge
{
	confirmation :
	{
		subject : string, text : string
	},
	challenge :
	{
		subject : string, text : string
	}
}
