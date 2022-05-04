import { Injectable } from '@angular/core';
import { CrudService } from 'ngx-crud';

@Injectable()
export class CrudServiceCustom<
	RequestBody,
	ResponseBody,
	CreateRequestBody = RequestBody,
	CreateResponseBody = ResponseBody,
	ReadResponseBody = ResponseBody,
	FindResponseBody = ResponseBody[],
	UpdateRequestBody = RequestBody,
	UpdateResponseBody = void,
	PatchRequestBody = Partial<RequestBody>,
	PatchResponseBody = void,
	DeleteResponseBody = void,
	CustomRequestBody = RequestBody,
	CustomResponseBody = ResponseBody | ResponseBody[]
> extends CrudService<
	RequestBody,
	ResponseBody,
	CreateRequestBody,
	CreateResponseBody,
	ReadResponseBody,
	FindResponseBody,
	UpdateRequestBody,
	UpdateResponseBody,
	PatchRequestBody,
	PatchResponseBody,
	DeleteResponseBody,
	CustomRequestBody,
	CustomResponseBody
>
{
}
