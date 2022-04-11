import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environmentHelper } from './environments/environment';

if (environmentHelper('prod'))
{
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(error => ({ message:error }));
