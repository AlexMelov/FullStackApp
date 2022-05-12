export interface User
{
	_id : string;
	email : string;
	password : string;
}

export type Token =
{
	email : string;
	userId : string;
	token : string;
}
