import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Import HttpClientModule

// Modify appConfig to include HttpClient
bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers, // Add any other existing providers from appConfig
    provideHttpClient() // Add HttpClient provider here
  ]
})
  .catch((err) => console.error(err));
