export interface Token
{
	token ?: string;
	// todo: remove from token
	action ?: string;
}

// todo: we need either to return Token or Action

export interface Action
{
	action ?: string;
}
