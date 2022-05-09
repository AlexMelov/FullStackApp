export interface User
{
	email : string;
	password : string;
}

export type Token =
	{
		email : string;
		userId : string | {};
	}
