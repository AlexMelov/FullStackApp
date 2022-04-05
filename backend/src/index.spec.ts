import { getHandler } from './controller';
import { Response, Request } from 'express';

describe('Get all users request', () =>
{
	let mockRequest : Partial<Request>;
	let mockResponse : Partial<Response>;
	let responseObj : {} = {};

	beforeEach(() =>
	{
		mockRequest = {};
		mockResponse = {
			statusCode: 0,
			send: jest.fn().mockImplementation(result =>
			{
				responseObj = result;
			})
		};
	});
	test( '200 - users', () =>
	{
		const expectedStatusCode : number = 200;
		const expectedResponse : {} =
			{
				users : [
					{
						title: 'My todo from Jest!',
						_id: '1'
					},
					{
						title: 'My second todo from Jest!',
						_id: '2'
					}
				]
			};

		getHandler(mockRequest as Request, mockResponse as Response );
		expect(mockResponse.statusCode).toBe(expectedStatusCode);
		expect(responseObj).toEqual(expectedResponse);

	});

});
