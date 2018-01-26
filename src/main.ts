import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import download from 'mvn-artifact-download';

if (environment.production) {
  enableProdMode();
}


download('de.tnag.kulapo.prototype.favorites:rest-impl:ts:dto:0.0.1-SNAPSHOT', null, 'http://bi-02:8091/nexus/content/groups/public/');


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
