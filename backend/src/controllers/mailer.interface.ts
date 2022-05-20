export interface Message
{
	from : string;
	to : string;
	subject : string;
	text : string;
}

export interface RegisterMailer
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
