import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';


// Bootstrap the main application and the header component
// This allows both components to be initialized and rendered in the application
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
