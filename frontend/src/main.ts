import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.metadata.environment === 'prod')
{
	enableProdMode();
}
else
{
	console.table(environment.metadata);
}

platformBrowserDynamic().bootstrapModule(AppModule);
